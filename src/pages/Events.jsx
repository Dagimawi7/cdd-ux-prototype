import React from 'react';

const Events = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6">Community Events</h1>
            <p className="text-lg text-neutral-600 mb-8">Upcoming hearings, meetings, and workshops.</p>
            <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 flex gap-6">
                        <div className="text-center w-16 shrink-0">
                            <div className="text-sm font-bold text-primary uppercase">Dec</div>
                            <div className="text-2xl font-bold text-neutral-900">{10 + i}</div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Planning Board Meeting</h3>
                            <p className="text-neutral-500 mb-2">7:00 PM - 9:00 PM • City Hall</p>
                            <p className="text-neutral-600">Public hearing regarding new zoning amendments.</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
