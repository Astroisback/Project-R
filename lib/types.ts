// Type definitions for Hackathon data
export interface Hackathon {
    id: string;
    title: string;
    deadline: string; // ISO date string
    teamSize?: number | "any";
    tags: string[];
    description: string;
    url: string;
    applied: boolean;
    teamFormed: boolean;
    createdAt: string;
    lastChecked: string;
}

export interface NotificationSettings {
    discordWebhook?: string;
    discoveryWebhook?: string; // Separate webhook for discovery notifications
    emailEnabled: boolean;
    calendarEnabled: boolean;
}

export interface LocationFilter {
    enabled: boolean;
    userLocation: string; // User's selected location (e.g. "Faridabad", "Kolkata")
    nearbyLocations: string[]; // AI-generated list of nearby cities
}

export interface UserSettings {
    unstopCookie: string;
    notifications: NotificationSettings;
    locationFilter: LocationFilter;
}
