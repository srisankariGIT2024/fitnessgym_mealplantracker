import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Define the schema for the User model
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'mentor', 'admin'],
        default: 'user'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

// Hash the password before saving to the database
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next(); // Only hash password if it's modified
    this.password = await bcrypt.hash(this.password, 10); // Salt rounds set to 10
    next();
});

// Compare entered password with the hashed password stored in the database
userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

// Create the User model
const User = mongoose.model('users', userSchema);

export default User;
