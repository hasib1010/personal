import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.querySelector("html").setAttribute("data-theme", theme);
        document.querySelector("html").setAttribute("class", theme);
    }, [theme]);

    const handleToggle = () => {
        setTheme(prev => prev === "dark" ? "light" : "dark");
    };

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About me' },
        { path: '/projects', label: 'Projects' }
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-50">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <Link to={'/'}>  <h1 className="text-2xl font-bold text-gray-800 dark:text-white">HASIB</h1></Link>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map(({ path, label }) => (
                                <NavLink
                                    key={path}
                                    to={path}
                                    className={({ isActive }) =>
                                        `text-lg transition-colors duration-200 ${isActive
                                            ? 'text-blue-600 dark:text-blue-400'
                                            : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                        }`
                                    }
                                >
                                    {label}
                                </NavLink>
                            ))}

                            <button
                                onClick={handleToggle}
                                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                            >
                                {theme === 'dark' ? (
                                    <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                                ) : (
                                    <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                                )}
                            </button>
                        </div>

                        <div className="md:hidden flex items-center">
                            <button
                                onClick={handleToggle}
                                className="p-2 mr-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                            >
                                {theme === 'dark' ? (
                                    <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                                ) : (
                                    <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                                )}
                            </button>

                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                {isOpen ? (
                                    <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                                ) : (
                                    <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                                )}
                            </button>
                        </div>
                    </div>

                    {isOpen && (
                        <div className="md:hidden pb-4">
                            {navLinks.map(({ path, label }) => (
                                <NavLink
                                    key={path}
                                    to={path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `block px-4 py-2 text-lg ${isActive
                                            ? 'text-blue-600 dark:text-blue-400 bg-gray-100 dark:bg-gray-800'
                                            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                        }`
                                    }
                                >
                                    {label}
                                </NavLink>
                            ))}
                        </div>
                    )}
                </div>
            </nav>
            <div className="h-16"></div> {/* Spacer div to prevent content overlap */}
        </>
    );
};

export default Navbar;