import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="w-full">
            <nav className="bg-gray-900 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Brand logo */}
                    <a href="#">
                        <h1 className="text-white text-2xl font-semibold">HR Consult</h1>
                    </a>

                    {/* Hamburger Icon */}
                    <button
                        className="text-white block lg:hidden"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex space-x-4">
                        <li><a href="#about" className="text-white">About Us</a></li>
                        <li><a href="#services" className="text-white">Services</a></li>
                        <li><a href="#contact" className="text-white">Contact</a></li>
                    </ul>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed z-50 inset-y-0 left-0 bg-gray-900 p-6 w-64 transform transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
                >
                    {/* Brand logo */}
                    <a href="#" onClick={toggleMenu}>
                        <h1 className="text-white text-2xl">HR Consult</h1>
                    </a>
                    <ul className="flex flex-col space-y-4 mt-4 text-white">
                        <li><a href="#about" onClick={toggleMenu}>About Us</a></li>
                        <li><a href="#services" onClick={toggleMenu}>Services</a></li>
                        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
