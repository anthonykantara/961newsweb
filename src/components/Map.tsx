"use client"

import { MapContainer, TileLayer, Popup, useMapEvents, ScaleControl } from "react-leaflet";
import { LatLngExpression, LatLngTuple } from 'leaflet';
import { MarkerLayer, Marker } from "react-leaflet-marker";
import { EventMarker, eventMarkers, markerColors } from '@/utils/newsMarkers';
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { PartyLocation } from "@/utils/partyLocations";
import { useState } from "react";

interface NewsEvent {
    id: string;
    title: { en: string; ar: string };
    type: string;
    description?: string;
    location: {
        name: { en: string; ar: string };
        lat: number;
        lng: number;
        source?: keyof typeof markerColors;
    };
    category: { en: string; ar: string };
    timestamp: Date;
    priority: 'breaking' | 'high' | 'normal';
    party?: PartyLocation;
}

interface MapProps {
    newsEvents: NewsEvent[];
    posix: LatLngExpression | LatLngTuple;
    zoom?: number;
    language: "en" | "ar";
}



const CoordinatesControl = () => {
    const [coords, setCoords] = useState("33.8547°N, 35.8623°E");
    const [scale, setScale] = useState("5 km");

    const zoomendHandler = () => {
        const zoom = map.getZoom();
        const centerLat = map.getCenter().lat;

        // Earth circumference at the equator in meters
        const earthCircumference = 40075016.686;

        // Scale calculation
        const scaleDistanceMeters =
            earthCircumference * Math.cos(centerLat * Math.PI / 180) / Math.pow(2, zoom + 8);

        // Convert to km if necessary
        const displayScale =
            scaleDistanceMeters >= 1000
                ? `${(scaleDistanceMeters / 1000).toFixed(1)} km`
                : `${Math.round(scaleDistanceMeters)} m`;

        setScale(displayScale);
    };

    const map = useMapEvents({
        mousemove: (e) => {
            const { lat, lng } = e.latlng;
            setCoords(`${lat.toFixed(4)}°N, ${lng.toFixed(4)}°E`);
        },
        zoomend: zoomendHandler,
    });

    return (
        <div className="absolute left-4 bottom-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm px-3 py-2 text-sm z-[9999]">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-12 h-1 bg-gray-900" />
                    <span>{scale}</span>
                </div>
                <div className="w-px h-4 bg-gray-300" />
                <div>{coords}</div>
            </div>
        </div>
    );
};

const Map = ({ newsEvents, posix, zoom = 7, language }: MapProps) => {
    // Define URLs for different language tile servers
    const tileUrl = (lang: "en" | "ar") => {
        if (lang === "ar") {
            // URL for Arabic language tiles, for example from OSM
            return "http://{s}.www.toolserver.org/tiles/osm-labels-ar/{z}/{x}/{y}.png";
        } else {
            // Default or English language tiles
            return "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
        }
    };

    return (
        <div className={`relative h-full w-full ${language === "ar" ? "rtl" : ""}`}>
            <MapContainer
                center={posix}
                zoom={zoom}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url={tileUrl('en')}
                />
                {newsEvents.map((event) => {
                    const isValidEventType = (type: string): type is keyof typeof eventMarkers => {
                        return type in eventMarkers;
                    };

                    return (
                        <MarkerLayer>
                            <Marker
                                position={[event.location.lat, event.location.lng]}
                            >
                                <EventMarker
                                    type={isValidEventType(event.type) ? event.type : 'default'}
                                    title={event.title[language]}
                                    source={event.location.source}
                                    size={40}
                                />
                            </Marker>
                        </MarkerLayer>
                    );
                })}
                <CoordinatesControl />
            </MapContainer>
        </div>
    );
};

export default Map;