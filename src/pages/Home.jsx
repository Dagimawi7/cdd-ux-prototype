import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Home as HomeIcon, FileText, Map, Calendar, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import CambridgeImg from '../assets/cambridge.jpeg';
import communityImg from '../assets/community.jpeg';

const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-primary py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-primary/80 mix-blend-multiply z-10" />
                    <img
                        src={CambridgeImg}
                        alt="Cambridge"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/30 text-blue-100 text-sm font-semibold mb-6 border border-blue-400/20 backdrop-blur-sm">
                            Welcome to Cambridge CDD
                        </span>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight tracking-tight">
                            Building a Better<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Cambridge, Together</span>
                        </h1>
                        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Your guide to housing, sustainable planning, zoning, and community development. How can we serve you today?
                        </p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="relative max-w-2xl mx-auto group"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search for permits, zoning maps, housing..."
                                    className="w-full pl-6 pr-32 py-5 rounded-xl shadow-2xl text-lg border-0 bg-white/95 focus:bg-white focus:outline-none focus:ring-0 placeholder:text-neutral-400"
                                />
                                <div className="absolute right-2 top-2 bottom-2">
                                    <Button className="h-full rounded-lg px-6">
                                        Search
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Actions */}
            <section className="py-20 -mt-16 relative z-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {[
                            { title: 'Housing & Home Help', icon: HomeIcon, desc: 'Affordable housing, tenant resources, and assistance.', color: 'bg-blue-50 text-blue-600', link: 'https://www.cambridgema.gov/CDD/housing' },
                            { title: 'Permits & Licensing', icon: FileText, desc: 'Building permits, business licenses, and forms.', color: 'bg-green-50 text-green-600', link: 'https://www.cambridgema.gov/CDD/zoninganddevelopment' },
                            { title: 'Zoning & Maps', icon: Map, desc: 'Interactive maps, zoning districts, and planning.', color: 'bg-purple-50 text-purple-600', link: 'https://www.cambridgema.gov/CDD/zoninganddevelopment/zoning' },
                            { title: 'Community Events', icon: Calendar, desc: 'Public hearings, workshops, and neighborhood meetings.', color: 'bg-orange-50 text-orange-600', link: '/events', internal: true },
                        ].map((item, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                {item.internal ? (
                                    <Link to={item.link} className="block h-full">
                                        <Card className="h-full flex flex-col group hover:border-primary/20 bg-white">
                                            <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                                                <item.icon className="w-7 h-7" />
                                            </div>
                                            <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                                            <p className="text-neutral-500 mb-6 leading-relaxed flex-grow">{item.desc}</p>
                                            <div className="flex items-center text-primary font-bold text-sm group-hover:translate-x-1 transition-transform">
                                                <span>Learn more</span>
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </div>
                                        </Card>
                                    </Link>
                                ) : (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                                        <Card className="h-full flex flex-col group hover:border-primary/20 bg-white">
                                            <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                                                <item.icon className="w-7 h-7" />
                                            </div>
                                            <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                                            <p className="text-neutral-500 mb-6 leading-relaxed flex-grow">{item.desc}</p>
                                            <div className="flex items-center text-primary font-bold text-sm group-hover:translate-x-1 transition-transform">
                                                <span>Learn more</span>
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </div>
                                        </Card>
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Featured Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="w-full md:w-1/2 relative"
                        >
                            <div className="absolute -left-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
                            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-secondary/5 rounded-full blur-2xl"></div>
                            <img
                                src={communityImg}
                                alt="Cambridge Community"
                                className="rounded-2xl shadow-premium relative z-10 w-full"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="w-full md:w-1/2"
                        >
                            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Our Mission</span>
                            <h2 className="text-4xl font-display font-bold text-neutral-900 mb-6">Shaping Our Future</h2>
                            <p className="text-neutral-600 mb-8 text-lg leading-relaxed">
                                The Community Development Department (CDD) is the planning agency for the City of Cambridge. We work to enhance the character and diversity of the city through planning and programs.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    'Sustainable city planning initiatives',
                                    'Economic development programs',
                                    'Transportation planning',
                                    'Climate action plans'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-neutral-700 font-medium">
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 text-green-600">
                                            <svg className="w-3.5 h-3.5" viewBox="0 0 12 10" fill="none">
                                                <path d="M1 5L4.5 9L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex gap-4">
                                <Button>View Current Projects</Button>
                                <Button variant="outline">Learn About Us</Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
