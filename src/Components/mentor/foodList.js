import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MentorSidebar from './mentorSidebar';

function FoodList() {
    const [foods, setFoods] = useState([]);
    const [newFood, setNewFood] = useState({
        foodName: '',
        portionSize: '',
        portionSizeUnit: '',
        carbs: '',
        proteins: '',
        fats: '',
        fiber: '',
        calories: '',
        status: 1,
        deleted: 0,
    });

    const [alert, setAlert] = useState(null); // State for showing alerts
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [searchQuery, setSearchQuery] = useState('');

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const filteredFoods = Array.isArray(foods)
        ? foods.filter(food =>
            food.foodName.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : [];

    const currentFoods = filteredFoods.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredFoods.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); // Reset to first page on search change
    };

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const response = await axios.get('http://localhost:5000/foods');
                if (Array.isArray(response.data.foods)) {
                    setFoods(response.data.foods);
                } else {
                    console.error('Received data is not an array:', response.data.foods);
                }
            } catch (error) {
                console.error('Error fetching foods:', error);
            }
        };
        fetchFoods();
    }, []);

    const handleNewFoodChange = (e) => {
        setNewFood({
            ...newFood,
            [e.target.name]: e.target.value,
        });
    };

    const showAlert = (message, type) => {
        setAlert({ message, type });
        setTimeout(() => setAlert(null), 5000); // Hide the alert after 5 seconds
    };

    const handleSaveNewFood = async () => {
        // Empty field validation
        if (!newFood.foodName || !newFood.portionSize || !newFood.portionSizeUnit || !newFood.carbs || !newFood.proteins || !newFood.fats || !newFood.fiber || !newFood.calories) {
            showAlert('All fields are required', 'error');
            return;
        }

        // Duplicate validation for new food item
        const duplicateFood = foods.find(food => food.foodName.toLowerCase() === newFood.foodName.toLowerCase());
        if (duplicateFood && newFood._id !== duplicateFood._id) {
            showAlert('This food item already exists!', 'error');
            return;
        }

        // If editing an existing food item, update it
        if (newFood._id) {
            try {
                const response = await fetch(`http://localhost:5000/foods/${newFood._id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newFood),
                });

                if (response.ok) {
                    const updatedFood = await response.json();
                    setFoods((prevFoods) =>
                        prevFoods.map((item) => (item._id === newFood._id ? updatedFood : item))
                    );
                    showAlert('Food item updated successfully!', 'success');
                    setNewFood({ // Clear form after update
                        foodName: '',
                        portionSize: '',
                        portionSizeUnit: '',
                        carbs: '',
                        proteins: '',
                        fats: '',
                        fiber: '',
                        calories: '',
                        status: 1,
                        deleted: 0,
                    });
                } else {
                    showAlert('Error updating food item', 'error');
                }
            } catch (error) {
                console.error('Error:', error);
                showAlert('Error updating food item', 'error');
            }
        } else {
            // If adding a new food item
            try {
                const response = await fetch('http://localhost:5000/addFoodItem', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newFood),
                });

                if (response.ok) {
                    const savedFood = await response.json();
                    setFoods((prevFoods) => [...prevFoods, savedFood]);
                    showAlert('Food item added successfully!', 'success');
                    setNewFood({ // Clear form after adding
                        foodName: '',
                        portionSize: '',
                        portionSizeUnit: '',
                        carbs: '',
                        proteins: '',
                        fats: '',
                        fiber: '',
                        calories: '',
                        status: 1,
                        deleted: 0,
                    });
                } else {
                    showAlert('Error saving food item', 'error');
                }
            } catch (error) {
                console.error('Error:', error);
                showAlert('Error saving food item', 'error');
            }
        }
    };

    const handleDeleteFood = async (foodId) => {
        try {
            const response = await fetch(`http://localhost:5000/foods/delete/${foodId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ deleted: 1 }),
            });

            if (response.ok) {
                setFoods((prevFoods) => prevFoods.filter((food) => food._id !== foodId));
                showAlert('Food item deleted successfully!', 'success');
            } else {
                showAlert('Error deleting food item', 'error');
            }
        } catch (error) {
            console.error('Error:', error);
            showAlert('Error deleting food item', 'error');
        }
    };

    const handleEditFood = (food) => {
        setNewFood({
            _id: food._id,
            foodName: food.foodName,
            portionSize: food.portionSize,
            portionSizeUnit: food.portionSizeUnit,
            carbs: food.carbs,
            proteins: food.proteins,
            fats: food.fats,
            fiber: food.fiber,
            calories: food.calories,
        });
    };

    return (
        <>
            <MentorSidebar />
            <div className="p-4 sm:ml-64">
                <div className="p-4 dark:border-gray-700 mt-14">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-2xl font-bold text-gray-700">List of Food Items</h1>
                        </div>
                        {/* Alert */}
                        {alert && (
                            <div className={`alert ${alert.type === 'success' ? 'bg-green-200' : 'bg-red-200'} p-4 mb-4 rounded`}>
                                {alert.message}
                            </div>
                        )}

                        {/* Search Bar */}
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Search by food name"
                            className="mb-4 p-2 border border-gray-300 rounded"
                        />

                        {/* Table */}
                        <table
                            className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr className="bg-red-400 text-white">
                                    <th className="border-r px-6 py-4 dark:border-neutral-500">Food Name</th>
                                    <th className="border-r px-6 py-4 dark:border-neutral-500">Portion Size</th>
                                    <th className="border-r px-6 py-4 dark:border-neutral-500">Portion Size Unit</th>
                                    <th className="border-r px-6 py-4 dark:border-neutral-500">Carbs (g)</th>
                                    <th className="border-r px-6 py-4 dark:border-neutral-500">Proteins (g)</th>
                                    <th className="border-r px-6 py-4 dark:border-neutral-500">Fats (g)</th>
                                    <th className="border-r px-6 py-4 dark:border-neutral-500">Fiber (g)</th>
                                    <th className="border-r px-6 py-4 dark:border-neutral-500">Calories</th>
                                    <th className="border-r px-6 py-4 dark:border-neutral-500">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Only render this row if on the first page */}
                                <tr className="border-b dark:border-neutral-500">
                                    <td>
                                        <input
                                            type="text"
                                            name="foodName"
                                            value={newFood.foodName}
                                            onChange={handleNewFoodChange}
                                            placeholder="Enter Food Name"
                                            className="p-2 border border-gray-300 rounded"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            name="portionSize"
                                            value={newFood.portionSize}
                                            onChange={handleNewFoodChange}
                                            placeholder="Enter Portion Size"
                                            className="p-2 border border-gray-300 rounded"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="portionSizeUnit"
                                            value={newFood.portionSizeUnit}
                                            onChange={handleNewFoodChange}
                                            placeholder="Unit"
                                            className="p-2 border border-gray-300 rounded"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            name="carbs"
                                            value={newFood.carbs}
                                            onChange={handleNewFoodChange}
                                            placeholder="Enter Carbs"
                                            className="p-2 border border-gray-300 rounded"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            name="proteins"
                                            value={newFood.proteins}
                                            onChange={handleNewFoodChange}
                                            placeholder="Enter Proteins"
                                            className="p-2 border border-gray-300 rounded"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            name="fats"
                                            value={newFood.fats}
                                            onChange={handleNewFoodChange}
                                            placeholder="Enter Fats"
                                            className="p-2 border border-gray-300 rounded"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            name="fiber"
                                            value={newFood.fiber}
                                            onChange={handleNewFoodChange}
                                            placeholder="Enter Fiber"
                                            className="p-2 border border-gray-300 rounded"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            name="calories"
                                            value={newFood.calories}
                                            onChange={handleNewFoodChange}
                                            placeholder="Enter Calories"
                                            className="p-2 border border-gray-300 rounded"
                                        />
                                    </td>
                                    <td>
                                        <button
                                            onClick={handleSaveNewFood}
                                            className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
                                        >
                                            {newFood._id ? 'Update' : 'Add'}
                                        </button>
                                    </td>
                                </tr>

                                {currentFoods.map((food) => (
                                    <tr className="border-b dark:border-neutral-500" key={food._id}>
                                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">{food.foodName}</td>
                                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">{food.portionSize}</td>
                                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">{food.portionSizeUnit}</td>
                                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">{food.carbs}</td>
                                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">{food.proteins}</td>
                                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">{food.fats}</td>
                                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">{food.fiber}</td>
                                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">{food.calories}</td>
                                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                            <button
                                                onClick={() => handleEditFood(food)}
                                                className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded mr-2"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDeleteFood(food._id)}
                                                className="bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Pagination */}
                        <div className="mt-4 mr-4">
                            <ul className="flex justify-end">
                                {pageNumbers.map(number => (
                                    <li key={number} className="mr-2">
                                        <button
                                            onClick={() => handlePageClick(number)}
                                            className={`${number === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                                                } py-2 px-4 rounded`}
                                        >
                                            {number}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default FoodList;
