import React from 'react';
import {
  Megaphone,
  Rocket,
  Sword,
  Car,
  Plane,
  Truck,
  Users,
  AlertTriangle,
  Building2,
  Ambulance,
  Handshake,
  MapPin,
  Newspaper,
  Building,
  Landmark,
  Briefcase,
  Globe,
  FileText,
  MessageCircle,
  Video,
  Radio
} from 'lucide-react';

// Map of event types to their corresponding Lucide icons
export const eventMarkers = {
  // Statements & Announcements
  statement: Megaphone,
  announcement: Radio,
  declaration: Newspaper,
  
  // Military Actions
  airstrike: Rocket,
  shelling: AlertTriangle,
  bombing: AlertTriangle,
  missile: Rocket,
  
  // Ground Combat
  battle: Sword,
  clash: Sword,
  fighting: Sword,
  gunfire: AlertTriangle,
  
  // Vehicle Incidents
  accident: Car,
  crash: Car,
  collision: Car,
  
  // Aerial Operations
  drone: Plane,
  uav: Plane,
  
  // Military Movement
  convoy: Truck,
  deployment: Truck,
  movement: Truck,
  
  // Protests & Civil Actions
  protest: Users,
  demonstration: Users,
  rally: Users,
  
  // Infrastructure
  explosion: AlertTriangle,
  fire: AlertTriangle,
  damage: Building2,
  
  // Humanitarian
  aid: Ambulance,
  evacuation: Ambulance,
  rescue: Ambulance,
  
  // Diplomatic
  meeting: Handshake,
  negotiation: Handshake,
  agreement: FileText,
  
  // Categories
  politics: Landmark,
  business: Briefcase,
  world: Globe,
  technology: Building,
  
  // Media
  video: Video,
  comment: MessageCircle,
  
  // Default
  default: MapPin
} as const;

// Source-based colors for markers
export const markerColors = {
  lebanon: '#FF0000',      // Red for Lebanese sources
  israel: '#0038B8',      // Dark blue for Israel/IDF
  hezbollah: '#FFCC00',   // Yellow for Hezbollah
  amal: '#90EE90',        // Light green for Amal
  kataeb: '#006400',      // Dark green for Kataeb/Phalange
  watan: '#66023C',       // Tyrian purple for Project Watan
  future: '#87CEEB',      // Light blue for Future
  unifil: '#FFFFFF',      // White for UN/UNIFIL (with black icon)
  ouwet: '#FF4040',       // Lighter red for Lebanese Forces/Ouwet
  fpm: '#FFA500',         // Orange for FPM/Free Patriotic Movement
  syria: '#008000',       // Green for Syria
  default: '#666666'      // Gray for unspecified sources
} as const;

type EventType = keyof typeof eventMarkers;
type SourceType = keyof typeof markerColors;

interface EventMarkerProps {
  type?: EventType;
  title: string;
  description?: string;
  source?: SourceType;
  className?: string;
  size?: number;
  fill?: boolean;
}

/**
 * Get the appropriate marker component for a news event
 */
export function EventMarker({ 
  type, 
  title, 
  description, 
  source = 'default',
  className = '', 
  size = 24,
  fill = true
}: EventMarkerProps) {
  const color = markerColors[source];
  // Special handling for UNIFIL - use black icon
  const iconColor = source === 'unifil' ? '#000000' : color;
  const combinedClassName = `${className} ${fill ? 'fill-current' : 'stroke-current'} ${
    source === 'unifil' ? 'bg-white rounded-full p-0.5' : ''
  }`;

  // If event type is explicitly provided and exists in our mapping
  if (type && type in eventMarkers) {
    const Icon = eventMarkers[type];
    return (
      <div className="relative" style={{ color: iconColor }}>
        <Icon className={combinedClassName} size={size} />
      </div>
    );
  }

  // Search title and description for keywords
  const searchText = `${title} ${description || ''}`.toLowerCase();
  
  // Find the first matching event type based on keywords
  const matchedType = (Object.keys(eventMarkers) as EventType[]).find(type => 
    searchText.includes(type.toLowerCase())
  );

  const Icon = matchedType ? eventMarkers[matchedType] : eventMarkers.default;
  return (
    <div className="relative" style={{ color: iconColor }}>
      <Icon className={combinedClassName} size={size} />
    </div>
  );
}

/**
 * Get marker color based on event priority
 */
export function getMarkerColor(
  priority: 'breaking' | 'high' | 'normal' = 'normal',
  source: SourceType = 'default'
): string {
  switch (priority) {
    case 'breaking':
      return markerColors[source]; // Use source color for breaking news
    case 'high':
      return markerColors[source]; // Use source color for high priority
    default:
      return markerColors[source]; // Use source color for normal priority
  }
}