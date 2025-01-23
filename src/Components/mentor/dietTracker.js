import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MentorSidebar from './mentorSidebar';

const DietTracker = () => {
  const [dietList, setDietList] = useState([]);
  const [selectedFood, setSelectedFood] = useState('');
  const [consumedSize, setConsumedSize] = useState('');
  const [sizeUnit, setSizeUnit] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/diet-tracker');
        console.log('Fetched Diet Data:', response.data); // Check if data is fetched correctly
        setDietList(response.data); // Update the state with the fetched data
      } catch (error) {
        console.error('Error fetching diet data:', error);
      }
    };

    fetchData();
  }, []);

  const timelineItems = [
    { time: '08:30 AM' },
    { time: '12:30 PM' },
    { time: '06:00 PM' },
  ];

  const getFoodSectionBackground = (time) => {
    if (time === '08:30 AM') {
      return '#FDFDEA';
    } else if (time === '12:30 PM') {
      return '#C3DDFD';
    } else if (time === '06:00 PM') {
      return '#E3F9E5';
    }
    return '#FFFFFF';
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you can process the form data, send it to your backend, or update the UI
    console.log('Form submitted:', { selectedFood, consumedSize, sizeUnit, date, time, year, month });
  };

  return (
    <>
      <MentorSidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column (Timeline) */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-2xl font-bold text-indigo-800">Diet Tracker</h1>
                </div>

                {timelineItems.map((item, index) => (
                  <div key={index} className="flex gap-x-3 mb-6">
                    <div className="w-16 text-end">
                      <span className="text-sm text-red-700">{item.time}</span>
                    </div>
                    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-indigo-200">
                      <div className="relative z-10 size-7 flex justify-center items-center">
                        <div className="size-2 rounded-full bg-red-500"></div>
                      </div>
                    </div>
                    <div
                      className="grow p-4 rounded-lg"
                      style={{ backgroundColor: getFoodSectionBackground(item.time) }}
                    >
                      <h3 className="flex gap-x-1.5 font-semibold text-red-600">Meal Consumed</h3>

                      {dietList.length > 0 ? (
                        <div>
                          {dietList
                            .filter((entry) => entry.time === item.time) // Filter based on the time field
                            .map((entry, entryIndex) => (
                              <div key={entryIndex} className="mt-2">
                                {entry.foodItems.map((foodItem, foodItemIndex) => (
                                  <div key={foodItemIndex}>
                                    {foodItem.foodItem && (
                                      <p className="text-sm text-gray-800">
                                        <strong>{foodItem.foodItem.foodName}</strong> - {foodItem.foodItem.calories} Calories
                                      </p>
                                    )}
                                  </div>
                                ))}
                              </div>
                            ))}
                        </div>
                      ) : (
                        <p>No meals recorded for this time slot.</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column (Form) */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-indigo-800 mb-4">Add Diet Record</h2>
                <form onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-1 gap-4">
                    {/* Date Selection */}
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                        Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md"
                      />
                    </div>

                    {/* Year and Month Selection */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="year" className="block text-sm font-medium text-gray-700">
                          Year
                        </label>
                        <input
                          type="number"
                          id="year"
                          value={year}
                          onChange={(e) => setYear(e.target.value)}
                          className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label htmlFor="month" className="block text-sm font-medium text-gray-700">
                          Month
                        </label>
                        <input
                          type="number"
                          id="month"
                          value={month}
                          onChange={(e) => setMonth(e.target.value)}
                          className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>

                    {/* Time Selection */}
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                        Time
                      </label>
                      <select
                        id="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md"
                      >
                        <option value="08:30 AM">08:30 AM</option>
                        <option value="12:30 PM">12:30 PM</option>
                        <option value="06:00 PM">06:00 PM</option>
                      </select>
                    </div>

                    {/* Food Item Selection */}
                    <div>
                      <label htmlFor="foodItem" className="block text-sm font-medium text-gray-700">
                        Food Item
                      </label>
                      <input
                        type="text"
                        id="foodItem"
                        value={selectedFood}
                        onChange={(e) => setSelectedFood(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md"
                      />
                    </div>

                    {/* Consumed Size */}
                    <div>
                      <label htmlFor="consumedSize" className="block text-sm font-medium text-gray-700">
                        Consumed Size
                      </label>
                      <input
                        type="number"
                        id="consumedSize"
                        value={consumedSize}
                        onChange={(e) => setConsumedSize(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md"
                      />
                    </div>

                    {/* Size Unit */}
                    <div>
                      <label htmlFor="sizeUnit" className="block text-sm font-medium text-gray-700">
                        Size Unit
                      </label>
                      <select
                        id="sizeUnit"
                        value={sizeUnit}
                        onChange={(e) => setSizeUnit(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md"
                      >
                        <option value="grams">Grams</option>
                        <option value="ml">Milliliters</option>
                        <option value="pieces">Pieces</option>
                      </select>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-4">
                      <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md"
                      >
                        Add Record
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DietTracker;
