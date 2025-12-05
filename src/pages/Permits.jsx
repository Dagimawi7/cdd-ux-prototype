import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, ArrowRight } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Permits = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="container mx-auto px-4 py-12 md:py-20"
        >
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-green-100/50 rounded-2xl text-green-600">
                        <FileText className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl font-display font-bold text-neutral-900">Permits & Licensing</h1>
                </div>

                <p className="text-xl text-neutral-600 mb-12 leading-relaxed">
                    Streamlined application processes for building permits, business licenses, and special event requests.
                </p>

                <Card className="bg-white p-8">
                    <h2 className="text-2xl font-bold mb-6 text-neutral-900">Common Applications</h2>
                    <ul className="space-y-4">
                        {[
                            { name: 'Building Permit Application', time: '5-10 Days' },
                            { name: 'Electrical Work Permit', time: '2-3 Days' },
                            { name: 'Business Certificate (DBA)', time: 'Immediate' },
                            { name: 'Sidewalk Obstruction', time: '3-5 Days' }
                        ].map((item, i) => (
                            <li key={i} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-neutral-50 hover:bg-white hover:shadow-md border border-neutral-100 rounded-xl transition-all duration-200">
                                <div className="flex items-center gap-4 mb-3 md:mb-0">
                                    <div className="bg-white p-2 rounded-lg shadow-sm text-green-500">
                                        <CheckCircle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="font-bold text-neutral-900 block">{item.name}</span>
                                        <span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Est. Time: {item.time}</span>
                                    </div>
                                </div>
                                <Button size="sm" variant="ghost" className="text-primary hover:bg-primary/10">
                                    Apply Now
                                </Button>
                            </li>
                        ))}
                    </ul>
                </Card>
            </div>
        </motion.div>
    );
};

export default Permits;
