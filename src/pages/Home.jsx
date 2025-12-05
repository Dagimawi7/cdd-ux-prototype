import React from 'react';
import { Search, Home as HomeIcon, FileText, Map, Calendar, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-primary py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506195546237-7a1650b8f43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Building a Better Cambridge, Together
                        </h1>
                        <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
                            Find information on housing, permits, zoning, and community planning. How can we help you today?
                        </p>

                        <div className="relative max-w-2xl mx-auto">
                            <input
                                type="text"
                                placeholder="Search for permits, zoning maps, housing..."
                                className="w-full pl-6 pr-14 py-4 rounded-xl shadow-lg text-lg focus:outline-none focus:ring-4 focus:ring-blue-400/30"
                            />
                            <button className="absolute right-3 top-3 bg-primary text-white p-2 rounded-lg hover:bg-blue-700 transition-colors">
                                <Search className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Actions */}
            <section className="py-16 -mt-10 relative z-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Housing & Home Help', icon: HomeIcon, desc: 'Affordable housing, tenant resources, and assistance.', color: 'bg-blue-50 text-blue-600' },
                            { title: 'Permits & Licensing', icon: FileText, desc: 'Building permits, business licenses, and forms.', color: 'bg-green-50 text-green-600' },
                            { title: 'Zoning & Maps', icon: Map, desc: 'Interactive maps, zoning districts, and planning.', color: 'bg-purple-50 text-purple-600' },
                            { title: 'Community Events', icon: Calendar, desc: 'Public hearings, workshops, and neighborhood meetings.', color: 'bg-orange-50 text-orange-600' },
                        ].map((item, index) => (
                            <a href="#" key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-100 group">
                                <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-neutral-900 mb-3">{item.title}</h3>
                                <p className="text-neutral-500 mb-6 leading-relaxed">{item.desc}</p>
                                <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
                                    <span>Learn more</span>
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Cambridge Community"
                                className="rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Shaping Our Future</h2>
                            <p className="text-neutral-600 mb-6 text-lg leading-relaxed">
                                The Community Development Department (CDD) is the planning agency for the City of Cambridge. We work to enhance the character and diversity of the city through planning and programs.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Sustainable city planning initiatives',
                                    'Economic development programs',
                                    'Transportation planning',
                                    'Climate action plans'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-neutral-700">
                                        <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Button>View Current Projects</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
