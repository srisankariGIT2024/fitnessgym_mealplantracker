import React, { useEffect, useState } from "react";

const DietTrackerCalendar = () => {
  const [dietData, setDietData] = useState([]); // State to store diet data
  const [loading, setLoading] = useState(true); // State to handle loading state

  // Fetch the data from the API when the component is mounted
  useEffect(() => {
    const fetchDietData = async () => {
      try {
        const response = await fetch("http://localhost:5000/diet-tracker");
        const data = await response.json();
        setDietData(data); // Store the data in the state
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching diet data:", error);
        setLoading(false);
      }
    };

    fetchDietData();
  }, []); // Empty dependency array ensures the effect runs only once when the component is mounted

  if (loading) {
    return <div>Loading...</div>;
  }

  // Helper function to render the calendar grid
  const renderCalendar = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); // Get the current month
    const currentYear = currentDate.getFullYear(); // Get the current year

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // Get the number of days in the current month
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // Get the starting weekday of the month

    const calendarDays = [];
    let day = 1;

    // Fill in the grid with empty cells until the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays.push(<div className="empty-day" key={`empty-${i}`} />);
    }

    // Fill in the calendar days with actual dates
    for (let i = firstDayOfMonth; i < 7 * 6 && day <= daysInMonth; i++) {
      const dayDietData = dietData.filter(
        (item) => new Date(item.consumedAt).getDate() === day // Match date
      );

      // Display the calendar cell for each day
      calendarDays.push(
        <div
          key={day}
          className="calendar-day p-4 border border-gray-200 rounded-md relative"
        >
          <div className="day-number text-lg font-bold text-center">{day}</div>

          {dayDietData.length > 0 ? (
            <div className="diet-info mt-2">
              {dayDietData.map((data, index) => (
                <div key={index} className="meal-info text-xs">
                  <strong>{data.time}</strong>
                  <ul className="list-disc pl-4">
                    {data.foodItems.map((food, idx) => (
                      <li key={idx}>
                        {food.foodItem ? food.foodItem.foodName : "Unknown Food"} -{" "}
                        {food.consumedSize} {food.consumedSizeUnit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-xs text-center text-gray-400">No meals</div>
          )}
        </div>
      );

      day++;
    }

    return calendarDays;
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Diet Tracker Calendar</h1>
      <div className="calendar grid grid-cols-7 gap-4">
        {renderCalendar()}
      </div>
    </div>
  );
};

export default DietTrackerCalendar;
