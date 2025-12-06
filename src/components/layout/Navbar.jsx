import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import Button from '../ui/Button';
import CDDLogo from '../../assets/CDD.jpeg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Housing', path: '/housing' },
        { name: 'Permits', path: '/permits' },
        { name: 'Zoning', path: '/zoning' },
        { name: 'Events', path: '/events' },
    ];

    return (
        <motion.header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
                scrolled ? 'bg-white/80 backdrop-blur-md border-neutral-200/50 shadow-sm' : 'bg-transparent'
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="bg-white p-1 rounded-full shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
                            <img
                                src={CDDLogo}
                                alt="Cambridge CDD Logo"
                                className="w-10 h-10 object-cover rounded-full"
                            />
                        </div>
                        <div className="hidden md:block">
                            <h1 className="text-lg font-bold text-neutral-900 leading-none">Cambridge</h1>
                            <p className="text-xs text-neutral-500 font-medium tracking-wide group-hover:text-primary transition-colors">Community Development</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={cn(
                                    'relative px-4 py-2 rounded-full text-sm font-medium transition-colors hover:text-primary',
                                    location.pathname === link.path ? 'text-primary bg-primary/5' : 'text-neutral-600'
                                )}
                            >
                                {link.name}
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        ))}
                        <div className="pl-4 ml-4 border-l border-neutral-200">
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <Search className="w-5 h-5" />
                            </Button>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-neutral-600 hover:bg-neutral-100 rounded-full transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-xl border-t border-neutral-100 overflow-hidden"
                    >
                        <div className="px-4 py-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={cn(
                                        'block px-4 py-3 rounded-xl text-base font-medium transition-colors',
                                        location.pathname === link.path
                                            ? 'bg-primary/10 text-primary'
                                            : 'text-neutral-600 hover:bg-neutral-50'
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-2">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="w-full pl-10 pr-4 py-3 bg-neutral-50 border-none rounded-xl focus:ring-2 focus:ring-primary/20 transition-all font-medium placeholder:text-neutral-400"
                                    />
                                    <Search className="w-5 h-5 text-neutral-400 absolute left-3 top-3.5" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
