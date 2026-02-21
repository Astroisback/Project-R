// API Base URL helper for Capacitor compatibility
// In the browser (web), fetch('/api/...') works with relative URLs.
// In Capacitor (Android), there's no local server, so we need the full Vercel URL.

const API_BASE =
    typeof window !== 'undefined' &&
        (window as any).Capacitor?.isNativePlatform()
        ? 'https://trackmython.vercel.app' // ← Update this to your Vercel deployment URL
        : '';

export function apiUrl(path: string): string {
    return `${API_BASE}${path}`;
}

export default API_BASE;
