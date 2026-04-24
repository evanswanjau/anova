import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoWhite from '../assets/images/logo-white.png';
import logoDark from '../assets/images/logo.jpeg';
import servicesData from '../data/services.json';
import { searchIndex, type SearchItem } from '../data/searchIndex';

const Header: React.FC = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
    const [isScrolled, setIsScrolled] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Industries', path: '/industries' },
        { name: 'News & Events', path: '/news' },
        { name: 'Partners', path: '/partners' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' },
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsSearchFocused(false);
            }
        };

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        if (query.length < 2) {
            setSearchResults([]);
            return;
        }

        const filtered = searchIndex.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase()) ||
            item.keywords.some(k => k.toLowerCase().includes(query.toLowerCase()))
        ).slice(0, 6);

        setSearchResults(filtered);
        setActiveIndex(-1);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (searchResults.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActiveIndex(prev => (prev < searchResults.length - 1 ? prev + 1 : prev));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActiveIndex(prev => (prev > 0 ? prev - 1 : -1));
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (activeIndex >= 0) {
                navigate(searchResults[activeIndex].path);
                setIsSearchFocused(false);
                setSearchQuery('');
            }
        } else if (e.key === 'Escape') {
            setIsSearchFocused(false);
        }
    };

    const navClass = isMobileMenuOpen
        ? 'bg-nasa-black text-white border-b border-white/10'
        : isScrolled
            ? 'bg-white text-slate-900 border-b border-gray-100'
            : 'bg-transparent text-white border-b border-white/10';

    const currentLogo = isMobileMenuOpen ? logoWhite : (isScrolled ? logoDark : logoWhite);
    const linkHoverClass = isMobileMenuOpen || !isScrolled ? 'hover:text-primary' : 'hover:text-primary';

    return (
        <nav className={`fixed top-0 w-full z-50 py-8 transition-all duration-300 ${navClass}`}>
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center">
                {/* Logo/Brand - Left Aligned */}
                <div className="flex-1 flex items-center">
                    <Link to="/" className="flex items-center">
                        <img src={currentLogo} alt="Anova Logo" className="h-10 w-auto object-contain transition-all duration-300 style={{mixBlendMode: isScrolled && !isMobileMenuOpen ? 'multiply' : 'normal'}}" />
                    </Link>
                </div>

                {/* Navigation Menu - Centered */}
                <div className="hidden lg:flex items-center justify-center gap-8 uppercase text-[11px] font-bold tracking-widest">
                    <Link to="/" className={`transition-colors ${linkHoverClass}`}>Home</Link>
                    <Link to="/about" className={`transition-colors ${linkHoverClass}`}>About</Link>

                    {/* Services Dropdown */}
                    <div
                        className="relative group cursor-pointer"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                    >
                        <Link to="/services" className={`flex items-center gap-1 transition-colors ${linkHoverClass}`}>
                            Services <span className="material-symbols-outlined text-sm">expand_more</span>
                        </Link>

                        {/* Services Dropdown Menu */}
                        <div className={`absolute top-full left-1/2 -translate-x-1/2 w-64 bg-nasa-black text-white border border-white/10 pt-4 pb-2 shadow-2xl transition-all duration-300 z-50 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                            <div className="flex flex-col text-left">
                                {servicesData.map((service) => (
                                    <Link
                                        key={service.id}
                                        to={`/services/${service.id}`}
                                        className="px-6 py-3 hover:bg-white hover:text-nasa-black transition-colors border-l-2 border-transparent hover:border-primary normal-case font-medium text-sm"
                                        onClick={() => setIsServicesOpen(false)}
                                    >
                                        {service.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link to="/industries" className={`transition-colors ${linkHoverClass}`}>Industries</Link>
                    <Link to="/news" className={`transition-colors ${linkHoverClass}`}>News & Events</Link>
                    <Link to="/partners" className={`transition-colors ${linkHoverClass}`}>Partners</Link>
                    <Link to="/careers" className={`transition-colors ${linkHoverClass}`}>Careers</Link>
                    <Link to="/contact" className={`transition-colors ${linkHoverClass}`}>Contact</Link>
                </div>

                {/* Search - Right Aligned */}
                <div className="flex-1 flex items-center justify-end gap-6">
                    <div ref={searchRef} className="relative hidden sm:block">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => handleSearch(e.target.value)}
                                onFocus={() => setIsSearchFocused(true)}
                                onKeyDown={handleKeyDown}
                                className={`bg-transparent border h-9 pl-4 pr-10 w-32 focus:w-64 focus:border-primary transition-all duration-300 rounded-none text-xs focus:ring-0 outline-none ${isMobileMenuOpen || !isScrolled ? 'border-gray-800 placeholder-gray-500 text-white' : 'border-gray-300 placeholder-gray-400 text-slate-900'}`}
                            />
                            <button className={`absolute right-3 top-2.5 transition-colors ${isMobileMenuOpen || !isScrolled ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-primary'}`} type="button">
                                <span className="material-symbols-outlined text-sm">search</span>
                            </button>
                        </div>

                        {/* Search Results Dropdown */}
                        {isSearchFocused && searchQuery.length >= 2 && (
                            <div className="absolute top-full right-0 mt-2 w-80 bg-nasa-black text-white border border-white/10 shadow-2xl z-50 overflow-hidden text-left">
                                {searchResults.length > 0 ? (
                                    <div className="flex flex-col">
                                        {searchResults.map((result, index) => (
                                            <Link
                                                key={result.id}
                                                to={result.path}
                                                onClick={() => {
                                                    setIsSearchFocused(false);
                                                    setSearchQuery('');
                                                }}
                                                className={`group p-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors ${activeIndex === index ? 'bg-white/10 border-l-2 border-l-primary' : 'border-l-2 border-l-transparent'}`}
                                            >
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">{result.category}</span>
                                                    <span className="text-[9px] px-1.5 py-0.5 bg-white/10 text-white/50 font-bold uppercase tracking-tighter">{result.type}</span>
                                                </div>
                                                <h4 className="text-xs font-black text-white group-hover:text-primary transition-colors mb-0.5">{result.title}</h4>
                                                <p className="text-[10px] text-gray-500 line-clamp-1">{result.description}</p>
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="p-6 text-center">
                                        <p className="text-xs text-gray-500 italic">No results found for "{searchQuery}"</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <button
                        className="lg:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`lg:hidden fixed inset-0 top-[105px] bg-nasa-black text-white z-40 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="flex flex-col p-6 gap-6 uppercase text-sm font-bold tracking-widest pt-12 text-left">
                    {/* Mobile Search */}
                    <div className="relative mb-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => handleSearch(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 h-12 px-6 rounded-none text-sm placeholder-gray-500 focus:border-primary focus:ring-0 outline-none text-white"
                        />
                        {searchQuery.length >= 2 && (
                            <div className="mt-2 flex flex-col pt-2 max-h-[40vh] overflow-y-auto">
                                {searchResults.map((result) => (
                                    <Link
                                        key={result.id}
                                        to={result.path}
                                        onClick={() => {
                                            setSearchQuery('');
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className="py-3 border-b border-white/5"
                                    >
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-[8px] font-black uppercase tracking-widest text-primary">{result.category}</span>
                                        </div>
                                        <div className="text-sm font-bold text-white">{result.title}</div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="border-b border-white/5 pb-4 hover:text-primary transition-colors text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="bg-primary text-white text-center py-4 mt-4"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Request Consultation
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;

