import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import CDDLogo from '../../assets/CDD.jpeg';

const Footer = () => {
    return (
        <footer className="bg-primary-dark text-white pt-20 pb-10 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* About */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="bg-white p-1 rounded-full w-12 h-12 flex items-center justify-center overflow-hidden">
                                <img
                                    src={CDDLogo}
                                    alt="Cambridge CDD Logo"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-display font-bold">Cambridge CDD</h3>
                        </div>
                        <p className="text-blue-100 text-sm leading-relaxed max-w-xs">
                            Planning for a sustainable, inclusive, and thriving community. We help residents, businesses, and visitors navigate development in Cambridge.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white border-b border-white/10 pb-2 inline-block">Quick Links</h3>
                        <ul className="space-y-4 text-sm text-blue-100">
                            <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Staff Resources</a></li>
                            <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Careers</a></li>
                            <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Accessibility</a></li>
                            <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white border-b border-white/10 pb-2 inline-block">Contact Us</h3>
                        <ul className="space-y-5 text-sm text-blue-100">
                            <li className="flex items-start space-x-4 group">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                                    <MapPin className="w-5 h-5 text-blue-400" />
                                </div>
                                <span>344 Broadway<br />Cambridge, MA 02139</span>
                            </li>
                            <li className="flex items-center space-x-4 group">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                                    <Phone className="w-5 h-5 text-blue-400" />
                                </div>
                                <span>617-349-4600</span>
                            </li>
                            <li className="flex items-center space-x-4 group">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                                    <Mail className="w-5 h-5 text-blue-400" />
                                </div>
                                <a href="mailto:cdd@cambridgema.gov" className="hover:text-white transition-colors">cdd@cambridgema.gov</a>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white border-b border-white/10 pb-2 inline-block">Office Hours</h3>
                        <ul className="space-y-3 text-sm text-blue-100">
                            <li className="flex justify-between items-center py-2 border-b border-white/5">
                                <span className="font-medium">Monday</span>
                                <span className="text-white">8:30 AM - 8:00 PM</span>
                            </li>
                            <li className="flex justify-between items-center py-2 border-b border-white/5">
                                <span className="font-medium">Tue - Thu</span>
                                <span className="text-white">8:30 AM - 5:00 PM</span>
                            </li>
                            <li className="flex justify-between items-center py-2 border-b border-white/5">
                                <span className="font-medium">Friday</span>
                                <span className="text-white">8:30 AM - 12:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200/60">
                    <p>&copy; {new Date().getFullYear()} City of Cambridge, MA. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
