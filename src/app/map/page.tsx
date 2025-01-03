"use client"

import React, { useMemo, useState } from 'react';
import { MapPin, Clock } from 'lucide-react';
import { formatTimeAgo } from '@/utils/dateUtils';
import { EventMarker, eventMarkers, markerColors } from '@/utils/newsMarkers';
import { PartyLocation } from '@/utils/partyLocations';
import dynamic from 'next/dynamic';

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

const isValidEventType = (type: string): type is keyof typeof eventMarkers => {
  return type in eventMarkers;
};

const newsEvents: NewsEvent[] = [
  {
    id: '1',
    title: { en: "Major Economic Reform Package Announced in Beirut", ar: "حزمة إصلاحات اقتصادية كبرى أُعلن عنها في بيروت" },
    type: 'statement',
    location: {
      name: { en: "Beirut", ar: "بيروت" },
      lat: 33.8938,
      lng: 35.5018,
      source: 'lebanon',
    },
    category: { en: "Economy", ar: "اقتصاد" },
    timestamp: new Date(Date.now() - 3600000),
    priority: 'breaking',
  },
  {
    id: '2',
    title: { en: 'Tech Innovation Hub Opens in Tripoli', ar: "افتتاح مركز الابتكار التكنولوجي في طرابلس" },
    type: 'announcement',
    location: {
      name: { en: 'Tripoli', ar: 'طرابلس' },
      lat: 34.4333,
      lng: 35.8333,
      source: 'lebanon',
    },
    category: { en: 'Technology', ar: 'تكنولوجيا' },
    timestamp: new Date(Date.now() - 7200000),
    priority: 'high',
  },
  {
    id: '3',
    title: { en: 'Hezbollah Statement on Economic Reforms', ar: "تصريح حزب الله بشأن الإصلاحات الاقتصادية" },
    type: 'statement',
    location: {
      name: { en: 'South Lebanon', ar: 'جنوب لبنان' },
      lat: 33.2775,
      lng: 35.3904,
      source: 'hezbollah',
    },
    category: { en: 'Politics', ar: 'سياسة' },
    timestamp: new Date(Date.now() - 10800000),
    priority: 'high',
  },
  {
    id: '4',
    title: { en: 'FPM Rally in Support of New Policies', ar: "تجمع التيار الوطني الحر لدعم السياسات الجديدة" },
    type: 'protest',
    location: {
      name: { en: 'Baabda', ar: 'بعبدا' },
      lat: 33.8339,
      lng: 35.5442,
      source: 'fpm',
    },
    category: { en: 'Politics', ar: 'سياسة' },
    timestamp: new Date(Date.now() - 14400000),
    priority: 'normal',
  },
  {
    id: '5',
    title: { en: 'Lebanese Forces Press Conference', ar: "مؤتمر صحفي للقوات اللبنانية" },
    type: 'statement',
    location: {
      name: { en: 'Maarab', ar: 'معراب' },
      lat: 34.0047,
      lng: 35.6500,
      source: 'ouwet',
    },
    category: { en: 'Politics', ar: 'سياسة' },
    timestamp: new Date(Date.now() - 18000000),
    priority: 'normal',
  },
  {
    id: '6',
    title: { en: 'UNIFIL Patrol Report', ar: "تقرير دورية اليونيفيل" },
    type: 'statement',
    location: {
      name: { en: 'Naqoura', ar: 'الناقورة' },
      lat: 33.1181,
      lng: 35.1400,
      source: 'unifil',
    },
    category: { en: 'Security', ar: 'أمن' },
    timestamp: new Date(Date.now() - 21600000),
    priority: 'normal',
  },
];

export default function NewsMapPage() {
  const [language, setLanguage] = useState<"en" | "ar">("en");

  const Map = useMemo(() => dynamic(
    () => import('@/components/Map'),
    {
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  return (
    <div className={`h-full grid grid-cols-[1fr,340px] ${language === "ar" ? "rtl" : ""}`}>
      <div className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <Map newsEvents={newsEvents} posix={[33.8938, 35.5018]} zoom={7} language={language} />
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
        <div className="p-1">
          {/* Language Toggle */}
          <div className="fixed top-0 bg-white z-10 py-2 border-b border-gray-200">
            <button
              onClick={toggleLanguage}
              className="bg-gray-100 px-4 py-2 rounded-lg shadow-md text-sm font-medium"
            >
              {language === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
            </button>
          </div>

          <div className='my-8' />

          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-[#FF0000]" />
            <h1 className="text-2xl font-bold">
              {language === "en" ? "News Map" : "خريطة الأخبار"}
            </h1>
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
                        type={isValidEventType(event.type) ? event.type : 'default'}
                        title={event.title[language]}
                        source={event.location.source || 'default'}
                      />
                      <span className="bg-[#FF0000] text-white text-xs px-2 py-0.5 rounded font-medium animate-pulse">
                        Breaking
                      </span>
                    </div>
                  )}
                  {event.priority !== 'breaking' && (
                    <EventMarker
                      type={isValidEventType(event.type) ? event.type : 'default'}
                      title={event.title[language]}
                      source={event.location.source || 'default'}
                      className="mb-2 block"
                    />
                  )}
                  <h3 className="font-medium text-gray-900 mb-2">{event.title[language]}</h3>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location.name[language]}</span>
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
  );
}