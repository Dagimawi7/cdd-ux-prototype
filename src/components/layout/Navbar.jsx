import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import Button from '../ui/Button';
import CDDLogo from '../../assets/CDD_Logo.jpeg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Housing', path: '/housing' },
        { name: 'Permits', path: '/permits' },
        { name: 'Zoning', path: '/zoning' },
        { name: 'Events', path: '/events' },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between">
                    {/* Logo Area */}
                    <Link to="/" className="flex items-center space-x-3 group min-w-max">
                        <div className="bg-white p-1 rounded-full shadow-lg shadow-primary/20 transition-transform group-hover:scale-105 border border-neutral-100">
                            <img
                                src={CDDLogo}
                                alt="Cambridge CDD Logo"
                                className="w-10 h-10 object-cover rounded-full"
                            />
                        </div>
                        <div className="hidden lg:block">
                            <h1 className="text-lg font-bold text-neutral-900 leading-none">Cambridge</h1>
                            <p className="text-xs text-neutral-500 font-medium tracking-wide group-hover:text-primary transition-colors">Community Development</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-colors relative group",
                                    location.pathname === link.path
                                        ? "text-primary bg-primary/5"
                                        : "text-neutral-600 hover:text-primary hover:bg-neutral-50"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Search & Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-4 w-4 text-neutral-400 group-focus-within:text-primary transition-colors" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search..."
                                aria-label="Search"
                                className="pl-9 pr-4 py-2 bg-neutral-100 border border-transparent rounded-full text-sm w-32 focus:w-64 focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10 transition-all duration-300 outline-none"
                            />
                        </div>
                        <Button size="sm" className="shadow-lg shadow-primary/20">Sign In</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-neutral-600 hover:bg-neutral-100 rounded-full transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-neutral-100 shadow-xl"
                >
                    <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
                        <div className="relative mb-4">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                            <input
                                type="text"
                                placeholder="Search site..."
                                aria-label="Search site"
                                className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                            />
                        </div>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={cn(
                                    "block px-4 py-3 rounded-xl text-base font-medium transition-colors",
                                    location.pathname === link.path
                                        ? "bg-primary/5 text-primary"
                                        : "text-neutral-600 hover:bg-neutral-50"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4 border-t border-neutral-100">
                            <Button className="w-full justify-center">Sign In Portal</Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
