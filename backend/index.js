import express from 'express';
import { connect } from 'mongoose';
import bcrypt from 'bcryptjs';
import cors from 'cors';
import User from './models/userSchema.js';
import User_BasicDetails from './models/getstartedSchema.js';
import FoodItem from './models/foodListSchema.js';
import DietTracker from './models/dietTracker.js';
import jwt from 'jsonwebtoken';


const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for the frontend
app.use(cors({
    origin: 'http://localhost:3000', // Allow React frontend to make requests
    methods: ['GET', 'POST', 'PUT'],
    allowedHeaders: ['Content-Type'],
}));
// Connect to MongoDB
connect('mongodb://127.0.0.1:27017/fitness_db', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));


// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Check if both email and password are provided
    if (!email || !password) {
        return res.status(400).send({ message: 'Email and password are required' });
    }

    try {
        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).send({ message: 'Invalid email or password' });
        }

        // Compare entered password with stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).send({ message: 'Invalid email or password' });
        }

        // If login is successful, generate a JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email, role: user.role }, // Payload
            'your_jwt_secret', // Secret key (make sure to keep this secure)
            { expiresIn: '1h' } // Expiry time (1 hour in this case)
        );

        // Send response with status, token, and any other necessary details
        res.status(200).send({
            status: 'success',
            message: 'Login successful',
            token: token
        });
    } catch (err) {
        res.status(500).send({ message: 'Error logging in: ' + err });
    }
});

//Route to add contact form data
app.post('/getStartedData', async (req, res) => {
    const { firstname, lastname, emailid, mobilenum } = req.body;
    const status = 0;  // 0 - First Time Registered
    const deleted = 0; // 0 - Not deleted

    console.log(req.body);

    if (!mobilenum) {
        return res.status(400).send('Mobile number is required');
    }

    const formData = new User_BasicDetails({
        firstname: firstname,
        lastname: lastname,
        emailid: emailid,
        mobilenum: mobilenum,
        status: status,
        deleted: deleted,
    });

    try {
        await formData.save();
        console.log('Data saved successfully');
        res.status(200).send("Inserted data");
    } catch (err) {
        console.error("Error saving data:", err);
        res.status(500).send("Error inserting data");
    }
});

// Route to fetch foods list with pagination
app.get('/foods', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    try {
        const foods = await FoodItem.find({ deleted: 0 })
            .skip((page - 1) * limit)
            .limit(limit);

        const totalFoods = await FoodItem.countDocuments({ deleted: 0 });
        const totalPages = Math.ceil(totalFoods / limit);

        res.status(200).json({
            foods,
            page,
            totalPages,
            totalFoods
        });
    } catch (err) {
        console.error('Error fetching foods:', err);
        res.status(500).send({ message: 'Error fetching foods' });
    }
});

// Route to add a new food item
app.post('/addFoodItem', async (req, res) => {
    const { foodName, calories, carbs, proteins, fats, fiber, portionSize, portionSizeUnit, status, deleted } = req.body;

    if (!foodName || !calories || !carbs || !proteins || !fats || !fiber || !portionSize || !portionSizeUnit) {
        return res.status(400).send({ message: 'All fields are required' });
    }

    const newFoodItem = new FoodItem({
        foodName,
        calories,
        carbs,
        proteins,
        fats,
        fiber,
        portionSize,
        portionSizeUnit,
        status,
        deleted
    });

    try {
        await newFoodItem.save();
        res.status(201).json(newFoodItem);
    } catch (err) {
        console.error('Error saving food item:', err);
        res.status(500).send({ message: 'Error saving food item' });
    }
});

// Route to edit a food item
app.put('/foods/:id', async (req, res) => {
    const foodId = req.params.id;
    const { foodName, portionSize, portionSizeUnit, carbs, proteins, fats, fiber, calories, status, deleted } = req.body;

    if (!foodName || !portionSize || !portionSizeUnit || !carbs || !proteins || !fats || !fiber || !calories) {
        return res.status(400).send({ message: 'All fields are required' });
    }

    try {
        const updatedFood = await FoodItem.findByIdAndUpdate(foodId, {
            foodName,
            portionSize,
            portionSizeUnit,
            carbs,
            proteins,
            fats,
            fiber,
            calories,
            status,
            deleted
        }, { new: true });

        if (!updatedFood) {
            return res.status(404).send({ message: 'Food item not found' });
        }

        res.status(200).json(updatedFood);
    } catch (err) {
        console.error('Error updating food item:', err);
        res.status(500).send({ message: 'Error updating food item' });
    }
});

// Route to soft delete a food item
app.put('/foods/delete/:id', async (req, res) => {
    const foodId = req.params.id;
    console.log(foodId);
    try {
        const updatedFood = await FoodItem.findByIdAndUpdate(foodId, { deleted: 1 }, { new: true });

        if (!updatedFood) {
            return res.status(404).send({ message: 'Food item not found' });
        }

        res.status(200).json(updatedFood);
    } catch (err) {
        console.error('Error deleting food item:', err);
        res.status(500).send({ message: 'Error deleting food item' });
    }
});

// Fetch the diet tracker data and populate food details
app.get('/diet-tracker', async (req, res) => {
    try {
        const dietTrackerData = await DietTracker.find({})
            .populate({
                path: 'foodItems.foodItem', // The reference field in the DietTracker schema
                model: 'list_of_foods', // The model you're referencing to
                select: 'foodName calories' // Fields to return from ListOfFoods
            });

        if (dietTrackerData.length === 0) {
            return res.status(404).json({ message: 'No diet data found' });
        }

        console.log('Diet Tracker Data:', dietTrackerData); // For debugging purposes

        res.json(dietTrackerData); // Send the diet tracker data with populated food details
    } catch (err) {
        console.error('Error fetching diet data:', err);
        res.status(500).json({ message: 'Error fetching data' });
    }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
