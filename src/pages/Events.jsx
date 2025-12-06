import React, { useState } from 'react';
import { Calendar as CalendarIcon, MapPin, Clock, Filter, ChevronDown, List, Grid } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { cn } from '../lib/utils';

const EVENT_Categories = ['All', 'Hearings', 'Workshops', 'Community'];

const EVENTS_DATA = [
    {
        id: 1,
        title: 'Planning Board Meeting - Fall Session',
        date: { month: 'DEC', day: '12', year: 2025 },
        time: '6:30 PM - 9:00 PM',
        location: 'City Hall, Sullivan Chamber',
        category: 'Hearings',
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        tags: ['Public Hearing', 'Zoning']
    },
    {
        id: 2,
        title: 'Affordable Housing Workshop',
        date: { month: 'DEC', day: '15', year: 2025 },
        time: '5:00 PM - 7:00 PM',
        location: 'Community Center, Room 204',
        category: 'Workshops',
        image: 'https://images.unsplash.com/photo-1560523160-754a9e25c68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        tags: ['Housing', 'Education']
    },
    {
        id: 3,
        title: 'Climate Action Plan Town Hall',
        date: { month: 'DEC', day: '18', year: 2025 },
        time: '6:00 PM - 8:30 PM',
        location: 'Main Library, Lecture Hall',
        category: 'Community',
        image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        tags: ['Climate', 'Town Hall']
    },
    {
        id: 4,
        title: 'Zoning Ordinance Committee',
        date: { month: 'JAN', day: '05', year: 2026 },
        time: '2:30 PM - 4:00 PM',
        location: 'Virtual / Zoom',
        category: 'Hearings',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        tags: ['Zoning', 'Committee']
    }
];

const CalendarView = ({ events }) => {
    // Simplified static December 2025 calendar for prototype
    // Dec 1 2025 is a Monday
    const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
    const startOffset = 1; // Monday starts on index 1 (Sun=0)

    const getEventsForDay = (day) => {
        return events.filter(e => e.date.month === 'DEC' && parseInt(e.date.day) === day);
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-neutral-200">
                <button className="p-2 hover:bg-neutral-100 rounded-full" aria-label="Previous Month"><ChevronDown className="w-5 h-5 rotate-90" /></button>
                <div className="text-lg font-bold">December 2025</div>
                <button className="p-2 hover:bg-neutral-100 rounded-full" aria-label="Next Month"><ChevronDown className="w-5 h-5 -rotate-90" /></button>
            </div>

            {/* Days Header */}
            <div className="grid grid-cols-7 border-b border-neutral-200 bg-neutral-50 text-xs font-semibold text-neutral-500 uppercase tracking-wider text-center py-2">
                <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-7 auto-rows-fr bg-neutral-200 gap-px border-b border-neutral-200">
                {/* Empty cells for start offset */}
                {Array.from({ length: startOffset }).map((_, i) => (
                    <div key={`empty-${i}`} className="bg-neutral-50 min-h-[120px]" />
                ))}

                {/* Days */}
                {daysInMonth.map(day => {
                    const dayEvents = getEventsForDay(day);
                    return (
                        <div key={day} className="bg-white min-h-[120px] p-2 hover:bg-blue-50/30 transition-colors">
                            <span className={cn(
                                "inline-flex items-center justify-center w-7 h-7 text-sm font-medium rounded-full mb-1",
                                dayEvents.length > 0 ? "bg-primary text-white" : "text-neutral-700"
                            )}>{day}</span>

                            <div className="space-y-1">
                                {dayEvents.map(event => (
                                    <div key={event.id} className="text-xs bg-blue-100/50 text-blue-700 p-1.5 rounded border border-blue-200 truncate font-medium hover:bg-blue-100 cursor-pointer">
                                        {event.time.split(' - ')[0]} {event.title}
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const Events = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [viewMode, setViewMode] = useState('list'); // 'list' | 'calendar'

    const filteredEvents = activeFilter === 'All'
        ? EVENTS_DATA
        : EVENTS_DATA.filter(e => e.category === activeFilter);

    return (
        <div className="container mx-auto px-4 py-12 md:py-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                <div>
                    <h1 className="text-4xl font-display font-bold text-neutral-900 mb-4">
                        Community Events
                    </h1>
                    <p className="text-lg text-neutral-600 max-w-2xl">
                        Join public hearings, workshops, and community meetings. Be part of the conversation.
                    </p>
                </div>
                <div className="flex bg-white p-1 rounded-lg border border-neutral-200 shadow-sm">
                    <button
                        onClick={() => setViewMode('list')}
                        className={cn(
                            "flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all",
                            viewMode === 'list' ? "bg-primary text-white shadow" : "text-neutral-600 hover:bg-neutral-50"
                        )}
                    >
                        <List className="w-4 h-4 mr-2" /> List
                    </button>
                    <button
                        onClick={() => setViewMode('calendar')}
                        className={cn(
                            "flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all",
                            viewMode === 'calendar' ? "bg-primary text-white shadow" : "text-neutral-600 hover:bg-neutral-50"
                        )}
                    >
                        <CalendarIcon className="w-4 h-4 mr-2" /> Calendar
                    </button>
                </div>
            </div>

            {/* Filters (Only show in List view for simplicity, or both if preferred) */}
            {viewMode === 'list' && (
                <div className="flex overflow-x-auto pb-4 mb-8 gap-2 scrollbar-hide">
                    {EVENT_Categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={cn(
                                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap",
                                activeFilter === category
                                    ? "bg-primary text-white shadow-md shadow-primary/20"
                                    : "bg-white text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 border border-neutral-200"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            )}

            {/* Content Switcher */}
            {viewMode === 'list' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredEvents.map((event) => (
                        <div key={event.id}>
                            <Card className="h-full p-0 overflow-hidden flex flex-col hover:border-primary/30 group">
                                {/* Image Header */}
                                <div className="relative h-48 overflow-hidden">
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-xl p-2.5 text-center min-w-[60px] shadow-sm z-10">
                                        <div className="text-xs font-bold text-red-500 uppercase tracking-wider">{event.date.month}</div>
                                        <div className="text-2xl font-bold text-neutral-900 leading-none">{event.date.day}</div>
                                    </div>
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <span className="text-white font-medium text-sm">View Details</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex gap-2 mb-4">
                                        {event.tags.map(tag => (
                                            <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-neutral-100 text-neutral-600 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        {event.title}
                                    </h3>

                                    <div className="space-y-3 mb-6 flex-grow">
                                        <div className="flex items-center text-neutral-500 text-sm">
                                            <Clock className="w-4 h-4 mr-2.5 text-neutral-400" />
                                            {event.time}
                                        </div>
                                        <div className="flex items-center text-neutral-500 text-sm">
                                            <MapPin className="w-4 h-4 mr-2.5 text-neutral-400" />
                                            {event.location}
                                        </div>
                                    </div>

                                    <Button className="w-full" variant="outline">
                                        Register Now
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    ))}
                    {filteredEvents.length === 0 && (
                        <div className="col-span-full text-center py-20 bg-neutral-50 rounded-2xl border border-dashed border-neutral-200">
                            <p className="text-neutral-500">No events found in this category.</p>
                        </div>
                    )}
                </div>
            ) : (
                <div>
                    <CalendarView events={EVENTS_DATA} />
                </div>
            )}
        </div>
    );
};

export default Events;
