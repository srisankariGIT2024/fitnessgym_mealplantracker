import React from 'react';
import { Link, useLocation } from 'react-router-dom';  // Import Link and useLocation
import Logo from '../Images/logo.jpg';
import AdminProfile from '../Images/admin_profile.jpg';

function MentorSidebar() {
    const location = useLocation();  // Get current URL location

    // Determine the active menu item based on the current location
    const getActiveClass = (path) => {
        return location.pathname === path ? 'bg-red-800 text-white' : 'text-white';
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
                                <svg fill="currentColor" width="20px" height="20px" viewBox="0 0 296 296">
                                    <g>
                                        <path d="M271.333,34H247V24c0-13.233-10.767-24-24-24s-24,10.767-24,24v10h-27V24c0-13.233-10.767-24-24-24s-24,10.767-24,24v10H97
        V24C97,10.767,86.233,0,73,0S49,10.767,49,24v10H25.333C20.915,34,17,37.582,17,42v58v188c0,4.418,3.915,8,8.333,8h246
        c4.418,0,7.667-3.582,7.667-8V100V42C279,37.582,275.751,34,271.333,34z M73,16c4.411,0,8,3.589,8,8v28c0,4.411-3.589,8-8,8
        s-8-3.589-8-8V24C65,19.589,68.589,16,73,16z M148,16c4.411,0,8,3.589,8,8v28c0,4.411-3.589,8-8,8s-8-3.589-8-8V24
        C140,19.589,143.589,16,148,16z M223,16c4.411,0,8,3.589,8,8v28c0,4.411-3.589,8-8,8c-4.411,0-8-3.589-8-8V24
        C215,19.589,218.589,16,223,16z M33,171h63v47H33V171z M33,233h63v47H33V233z M111,233h72v47h-72V233z M198,233h65v47h-65V233z
        M263,218h-65v-47h65V218z M183,218h-72v-47h72V218z M111,156v-48h72v48H111z M96,108v48H33v-48H96z M263,156h-65v-48h65V156z"/>
                                        <polygon points="61.908,149.611 85.689,123.742 74.646,113.59 60.428,129.057 54.237,124.014 44.763,135.643 	" />
                                        <polygon points="158.145,113.59 143.927,129.057 137.736,124.014 128.262,135.643 145.407,149.611 169.188,123.742 	" />
                                        <polygon points="227.407,149.611 251.188,123.742 240.145,113.59 225.927,129.057 219.736,124.014 210.262,135.643 	" />
                                        <polygon points="74.646,175.59 60.428,191.057 54.237,186.014 44.763,197.643 61.908,211.611 85.689,185.742 	" />
                                        <polygon points="145.407,211.611 169.188,185.742 158.145,175.59 143.927,191.057 137.736,186.014 128.262,197.643 	" />
                                        <polygon points="227.407,211.611 251.188,185.742 240.145,175.59 225.927,191.057 219.736,186.014 210.262,197.643 	" />
                                        <polygon points="74.646,238.59 60.428,254.057 54.237,249.014 44.763,260.643 61.908,274.611 85.689,248.742 	" />
                                        <polygon points="158.145,238.59 143.927,254.057 137.736,249.014 128.262,260.643 145.407,274.611 169.188,248.742 	" />
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
