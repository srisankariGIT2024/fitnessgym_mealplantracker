import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MentorSidebar from './mentorSidebar';
import Breadcrumb from './Breadcrumb'; // Import Breadcrumb (make sure the path is correct)

function FoodForm() {
    const navigate = useNavigate();
    const [foodName, setFoodName] = useState('');
    const [calories, setCalories] = useState('');
    const [carbs, setCarbs] = useState('');
    const [proteins, setProteins] = useState('');
    const [fats, setFats] = useState('');
    const [fiber, setFiber] = useState('');
    const [portionSize, setPortionSize] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newFood = {
            foodName,
            calories,
            carbs,
            proteins,
            fats,
            fiber,
            portionSize,
        };

        try {
            const response = await axios.post('/', newFood); // Replace with your API endpoint
            console.log('Food added:', response.data);
            // Optionally, clear the form or show a success message
        } catch (error) {
            console.error('Error adding food:', error);
        }
    };

    // Handle the 'Add Food Item' button click
    const handleBacktoListClick = () => {
        navigate('/foods');
    };

    return (
        <>
            <MentorSidebar />
            <div className="p-4 sm:ml-64">
                {/* Breadcrumb
                <Breadcrumb
                    paths={[
                        { name: 'Home', link: '/' },
                        { name: 'Foods', link: '/foods' },
                        { name: 'Add' }
                    ]}
                /> */}

                {/* Food Form */}
                <div className="p-4 dark:border-gray-700 mt-14">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-2xl font-bold text-gray-700">Add Food Items</h1>
                            <button
                                onClick={handleBacktoListClick} // Trigger the navigation on button click
                                className="bg-gray-500 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                            >
                                Back to List
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="food-name">Food Name</label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="food-name"
                                        type="text"
                                        value={foodName}
                                        onChange={(e) => setFoodName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="calories"
                                    >
                                        Calories
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="calories"
                                        type="number"
                                        placeholder="Calories"
                                        value={calories}
                                        onChange={(e) => setCalories(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="carbs"
                                    >
                                        Carbs (g)
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="carbs"
                                        type="number"
                                        placeholder="Carbs"
                                        value={carbs}
                                        onChange={(e) => setCarbs(e.target.value)}
                                    />
                                </div>
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="proteins"
                                    >
                                        Proteins (g)
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="proteins"
                                        type="number"
                                        placeholder="Proteins"
                                        value={proteins}
                                        onChange={(e) => setProteins(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="fats"
                                    >
                                        Fats (g)
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="fats"
                                        type="number"
                                        placeholder="Fats"
                                        value={fats}
                                        onChange={(e) => setFats(e.target.value)}
                                    />
                                </div>
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="fiber"
                                    >
                                        Fiber (g)
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="fiber"
                                        type="number"
                                        placeholder="Fiber"
                                        value={fiber}
                                        onChange={(e) => setFiber(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="portion-size"
                                    >
                                        Portion Size (g)
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="portion-size"
                                        type="number"
                                        placeholder="Portion Size"
                                        value={portionSize}
                                        onChange={(e) => setPortionSize(e.target.value)}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Add Food Item
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FoodForm;
