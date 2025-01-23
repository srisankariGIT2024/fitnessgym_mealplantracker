import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MentorSidebar from './mentorSidebar';

const DietTracker = () => {
  const [dietList, setDietList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/diet-tracker');
        console.log("Fetched Diet Data:", response.data); // Check if data is fetched correctly
        setDietList(response.data); // Update the state with the fetched data
      } catch (error) {
        console.error('Error fetching diet data:', error);
      }
    };

    fetchData();
  }, []);

  const timelineItems = [
    { time: "08:30 AM" },
    { time: "12:30 PM" },
    { time: "06:00 PM" },
  ];

  const getFoodSectionBackground = (time) => {
    if (time === "08:30 AM") {
      return "#FDFDEA";
    } else if (time === "12:30 PM") {
      return "#C3DDFD";
    } else if (time === "06:00 PM") {
      return "#E3F9E5";
    }
    return "#FFFFFF";
  };

  return (
    <>
      <MentorSidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 dark:border-gray-700 mt-14">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-indigo-800 dark:text-indigo-800">
                Diet Tracker
              </h1>
            </div>

            {timelineItems.map((item, index) => (
              <div key={index} className="flex gap-x-3 mb-6">
                <div className="w-16 text-end">
                  <span className="text-sm text-red-700 dark:text-red-300">
                    {item.time}
                  </span>
                </div>
                {/* Add your icon component here */}
                <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-indigo-200 dark:after:bg-indigo-700">
                  <div className="relative z-10 size-7 flex justify-center items-center">
                    <div className="size-2 rounded-full bg-red-500 dark:bg-red-600"></div>
                  </div>
                </div>
                <div
                  className="grow p-4 rounded-lg"
                  style={{ backgroundColor: getFoodSectionBackground(item.time) }}
                >
                  <h3 className="flex gap-x-1.5 font-semibold text-red-600 dark:text-red-400">
                    Meal Consumed
                  </h3>

                  {dietList.length > 0 ? (
                    <div>
                      {dietList
                        .filter((entry) => entry.time === item.time) // Filter based on the time field
                        .map((entry, entryIndex) => (
                          <div key={entryIndex} className="mt-2">
                            {entry.foodItems.map((foodItem, foodItemIndex) => (
                              <div key={foodItemIndex}>
                                {foodItem.foodItem && (
                                  <p className="text-sm text-gray-800 dark:text-gray-800">
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
        </div>
      </div>
    </>
  );
};

export default DietTracker;
