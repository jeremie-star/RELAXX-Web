"use client";

import { useState, useCallback, useMemo } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Search, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const locations = [
  {
    id: 1,
    name: "Shopping Center South",
    type: "Shopping Center",
    address: "Brussels",
    location: { lat: 50.8503, lng: 4.3517 }
  },
  {
    id: 2,
    name: "East Pier",
    type: "Airport",
    address: "Brussels Airport",
    location: { lat: 50.9010, lng: 4.4856 }
  },
  {
    id: 3,
    name: "University Library",
    type: "University",
    address: "Leuven",
    location: { lat: 50.8798, lng: 4.7005 }
  }
];

const mapContainerStyle = {
  width: "100%",
  height: "600px"
};

const center = {
  lat: 50.8503,
  lng: 4.3517
};

export default function LocationsPage() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const filteredLocations = useMemo(() => {
    return locations.filter(location =>
      location.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Only define markerIcons after the map has loaded and google.maps is available
  const markerIcons = useMemo(() => {
    if (!isLoaded || typeof google === "undefined") return {};

    const size = new google.maps.Size(32, 32);
    return {
      "Shopping Center": {
        url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        scaledSize: size
      },
      "Airport": {
        url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        scaledSize: size
      },
      "University": {
        url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        scaledSize: size
      }
    };
  }, [isLoaded]);

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Find a Massage Chair</h1>

          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Search by city"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {isLoaded ? (
            <div className="rounded-lg overflow-hidden shadow-lg mb-12">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={8}
                onLoad={onLoad}
                onUnmount={onUnmount}
              >
                {filteredLocations.map((location) => (
                  <Marker
                    key={location.id}
                    position={location.location}
                    title={location.name}
                    icon={markerIcons[location.type as keyof typeof markerIcons]}
                  />
                ))}
              </GoogleMap>
            </div>
          ) : (
            <div className="h-[600px] bg-gray-100 rounded-lg flex items-center justify-center">
              Loading map...
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredLocations.map((location) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex flex-col items-center text-center">
                  <MapPin className="w-12 h-12 text-blue-500 mb-4" />
                  <h3 className="font-bold text-xl mb-2">{location.type}</h3>
                  <p className="text-lg mb-1">{location.name}</p>
                  <p className="text-gray-600">{location.address}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
