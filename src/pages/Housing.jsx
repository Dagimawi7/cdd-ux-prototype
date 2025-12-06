import React from 'react';
import { Home, Info, ArrowRight } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Housing = () => {
    return (
        <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-100/50 rounded-2xl text-blue-600">
                        <Home className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl font-display font-bold text-neutral-900">Housing & Home Help</h1>
                </div>

                <p className="text-xl text-neutral-600 mb-12 leading-relaxed">
                    We are committed to affordable and accessible housing for all residents. Find resources for tenants, landlords, and homebuyers.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="flex flex-col h-full hover:border-primary/30 group">
                        <div className="mb-6 bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                            <Info className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 text-neutral-900 group-hover:text-primary transition-colors">Affordable Housing</h2>
                        <p className="text-neutral-600 mb-8 flex-grow">
                            Apply for inclusionary housing, learn about income eligibility, and view current lotteries.
                        </p>
                        <Button variant="outline" className="w-full justify-between group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                            Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Card>

                    <Card className="flex flex-col h-full hover:border-primary/30 group">
                        <div className="mb-6 bg-green-50 w-12 h-12 rounded-xl flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                            <Info className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 text-neutral-900 group-hover:text-primary transition-colors">Tenant Rights</h2>
                        <p className="text-neutral-600 mb-8 flex-grow">
                            Access legal resources, mediation services, and information about your rights as a renter.
                        </p>
                        <Button variant="outline" className="w-full justify-between group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                            Learn More <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Housing;
