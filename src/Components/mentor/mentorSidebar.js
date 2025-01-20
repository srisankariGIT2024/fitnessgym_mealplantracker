import React from 'react';
import { Link, useLocation } from 'react-router-dom';  // Import Link and useLocation
import Logo from '../Images/logo.jpg';
import AdminProfile from '../Images/admin_profile.jpg';

function MentorSidebar() {
    const location = useLocation();  // Get current URL location

    // Determine the active menu item based on the current location
    const getActiveClass = (path) => {
        return location.pathname === path ? 'bg-[#FBFBFB] text-black' : 'text-white';
    };

    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-[#09122C] border-b border-gray-200 dark:bg-[#09122C] dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-[#8E1616] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <a href="/" className="flex ms-2 md:me-24">
                                <img src={Logo} className="h-8 me-3" alt="FlowBite Logo" />
                                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white">ADMIN</span>
                            </a>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ms-3">
                                <div>
                                    <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                        <span className="sr-only">Open user menu</span>
                                        <img src={AdminProfile} alt="image_description" className="w-8 h-8 rounded-full" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-[#09122C] border-r border-gray-200 sm:translate-x-0 dark:bg-[#09122C] dark:border-gray-700" aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-[#09122C] dark:bg-[#09122C]">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link
                                to="/mentor-dashboard"
                                className={`flex items-center p-2 rounded-lg ${getActiveClass('/mentor-dashboard')} hover:bg-[#8E1616] dark:hover:bg-[#8E1616] group`}
                            >
                                <svg className="w-5 h-5 text-gray-300 transition duration-75 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span className="ms-3">Dashboard</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/users-list"
                                className={`flex items-center p-2 rounded-lg ${getActiveClass('/users-list')} hover:bg-[#8E1616] dark:hover:bg-[#8E1616] group`}
                            >
                                <svg className="w-5 h-5 text-gray-300 transition duration-75 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                </svg>
                                <span className="ms-3">Users</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/foods"
                                className={`flex items-center p-2 rounded-lg ${getActiveClass('/foods')} hover:bg-[#8E1616] dark:hover:bg-[#8E1616] group`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24" className="w-5 h-5 text-gray-300 transition duration-75 group-hover:text-white" aria-hidden="true">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" />
                                </svg>
                                <span className="ms-3">Foods</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/diet-tracker"
                                className={`flex items-center p-2 rounded-lg ${getActiveClass('/diet-tracker')} hover:bg-[#8E1616] dark:hover:bg-[#8E1616] group`}
                            >
                                <svg viewBox="0 0 116.65 122.88" className="w-6 h-6" fill="white">
                                    <g>
                                        <path d="M64.87,0.59c0.91-0.84,2.33-0.78,3.17,0.13c0.84,0.91,0.78,2.33-0.13,3.17c-3.99,3.69-6.95,8.15-8.7,13.5 c-1.62,4.92-2.24,10.62-1.74,17.18c0.83-0.07,1.66-0.17,2.48-0.29c-0.1-1.1-0.27-2.2-0.52-3.31c-0.85-2.88-1.79-5.73-2.88-8.39 c-0.63-1.49-0.82-3.14-0.83-4.72c0.02-3.68,2.12-7.2,5.24-9.3c1.7-1.34,3.86-2.1,5.94-2.2C64.3,0.69,64.57,0.49,64.87,0.59z" />
                                    </g>
                                </svg>
                                <span className="ms-3">Diet Tracker</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </aside>
        </>
    );
}

export default MentorSidebar;
