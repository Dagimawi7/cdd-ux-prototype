import React from 'react';
import Layout from '../components/layout/Layout';

const Housing = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6">Housing & Home Help</h1>
            <p className="text-lg text-neutral-600 mb-8">Find affordable housing, tenant resources, and assistance programs.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Placeholders for content */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
                    <h2 className="text-xl font-bold mb-3">Affordable Housing</h2>
                    <p className="text-neutral-500">Apply for inclusionary housing and other programs.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
                    <h2 className="text-xl font-bold mb-3">Tenant Rights</h2>
                    <p className="text-neutral-500">Information for renters in Cambridge.</p>
                </div>
            </div>
        </div>
    );
};

export default Housing;
