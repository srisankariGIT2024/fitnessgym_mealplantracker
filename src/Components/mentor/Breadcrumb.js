import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

function Breadcrumb({ paths }) {
    return (
        <nav className="flex mb-4">
            <ul className="flex space-x-2 text-sm text-gray-600">
                {paths.map((path, index) => (
                    <li key={index} className="flex items-center">
                        {index > 0 && <span className="mx-2">/</span>}
                        {path.link ? (
                            <Link to={path.link} className="text-blue-600 hover:underline">{path.name}</Link>
                        ) : (
                            <span>{path.name}</span>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Breadcrumb;
