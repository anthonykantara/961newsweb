"use client"

import React, { useMemo } from 'react';
import { MapPin, Clock } from 'lucide-react';
import { formatTimeAgo } from '@/utils/dateUtils';
import { EventMarker, markerColors } from '@/utils/newsMarkers';
import { partyLocations, shouldUsePartyHQ, PartyLocation } from '@/utils/partyLocations';
import { Minus, Plus, Locate } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import dynamic from 'next/dynamic';

interface NewsEvent {
  id: string;
  title: string;
  type?: string;
  description?: string;
  location: {
    name: string;
    lat: number;
    lng: number;
    source?: keyof typeof markerColors;
  };
  category: string;
  timestamp: Date;
  priority: 'breaking' | 'high' | 'normal';
  party?: PartyLocation;
}

const newsEvents: NewsEvent[] = [
  {
    id: '1',
    title: 'Major Economic Reform Package Announced in Beirut',
    type: 'statement',
    location: {
      name: 'Beirut',
      lat: 33.8938,
      lng: 35.5018,
      source: 'lebanon'
    },
    category: 'Economy',
    timestamp: new Date(Date.now() - 3600000),
    priority: 'breaking'
  },
  {
    id: '2',
    title: 'Tech Innovation Hub Opens in Tripoli',
    type: 'announcement',
    location: {
      name: 'Tripoli',
      lat: 34.4333,
      lng: 35.8333,
      source: 'lebanon'
    },
    category: 'Technology',
    timestamp: new Date(Date.now() - 7200000),
    priority: 'high'
  },
  {
    id: '3',
    title: 'Hezbollah Statement on Economic Reforms',
    type: 'statement',
    location: {
      name: 'South Lebanon',
      lat: 33.2775,
      lng: 35.3904,
      source: 'hezbollah'
    },
    category: 'Politics',
    timestamp: new Date(Date.now() - 10800000),
    priority: 'high'
  },
  {
    id: '4',
    title: 'FPM Rally in Support of New Policies',
    type: 'protest',
    location: {
      name: 'Baabda',
      lat: 33.8339,
      lng: 35.5442,
      source: 'fpm'
    },
    category: 'Politics',
    timestamp: new Date(Date.now() - 14400000),
    priority: 'normal'
  },
  {
    id: '5',
    title: 'Lebanese Forces Press Conference',
    type: 'statement',
    location: {
      name: 'Maarab',
      lat: 34.0047,
      lng: 35.6500,
      source: 'ouwet'
    },
    category: 'Politics',
    timestamp: new Date(Date.now() - 18000000),
    priority: 'normal'
  },
  {
    id: '6',
    title: 'UNIFIL Patrol Report',
    type: 'statement',
    location: {
      name: 'Naqoura',
      lat: 33.1181,
      lng: 35.1400,
      source: 'unifil'
    },
    category: 'Security',
    timestamp: new Date(Date.now() - 21600000),
    priority: 'normal'
  }
];

export default function NewsMapPage() {
  const handleZoomIn = () => { };
  const handleZoomOut = () => { };
  const handleLocate = () => { };

  const Map = useMemo(() => dynamic(
    () => import('@/components/Map'),
    {
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])

  return (
    <div className="h-[calc(100vh-4rem)] bg-gray-100">
      <div className="h-full grid grid-cols-[1fr,340px]">
        <div className="relative bg-gray-100 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <Map newsEvents={newsEvents} posix={[33.8938, 35.5018]} zoom={7} />
          </div>

          {/* Top Right Ad */}
          <div className="absolute right-4 top-4 z-[9999]">
            <div className="bg-gray-100 h-[90px] w-[728px] flex items-center justify-center relative rounded-lg shadow-lg">
              <div className="absolute top-2 right-2 bg-white/80 px-2 py-0.5 rounded text-xs text-gray-500">
                AD
              </div>
              <span className="text-gray-400">Ad Space</span>
            </div>
          </div>
        </div>

        <div className="bg-white border-l border-gray-200 overflow-y-auto">
          <div className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-[#FF0000]" />
              <h1 className="text-2xl font-bold">News Map</h1>
            </div>
            <div className="space-y-4">
              {newsEvents.map((event, index) => (
                <React.Fragment key={event.id}>
                  <a
                    href={`/updates/${event.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    {event.priority === 'breaking' && (
                      <div className="flex items-center gap-2 mb-2">
                        <EventMarker
                          type={event.type}
                          title={event.title}
                          source={event.location.source || 'default'}
                          className="text-white"
                        />
                        <span className="bg-[#FF0000] text-white text-xs px-2 py-0.5 rounded font-medium animate-pulse">
                          Breaking
                        </span>
                      </div>
                    )}
                    {event.priority !== 'breaking' && (
                      <EventMarker
                        type={event.type}
                        title={event.title}
                        source={event.location.source || 'default'}
                        className="mb-2 block text-white"
                      />
                    )}
                    <h3 className="font-medium text-gray-900 mb-2">{event.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location.name}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{formatTimeAgo(event.timestamp)}</span>
                      </div>
                    </div>
                  </a>
                  {(index + 1) % 3 === 0 && index !== newsEvents.length - 1 && (
                    <div className="bg-gray-100 h-[280px] w-full flex items-center justify-center relative rounded-lg">
                      <div className="absolute top-2 right-2 bg-white/80 px-2 py-0.5 rounded text-xs text-gray-500">
                        AD
                      </div>
                      <span className="text-gray-400">Ad Space</span>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}