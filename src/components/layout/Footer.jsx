import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* About */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Cambridge CDD</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                            Planning for a sustainable, inclusive, and thriving community. We help residents, businesses, and visitors navigate development in Cambridge.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-neutral-400">
                            <li><a href="#" className="hover:text-white transition-colors">Staff Resources</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-neutral-400">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span>344 Broadway<br />Cambridge, MA 02139</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>617-349-4600</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>cdd@cambridgema.gov</span>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Office Hours</h3>
                        <ul className="space-y-2 text-sm text-neutral-400">
                            <li className="flex justify-between">
                                <span>Monday</span>
                                <span>8:30 AM - 8:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Tue - Thu</span>
                                <span>8:30 AM - 5:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Friday</span>
                                <span>8:30 AM - 12:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
                    <p>&copy; {new Date().getFullYear()} City of Cambridge, MA. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
