
export interface City {
    canonical: string;
    aliases: string[];
    state: string;
    region: string;
}

export const CITIES: City[] = [
    // Delhi NCR
    { canonical: "Delhi", aliases: ["delhi", "new delhi", "dlehi", "dl"], state: "Delhi", region: "Delhi NCR" },
    { canonical: "Gurgaon", aliases: ["gurgaon", "gurugram", "ggn"], state: "Haryana", region: "Delhi NCR" },
    { canonical: "Noida", aliases: ["noida", "gautam buddha nagar"], state: "Uttar Pradesh", region: "Delhi NCR" },
    { canonical: "Faridabad", aliases: ["faridabad", "fbd"], state: "Haryana", region: "Delhi NCR" },
    { canonical: "Ghaziabad", aliases: ["ghaziabad", "gzb"], state: "Uttar Pradesh", region: "Delhi NCR" },
    { canonical: "Greater Noida", aliases: ["greater noida", "g noida"], state: "Uttar Pradesh", region: "Delhi NCR" },
    { canonical: "Manesar", aliases: ["manesar"], state: "Haryana", region: "Delhi NCR" },
    { canonical: "Sonipat", aliases: ["sonipat", "sonepat"], state: "Haryana", region: "Delhi NCR" },
    { canonical: "Bahadurgarh", aliases: ["bahadurgarh"], state: "Haryana", region: "Delhi NCR" },
    { canonical: "Meerut", aliases: ["meerut"], state: "Uttar Pradesh", region: "Delhi NCR" },
    { canonical: "Panipat", aliases: ["panipat"], state: "Haryana", region: "Delhi NCR" },
    { canonical: "Rohtak", aliases: ["rohtak"], state: "Haryana", region: "Delhi NCR" },
    { canonical: "Palwal", aliases: ["palwal"], state: "Haryana", region: "Delhi NCR" },
    { canonical: "Dwarka", aliases: ["dwarka"], state: "Delhi", region: "Delhi NCR" },
    { canonical: "Saket", aliases: ["saket"], state: "Delhi", region: "Delhi NCR" },
    { canonical: "Janakpuri", aliases: ["janakpuri"], state: "Delhi", region: "Delhi NCR" },

    // Mumbai Metropolitan
    { canonical: "Mumbai", aliases: ["mumbai", "bombay", "bom"], state: "Maharashtra", region: "Mumbai Metropolitan" },
    { canonical: "Navi Mumbai", aliases: ["navi mumbai", "new bombay"], state: "Maharashtra", region: "Mumbai Metropolitan" },
    { canonical: "Thane", aliases: ["thane"], state: "Maharashtra", region: "Mumbai Metropolitan" },
    { canonical: "Panvel", aliases: ["panvel"], state: "Maharashtra", region: "Mumbai Metropolitan" },
    { canonical: "Kalyan", aliases: ["kalyan"], state: "Maharashtra", region: "Mumbai Metropolitan" },
    { canonical: "Dombivli", aliases: ["dombivli", "dombivali"], state: "Maharashtra", region: "Mumbai Metropolitan" },
    { canonical: "Vasai", aliases: ["vasai"], state: "Maharashtra", region: "Mumbai Metropolitan" },
    { canonical: "Virar", aliases: ["virar"], state: "Maharashtra", region: "Mumbai Metropolitan" },
    { canonical: "Mira-Bhayandar", aliases: ["mira bhayandar", "mira road"], state: "Maharashtra", region: "Mumbai Metropolitan" },
    { canonical: "Bhiwandi", aliases: ["bhiwandi"], state: "Maharashtra", region: "Mumbai Metropolitan" },
    { canonical: "Ulhasnagar", aliases: ["ulhasnagar"], state: "Maharashtra", region: "Mumbai Metropolitan" },
    { canonical: "Andheri", aliases: ["andheri"], state: "Maharashtra", region: "Mumbai Metropolitan" },
    { canonical: "Borivali", aliases: ["borivali"], state: "Maharashtra", region: "Mumbai Metropolitan" },
    { canonical: "Bandra", aliases: ["bandra"], state: "Maharashtra", region: "Mumbai Metropolitan" },
    { canonical: "Dadar", aliases: ["dadar"], state: "Maharashtra", region: "Mumbai Metropolitan" },

    // Bangalore
    { canonical: "Bangalore", aliases: ["bangalore", "bengaluru", "blr"], state: "Karnataka", region: "Bangalore" },
    { canonical: "Whitefield", aliases: ["whitefield"], state: "Karnataka", region: "Bangalore" },
    { canonical: "Electronic City", aliases: ["electronic city", "e-city", "ecity"], state: "Karnataka", region: "Bangalore" },
    { canonical: "HSR Layout", aliases: ["hsr layout", "hsr"], state: "Karnataka", region: "Bangalore" },
    { canonical: "Indiranagar", aliases: ["indiranagar"], state: "Karnataka", region: "Bangalore" },
    { canonical: "Koramangala", aliases: ["koramangala"], state: "Karnataka", region: "Bangalore" },
    { canonical: "Yelahanka", aliases: ["yelahanka"], state: "Karnataka", region: "Bangalore" },
    { canonical: "Jayanagar", aliases: ["jayanagar"], state: "Karnataka", region: "Bangalore" },

    // Hyderabad
    { canonical: "Hyderabad", aliases: ["hyderabad", "hyd"], state: "Telangana", region: "Hyderabad" },
    { canonical: "Secunderabad", aliases: ["secunderabad"], state: "Telangana", region: "Hyderabad" },
    { canonical: "Cyberabad", aliases: ["cyberabad"], state: "Telangana", region: "Hyderabad" },
    { canonical: "Gachibowli", aliases: ["gachibowli"], state: "Telangana", region: "Hyderabad" },
    { canonical: "Hitech City", aliases: ["hitech city", "hitec city"], state: "Telangana", region: "Hyderabad" },
    { canonical: "Madhapur", aliases: ["madhapur"], state: "Telangana", region: "Hyderabad" },
    { canonical: "Kondapur", aliases: ["kondapur"], state: "Telangana", region: "Hyderabad" },

    // Chennai
    { canonical: "Chennai", aliases: ["chennai", "madras", "maa"], state: "Tamil Nadu", region: "Chennai" },
    { canonical: "Guindy", aliases: ["guindy"], state: "Tamil Nadu", region: "Chennai" },
    { canonical: "Tambaram", aliases: ["tambaram"], state: "Tamil Nadu", region: "Chennai" },
    { canonical: "Avadi", aliases: ["avadi"], state: "Tamil Nadu", region: "Chennai" },
    { canonical: "Ambattur", aliases: ["ambattur"], state: "Tamil Nadu", region: "Chennai" },
    { canonical: "Velachery", aliases: ["velachery"], state: "Tamil Nadu", region: "Chennai" },
    { canonical: "Adyar", aliases: ["adyar"], state: "Tamil Nadu", region: "Chennai" },

    // Pune
    { canonical: "Pune", aliases: ["pune", "poona", "pnq"], state: "Maharashtra", region: "Pune" },
    { canonical: "Pimpri", aliases: ["pimpri"], state: "Maharashtra", region: "Pune" },
    { canonical: "Chinchwad", aliases: ["chinchwad"], state: "Maharashtra", region: "Pune" },
    { canonical: "Hinjewadi", aliases: ["hinjewadi", "hinjawadi"], state: "Maharashtra", region: "Pune" },
    { canonical: "Kothrud", aliases: ["kothrud"], state: "Maharashtra", region: "Pune" },
    { canonical: "Wakad", aliases: ["wakad"], state: "Maharashtra", region: "Pune" },
    { canonical: "Hadapsar", aliases: ["hadapsar"], state: "Maharashtra", region: "Pune" },
    { canonical: "Viman Nagar", aliases: ["viman nagar"], state: "Maharashtra", region: "Pune" },

    // Kolkata
    { canonical: "Kolkata", aliases: ["kolkata", "calcutta", "ccu"], state: "West Bengal", region: "Kolkata" },
    { canonical: "Howrah", aliases: ["howrah"], state: "West Bengal", region: "Kolkata" },
    { canonical: "Salt Lake", aliases: ["salt lake", "bidhannagar"], state: "West Bengal", region: "Kolkata" },
    { canonical: "Rajarhat", aliases: ["rajarhat", "new town"], state: "West Bengal", region: "Kolkata" },
    { canonical: "Dum Dum", aliases: ["dum dum"], state: "West Bengal", region: "Kolkata" },
    { canonical: "Kharagpur", aliases: ["kharagpur", "kgp"], state: "West Bengal", region: "Kolkata" },

    // Ahmedabad
    { canonical: "Ahmedabad", aliases: ["ahmedabad", "amd", "karnavati"], state: "Gujarat", region: "Ahmedabad" },
    { canonical: "Gandhinagar", aliases: ["gandhinagar"], state: "Gujarat", region: "Ahmedabad" },
    { canonical: "Maninagar", aliases: ["maninagar"], state: "Gujarat", region: "Ahmedabad" },

    // Chandigarh Tricity
    { canonical: "Chandigarh", aliases: ["chandigarh", "ixc"], state: "Chandigarh", region: "Chandigarh Tricity" },
    { canonical: "Mohali", aliases: ["mohali", "sas nagar"], state: "Punjab", region: "Chandigarh Tricity" },
    { canonical: "Panchkula", aliases: ["panchkula"], state: "Haryana", region: "Chandigarh Tricity" },
    { canonical: "Zirakpur", aliases: ["zirakpur"], state: "Punjab", region: "Chandigarh Tricity" },

    // Jaipur
    { canonical: "Jaipur", aliases: ["jaipur", "jpr", "pink city"], state: "Rajasthan", region: "Jaipur" },
    { canonical: "Mansarovar", aliases: ["mansarovar"], state: "Rajasthan", region: "Jaipur" },
    { canonical: "Malviya Nagar", aliases: ["malviya nagar"], state: "Rajasthan", region: "Jaipur" },

    // Lucknow
    { canonical: "Lucknow", aliases: ["lucknow", "lko"], state: "Uttar Pradesh", region: "Lucknow" },
    { canonical: "Gomti Nagar", aliases: ["gomti nagar"], state: "Uttar Pradesh", region: "Lucknow" },
    { canonical: "Hazratganj", aliases: ["hazratganj"], state: "Uttar Pradesh", region: "Lucknow" },

    // Indore
    { canonical: "Indore", aliases: ["indore", "idr"], state: "Madhya Pradesh", region: "Indore" },
    { canonical: "Vijay Nagar", aliases: ["vijay nagar"], state: "Madhya Pradesh", region: "Indore" },

    // Other Major Cities
    { canonical: "Surat", aliases: ["surat"], state: "Gujarat", region: "Gujarat" },
    { canonical: "Vadodara", aliases: ["vadodara", "baroda"], state: "Gujarat", region: "Gujarat" },
    { canonical: "Rajkot", aliases: ["rajkot"], state: "Gujarat", region: "Gujarat" },
    { canonical: "Nagpur", aliases: ["nagpur", "nag"], state: "Maharashtra", region: "Maharashtra" },
    { canonical: "Nashik", aliases: ["nashik", "nasik"], state: "Maharashtra", region: "Maharashtra" },
    { canonical: "Aurangabad", aliases: ["aurangabad", "chhatrapati sambhaji nagar"], state: "Maharashtra", region: "Maharashtra" },
    { canonical: "Bhopal", aliases: ["bhopal", "bho"], state: "Madhya Pradesh", region: "Madhya Pradesh" },
    { canonical: "Gwalior", aliases: ["gwalior"], state: "Madhya Pradesh", region: "Madhya Pradesh" },
    { canonical: "Jabalpur", aliases: ["jabalpur"], state: "Madhya Pradesh", region: "Madhya Pradesh" },
    { canonical: "Kanpur", aliases: ["kanpur", "cnb"], state: "Uttar Pradesh", region: "Uttar Pradesh" },
    { canonical: "Agra", aliases: ["agra"], state: "Uttar Pradesh", region: "Uttar Pradesh" },
    { canonical: "Varanasi", aliases: ["varanasi", "banaras", "kashi"], state: "Uttar Pradesh", region: "Uttar Pradesh" },
    { canonical: "Prayagraj", aliases: ["prayagraj", "allahabad"], state: "Uttar Pradesh", region: "Uttar Pradesh" },
    { canonical: "Patna", aliases: ["patna", "pat"], state: "Bihar", region: "Bihar" },
    { canonical: "Ranchi", aliases: ["ranchi", "ixr"], state: "Jharkhand", region: "Jharkhand" },
    { canonical: "Jamshedpur", aliases: ["jamshedpur", "tatanagar"], state: "Jharkhand", region: "Jharkhand" },
    { canonical: "Bhubaneswar", aliases: ["bhubaneswar", "bbi"], state: "Odisha", region: "Odisha" },
    { canonical: "Cuttack", aliases: ["cuttack"], state: "Odisha", region: "Odisha" },
    { canonical: "Raipur", aliases: ["raipur", "rpr"], state: "Chhattisgarh", region: "Chhattisgarh" },
    { canonical: "Dehradun", aliases: ["dehradun", "ded"], state: "Uttarakhand", region: "Uttarakhand" },
    { canonical: "Haridwar", aliases: ["haridwar"], state: "Uttarakhand", region: "Uttarakhand" },
    { canonical: "Roorkee", aliases: ["roorkee"], state: "Uttarakhand", region: "Uttarakhand" },
    { canonical: "Shimla", aliases: ["shimla"], state: "Himachal Pradesh", region: "Himachal Pradesh" },
    { canonical: "Manali", aliases: ["manali"], state: "Himachal Pradesh", region: "Himachal Pradesh" },
    { canonical: "Dharamshala", aliases: ["dharamshala"], state: "Himachal Pradesh", region: "Himachal Pradesh" },
    { canonical: "Jammu", aliases: ["jammu"], state: "Jammu & Kashmir", region: "J&K" },
    { canonical: "Srinagar", aliases: ["srinagar"], state: "Jammu & Kashmir", region: "J&K" },
    { canonical: "Amritsar", aliases: ["amritsar"], state: "Punjab", region: "Punjab" },
    { canonical: "Ludhiana", aliases: ["ludhiana"], state: "Punjab", region: "Punjab" },
    { canonical: "Jalandhar", aliases: ["jalandhar"], state: "Punjab", region: "Punjab" },
    { canonical: "Patiala", aliases: ["patiala"], state: "Punjab", region: "Punjab" },
    { canonical: "Guwahati", aliases: ["guwahati", "gau"], state: "Assam", region: "North East" },
    { canonical: "Shillong", aliases: ["shillong"], state: "Meghalaya", region: "North East" },
    { canonical: "Gangtok", aliases: ["gangtok"], state: "Sikkim", region: "North East" },
    { canonical: "Visakhapatnam", aliases: ["visakhapatnam", "vizag", "vtz"], state: "Andhra Pradesh", region: "Andhra Pradesh" },
    { canonical: "Vijayawada", aliases: ["vijayawada"], state: "Andhra Pradesh", region: "Andhra Pradesh" },
    { canonical: "Tirupati", aliases: ["tirupati"], state: "Andhra Pradesh", region: "Andhra Pradesh" },
    { canonical: "Kochi", aliases: ["kochi", "cochin", "cok"], state: "Kerala", region: "Kerala" },
    { canonical: "Thiruvananthapuram", aliases: ["thiruvananthapuram", "trivandrum", "trv"], state: "Kerala", region: "Kerala" },
    { canonical: "Kozhikode", aliases: ["kozhikode", "calicut"], state: "Kerala", region: "Kerala" },
    { canonical: "Coimbatore", aliases: ["coimbatore", "cbe"], state: "Tamil Nadu", region: "Tamil Nadu" },
    { canonical: "Madurai", aliases: ["madurai"], state: "Tamil Nadu", region: "Tamil Nadu" },
    { canonical: "Trichy", aliases: ["trichy", "tiruchirappalli"], state: "Tamil Nadu", region: "Tamil Nadu" },
    { canonical: "Salem", aliases: ["salem"], state: "Tamil Nadu", region: "Tamil Nadu" },
    { canonical: "Vellore", aliases: ["vellore"], state: "Tamil Nadu", region: "Tamil Nadu" },
    { canonical: "Mysore", aliases: ["mysore", "mysuru"], state: "Karnataka", region: "Karnataka" },
    { canonical: "Mangalore", aliases: ["mangalore", "mangaluru"], state: "Karnataka", region: "Karnataka" },
    { canonical: "Hubli", aliases: ["hubli", "hubballi"], state: "Karnataka", region: "Karnataka" },
    { canonical: "Belgaum", aliases: ["belgaum", "belagavi"], state: "Karnataka", region: "Karnataka" },
    { canonical: "Manipal", aliases: ["manipal"], state: "Karnataka", region: "Karnataka" },
    { canonical: "Goa", aliases: ["goa", "panaji", "panjim"], state: "Goa", region: "Goa" },
    { canonical: "Udaipur", aliases: ["udaipur"], state: "Rajasthan", region: "Rajasthan" },
    { canonical: "Jodhpur", aliases: ["jodhpur"], state: "Rajasthan", region: "Rajasthan" },
    { canonical: "Kota", aliases: ["kota"], state: "Rajasthan", region: "Rajasthan" },
];

export const REGIONS = Array.from(new Set(CITIES.map(c => c.region))).sort();

export interface CityMatch {
    city: City;
    score: number; // Higher is better
    matchType: 'exact' | 'prefix' | 'substring' | 'fuzzy';
}

function levenshteinDistance(a: string, b: string): number {
    const matrix: number[][] = [];

    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // substitution
                    Math.min(
                        matrix[i][j - 1] + 1, // insertion
                        matrix[i - 1][j] + 1 // deletion
                    )
                );
            }
        }
    }

    return matrix[b.length][a.length];
}

export function findMatchingCities(input: string): CityMatch[] {
    if (!input || input.trim().length < 2) return [];

    const normalizedInput = input.toLowerCase().trim();
    const matches: CityMatch[] = [];

    for (const city of CITIES) {
        let bestScore = -1;
        let bestMatchType: 'exact' | 'prefix' | 'substring' | 'fuzzy' | null = null;

        const terms = [city.canonical, ...city.aliases];

        for (const term of terms) {
            const lowerTerm = term.toLowerCase();

            // 1. Exact Match
            if (lowerTerm === normalizedInput) {
                bestScore = 100;
                bestMatchType = 'exact';
                break; // Found best possible match for this city
            }

            // 2. Prefix Match
            if (lowerTerm.startsWith(normalizedInput)) {
                const score = 80 + (normalizedInput.length / lowerTerm.length) * 10;
                if (score > bestScore) {
                    bestScore = score;
                    bestMatchType = 'prefix';
                }
            }

            // 3. Substring Match
            if (lowerTerm.includes(normalizedInput)) {
                const score = 60 + (normalizedInput.length / lowerTerm.length) * 10;
                if (score > bestScore) {
                    bestScore = score;
                    bestMatchType = 'substring';
                }
            }

            // 4. Fuzzy Match (Levenshtein) - Only if input is at least 3 chars
            if (normalizedInput.length >= 3) {
                const dist = levenshteinDistance(normalizedInput, lowerTerm);
                // Allow generic distance of 2, or 1 for short strings
                const maxDist = normalizedInput.length <= 4 ? 1 : 2;

                if (dist <= maxDist) {
                    // Score reduces by distance
                    const score = 40 - (dist * 10);
                    if (score > bestScore) {
                        bestScore = score;
                        bestMatchType = 'fuzzy';
                    }
                }
            }
        }

        if (bestScore > 0 && bestMatchType) {
            matches.push({
                city,
                score: bestScore,
                matchType: bestMatchType
            });
        }
    }

    // Sort by score descending
    return matches.sort((a, b) => b.score - a.score).slice(0, 10); // Return top 10
}

export function formatLocation(city?: string, state?: string): string {
    if (!city || city.toLowerCase() === 'online') return 'Online';

    // 1. Try to find canonical city match
    const matches = findMatchingCities(city);
    // Use exact or prefix match if high confidence
    const match = matches.find(m => m.matchType === 'exact') || matches[0];

    if (match && match.score >= 80) {
        return `${match.city.canonical}, ${match.city.state}`;
    }

    // 2. Fallback normalization
    const cleanCity = city.trim();
    // Capitalize first letter of each word
    const formattedCity = cleanCity.replace(/\b\w/g, l => l.toUpperCase());

    if (state && state !== city) {
        const cleanState = state.trim().replace(/\b\w/g, l => l.toUpperCase());
        return `${formattedCity}, ${cleanState}`;
    }

    return formattedCity;
}
