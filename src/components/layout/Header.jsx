import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3">
                        <div className="bg-primary text-white p-2 rounded-lg">
                            <span className="font-bold text-xl tracking-tighter">CDD</span>
                        </div>
                        <div className="hidden md:block">
                            <h1 className="text-lg font-bold text-neutral-900 leading-none">Cambridge</h1>
                            <p className="text-xs text-neutral-500 font-medium tracking-wide">Community Development</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link to="/housing" className="text-neutral-600 hover:text-primary font-medium transition-colors">Housing</Link>
                        <Link to="/permits" className="text-neutral-600 hover:text-primary font-medium transition-colors">Permits</Link>
                        <Link to="/zoning" className="text-neutral-600 hover:text-primary font-medium transition-colors">Zoning</Link>
                        <Link to="/events" className="text-neutral-600 hover:text-primary font-medium transition-colors">Events</Link>
                        <button className="text-neutral-600 hover:text-primary">
                            <Search className="w-5 h-5" />
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-neutral-600"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-neutral-100 absolute w-full shadow-lg">
                    <div className="px-4 py-2 space-y-1">
                        <Link to="/housing" className="block py-3 text-neutral-600 font-medium border-b border-neutral-50">Housing & Home Help</Link>
                        <Link to="/permits" className="block py-3 text-neutral-600 font-medium border-b border-neutral-50">Permits & Licensing</Link>
                        <Link to="/zoning" className="block py-3 text-neutral-600 font-medium border-b border-neutral-50">Zoning & Maps</Link>
                        <Link to="/events" className="block py-3 text-neutral-600 font-medium border-b border-neutral-50">Community Events</Link>
                        <div className="py-3">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full pl-10 pr-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                                />
                                <Search className="w-5 h-5 text-neutral-400 absolute left-3 top-2.5" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
