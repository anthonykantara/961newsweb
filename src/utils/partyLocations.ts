// Party headquarters and key locations
export const partyLocations = {
  // Political Party HQs
  hezbollah: {
    name: 'Hezbollah HQ',
    lat: 33.8938,
    lng: 35.4875, // Dahieh, Southern Suburbs of Beirut
    source: 'hezbollah'
  },
  amal: {
    name: 'Amal Movement HQ', 
    lat: 33.8835,
    lng: 35.4955, // Haret Hreik
    source: 'amal'
  },
  kataeb: {
    name: 'Kataeb Party HQ',
    lat: 33.8897,
    lng: 35.5172, // Saifi
    source: 'kataeb'
  },
  watan: {
    name: 'Project Watan Office',
    lat: 33.8959,
    lng: 35.4812, // Beirut
    source: 'watan'
  },
  future: {
    name: 'Future Movement HQ',
    lat: 33.9008,
    lng: 35.4800, // Downtown Beirut
    source: 'future'
  },
  ouwet: {
    name: 'Lebanese Forces HQ',
    lat: 34.0047,
    lng: 35.6500, // Maarab
    source: 'ouwet'
  },
  fpm: {
    name: 'FPM HQ',
    lat: 33.8339,
    lng: 35.5442, // Mirna Chalouhi Center, Sin el Fil
    source: 'fpm'
  },

  // Government Institutions
  parliament: {
    name: 'Parliament',
    lat: 33.8959,
    lng: 35.5051, // Nejmeh Square
    source: 'lebanon'
  },
  grandserail: {
    name: 'Grand Serail',
    lat: 33.8982,
    lng: 35.5024, // Government Palace
    source: 'lebanon'
  },
  baabda: {
    name: 'Baabda Palace',
    lat: 33.8339,
    lng: 35.5442, // Presidential Palace
    source: 'lebanon'
  },
  
  // International Organizations
  unifil: {
    name: 'UNIFIL HQ',
    lat: 33.2704,
    lng: 35.2037, // Naqoura
    source: 'unifil'
  }
} as const;

export type PartyLocation = keyof typeof partyLocations;

/**
 * Get location coordinates for a party/organization
 */
export function getPartyLocation(party: PartyLocation) {
  return partyLocations[party];
}

/**
 * Determine if a news event should use party HQ location
 */
export function shouldUsePartyHQ(type: string): boolean {
  const statementTypes = [
    'statement',
    'announcement',
    'declaration',
    'press',
    'conference',
    'speech'
  ];
  return statementTypes.some(t => type.toLowerCase().includes(t));
}