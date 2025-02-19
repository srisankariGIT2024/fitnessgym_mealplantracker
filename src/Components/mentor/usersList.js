import React, { useState } from 'react';
import MentorSidebar from './mentorSidebar';

function UsersList() {
    const [dropdownValue, setDropdownValue] = useState("Last 7 days");
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleDropdownChange = (e) => {
        setDropdownValue(e.target.value);
    };

    return (
        <>
            <MentorSidebar />
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">

                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                            <div>
                                <button
                                    id="dropdownRadioButton"
                                    data-dropdown-toggle="dropdownRadio"
                                    className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                    type="button"
                                >
                                    {dropdownValue}
                                    <svg
                                        className="w-2.5 h-2.5 ms-2.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 4 4 4-4"
                                        />
                                    </svg>
                                </button>
                                <div
                                    id="dropdownRadio"
                                    className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                                >
                                    <ul
                                        className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownRadioButton"
                                    >
                                        {['Last day', 'Last 7 days', 'Last 30 days', 'Last month', 'Last year'].map((label, index) => (
                                            <li key={index}>
                                                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                                    <input
                                                        id={`filter-radio-example-${index + 1}`}
                                                        type="radio"
                                                        value={label}
                                                        name="filter-radio"
                                                        checked={dropdownValue === label}
                                                        onChange={handleDropdownChange}
                                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                    />
                                                    <label
                                                        htmlFor={`filter-radio-example-${index + 1}`}
                                                        className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                                                    >
                                                        {label}
                                                    </label>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <label htmlFor="table-search" className="sr-only">
                                Search
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                                    <svg
                                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="table-search"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search for items"
                                />
                            </div>
                        </div>

                        {/* Table */}
                        <table className="w-full text-sm text-left rtl:text-right text-black bg-white">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-100 dark:text-black">
                                <tr>
                                    <th scope="col" className="p-4">
                                        <div className="flex items-center">
                                            <input
                                                id="checkbox-all-search"
                                                type="checkbox"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label htmlFor="checkbox-all-search" className="sr-only">
                                                checkbox
                                            </label>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Mobile Number
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Example Row */}
                                <tr className="bg-white border-b hover:bg-gray-50">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input
                                                id="checkbox-table-search-1"
                                                type="checkbox"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label htmlFor="checkbox-table-search-1" className="sr-only">
                                                checkbox
                                            </label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td className="px-6 py-4">Silver</td>
                                    <td className="px-6 py-4">Laptop</td>
                                    <td className="px-6 py-4">$2999</td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 hover:underline">
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                                {/* More rows go here */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UsersList;
