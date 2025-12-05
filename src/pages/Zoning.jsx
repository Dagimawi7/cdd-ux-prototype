import React from 'react';
import { motion } from 'framer-motion';
import { Map, Layers, Search } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Zoning = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="container mx-auto px-4 py-12 md:py-20"
        >
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-purple-100/50 rounded-2xl text-purple-600">
                        <Map className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl font-display font-bold text-neutral-900">Zoning & Maps</h1>
                </div>

                <p className="text-xl text-neutral-600 mb-12 leading-relaxed max-w-2xl">
                    Explore Cambridge's zoning districts, overlay districts, and comprehensive planning maps interactively.
                </p>

                <div className="relative group overflow-hidden rounded-2xl shadow-premium border border-neutral-200 bg-neutral-100 h-[500px] flex items-center justify-center">
                    {/* Mock Map Background */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 active:scale-105"></div>

                    <div className="relative z-10 text-center p-8 glass-panel rounded-2xl max-w-md mx-4">
                        <Layers className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h2 className="text-2xl font-bold mb-2">Interactive Zoning Map</h2>
                        <p className="text-neutral-600 mb-6">
                            View zoning districts, search by address, and download GIS data layers.
                        </p>
                        <Button size="lg" className="w-full shadow-xl shadow-primary/20">
                            Launch Map Viewer
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Zoning;
