import React from 'react';
import { Map as MapIcon, Layers, Search } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon in React Leaflet
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const Zoning = () => {
    const cambridgePosition = [42.3736, 71.1097]; // Coordinates for Cambridge, MA (Note: Longitude might be negative, testing positive first or standard negative convention)
    // Actual Cambridge coords: 42.3736° N, 71.1097° W => [42.3736, -71.1097]
    const center = [42.3736, -71.1097];

    return (
        <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-purple-100/50 rounded-2xl text-purple-600">
                        <MapIcon className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl font-display font-bold text-neutral-900">Zoning & Maps</h1>
                </div>

                <p className="text-xl text-neutral-600 mb-8 leading-relaxed max-w-2xl">
                    Explore Cambridge's zoning districts, overlay districts, and comprehensive planning maps interactively.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px]">
                    {/* Interactive Map */}
                    <div className="lg:col-span-2 h-full rounded-2xl shadow-premium border border-neutral-200 overflow-hidden relative z-0">
                        <MapContainer center={center} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={center}>
                                <Popup>
                                    Cambridge City Hall <br /> 795 Massachusetts Ave.
                                </Popup>
                            </Marker>
                            <Marker position={[42.3601, -71.0942]}>
                                <Popup>
                                    MIT Area <br /> Zoning: O-3
                                </Popup>
                            </Marker>
                            <Marker position={[42.3718, -71.1197]}>
                                <Popup>
                                    Harvard Square <br /> Zoning: BB
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>

                    {/* Sidebar / Controls */}
                    <Card className="h-full flex flex-col p-6">
                        <div className="mb-6">
                            <h2 className="text-lg font-bold mb-4 flex items-center">
                                <Layers className="w-5 h-5 mr-2 text-primary" />
                                Map Layers
                            </h2>
                            <div className="space-y-3">
                                <label className="flex items-center p-3 rounded-lg bg-neutral-50 hover:bg-neutral-100 cursor-pointer transition-colors border border-neutral-100">
                                    <input type="checkbox" className="form-checkbox h-4 w-4 text-primary rounded border-neutral-300" defaultChecked />
                                    <span className="ml-3 text-sm font-medium text-neutral-700">Zoning Districts</span>
                                </label>
                                <label className="flex items-center p-3 rounded-lg bg-neutral-50 hover:bg-neutral-100 cursor-pointer transition-colors border border-neutral-100">
                                    <input type="checkbox" className="form-checkbox h-4 w-4 text-primary rounded border-neutral-300" />
                                    <span className="ml-3 text-sm font-medium text-neutral-700">Overlay Districts</span>
                                </label>
                                <label className="flex items-center p-3 rounded-lg bg-neutral-50 hover:bg-neutral-100 cursor-pointer transition-colors border border-neutral-100">
                                    <input type="checkbox" className="form-checkbox h-4 w-4 text-primary rounded border-neutral-300" />
                                    <span className="ml-3 text-sm font-medium text-neutral-700">Historic Districts</span>
                                </label>
                            </div>
                        </div>

                        <div className="mt-auto">
                            <div className="p-4 bg-blue-50 rounded-xl mb-4">
                                <h3 className="text-sm font-bold text-blue-800 mb-1">Need help?</h3>
                                <p className="text-xs text-blue-600 mb-3">
                                    Use the search bar to find a specific address or parcel ID.
                                </p>
                                <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">Search Address</Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Zoning;
