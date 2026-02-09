import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../assets/images/logo-white.png';

const Header: React.FC = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);

    const services = [
        "ICT Outsourcing",
        "ICT Support",
        "Networking Solutions",
        "Hardware & Software Solutions",
        "Telecommunications Solutions",
        "CCTV & Monitoring",
        "Access Control & Time Attendance",
        "ICT Connectivity"
    ];

    const resources = [
        "Blog / Insights",
        "News & Events",
        "Multimedia"
    ];

    return (
        <nav className="bg-black text-white py-4 border-b border-white/10 sticky top-0 z-50">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center">
                {/* Logo/Brand - Left Aligned */}
                <div className="flex-1 flex items-center">
                    <Link to="/" className="flex items-center">
                        <img src={logoWhite} alt="Anova Logo" className="h-10 w-auto object-contain" />
                    </Link>
                </div>

                {/* Navigation Menu - Centered */}
                <div className="hidden lg:flex items-center justify-center gap-8 uppercase text-[11px] font-bold tracking-widest">
                    <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                    <Link to="/about" className="hover:text-primary transition-colors">About</Link>

                    {/* Services Dropdown */}
                    <div
                        className="relative group cursor-pointer"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                    >
                        <div className="flex items-center gap-1 group-hover:text-primary transition-colors">
                            Services <span className="material-symbols-outlined text-sm">expand_more</span>
                        </div>

                        {/* Services Dropdown Menu */}
                        <div className={`absolute top-full left-1/2 -translate-x-1/2 w-64 bg-black border border-white/10 pt-4 pb-2 shadow-2xl transition-all duration-300 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                            <div className="flex flex-col">
                                {services.map((service, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="px-6 py-3 hover:bg-white hover:text-black transition-colors border-l-2 border-transparent hover:border-primary"
                                    >
                                        {service}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link to="/industries" className="hover:text-primary transition-colors">Industries</Link>

                    {/* Resources Dropdown */}
                    <div
                        className="relative group cursor-pointer"
                        onMouseEnter={() => setIsResourcesOpen(true)}
                        onMouseLeave={() => setIsResourcesOpen(false)}
                    >
                        <div className="flex items-center gap-1 group-hover:text-primary transition-colors">
                            Resources <span className="material-symbols-outlined text-sm">expand_more</span>
                        </div>

                        {/* Resources Dropdown Menu */}
                        <div className={`absolute top-full left-1/2 -translate-x-1/2 w-56 bg-black border border-white/10 pt-4 pb-2 shadow-2xl transition-all duration-300 ${isResourcesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                            <div className="flex flex-col">
                                {resources.map((item, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="px-6 py-3 hover:bg-white hover:text-black transition-colors border-l-2 border-transparent hover:border-primary"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link to="/partners" className="hover:text-primary transition-colors">Partners</Link>
                    <Link to="/careers" className="hover:text-primary transition-colors">Careers</Link>
                    <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
                </div>

                {/* Search - Right Aligned */}
                <div className="flex-1 flex items-center justify-end gap-6">
                    <form className="relative group hidden sm:block">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent border border-gray-800 h-9 pl-4 pr-10 w-32 focus:w-48 focus:border-white transition-all duration-300 rounded-none text-xs placeholder-gray-500 focus:ring-0"
                        />
                        <button className="absolute right-3 top-2.5 text-gray-500 group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-sm">search</span>
                        </button>
                    </form>

                    <button className="lg:hidden text-white">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Header;
