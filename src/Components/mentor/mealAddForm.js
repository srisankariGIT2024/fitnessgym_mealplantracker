import React, { useState } from 'react';

const MealAddForm = ({ date, time }) => {
    const [meal, setMeal] = useState("");

    const handleSubmit = () => {
        // Handle meal save here (API call or state management)
        console.log(`Meal for ${date} at ${time}: ${meal}`);
    };

    return (
        <div className="meal-form">
            <h3>Add a meal for {date} at {time}</h3>
            <input
                type="text"
                value={meal}
                onChange={(e) => setMeal(e.target.value)}
                placeholder="Describe your meal"
            />
            <button onClick={handleSubmit}>Save Meal</button>
        </div>
    );
};

export default MealAddForm;
