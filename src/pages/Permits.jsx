import React from 'react';
import { FileText, Clock, FileCheck } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Permits = () => {
    return (
        <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-green-100/50 rounded-2xl text-green-600">
                        <FileText className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl font-display font-bold text-neutral-900">Permits & Licensing</h1>
                </div>

                <p className="text-xl text-neutral-600 mb-12 leading-relaxed">
                    Start your project in Cambridge. Apply for building permits, business licenses, and more online.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: 'Building Permits', time: '2-4 Weeks', desc: 'For new construction, additions, and renovations.' },
                        { title: 'Business Licenses', time: '1-2 Weeks', desc: 'Food service, retail, and operational licenses.' },
                        { title: 'Special Permits', time: '2-3 Months', desc: 'Zoning relief and special use authorization.' },
                    ].map((item, i) => (
                        <div key={i}>
                            <Card className="h-full flex flex-col hover:border-green-200 hover:shadow-lg transition-all cursor-pointer group">
                                <div className="mb-4 p-3 bg-green-50 rounded-lg w-fit text-green-600">
                                    <FileCheck className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold mb-2 group-hover:text-green-700 transition-colors">{item.title}</h3>
                                <div className="flex items-center text-xs font-semibold text-neutral-500 mb-4 bg-neutral-100 px-2 py-1 rounded w-fit">
                                    <Clock className="w-3 h-3 mr-1" /> {item.time}
                                </div>
                                <p className="text-neutral-600 text-sm mb-6 flex-grow">{item.desc}</p>
                                <Button size="sm" variant="outline" className="w-full mt-auto">Start Application</Button>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Permits;
