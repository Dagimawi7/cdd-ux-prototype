import React from 'react';

const Permits = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6">Permits & Licensing</h1>
            <p className="text-lg text-neutral-600 mb-8">Apply for building permits, business licenses, and more.</p>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
                <h2 className="text-xl font-bold mb-4">Common Permits</h2>
                <ul className="space-y-3">
                    <li className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                        <span>Building Permit</span>
                        <button className="text-primary font-medium">Apply Now</button>
                    </li>
                    <li className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                        <span>Electrical Permit</span>
                        <button className="text-primary font-medium">Apply Now</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Permits;
