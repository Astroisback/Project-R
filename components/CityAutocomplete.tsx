'use client';

import { useState, useEffect, useRef } from 'react';
import { findMatchingCities, CityMatch } from '@/lib/cities';

interface CityAutocompleteProps {
    value: string;
    onChange: (value: string) => void;
    onSelect?: (city: string) => void;
    placeholder?: string;
    className?: string; // For the input element
    wrapperClassName?: string; // For the container
    variant?: 'zinc' | 'glass'; // 'zinc' for discover page, 'glass' for settings page
}

export default function CityAutocomplete({
    value,
    onChange,
    onSelect,
    placeholder = "Type a city name...",
    className,
    wrapperClassName,
    variant = 'zinc'
}: CityAutocompleteProps) {
    const [suggestions, setSuggestions] = useState<CityMatch[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Debounce search
    useEffect(() => {
        const timer = setTimeout(() => {
            if (value.trim().length >= 2) {
                const matches = findMatchingCities(value);
                setSuggestions(matches);
                // Only show if we have matches and the input isn't exactly the canonical name of the top match
                // (This prevents the dropdown from showing after selection if the user types exactly)
                // Actually, let's just show if there are matches and it's focused.
                // But we don't want it to pop up immediately after selection if the value matches exactly.
                const exactMatch = matches.find(m => m.matchType === 'exact' && m.city.canonical.toLowerCase() === value.toLowerCase());
                if (exactMatch && matches.length === 1) {
                    setShowSuggestions(false);
                } else {
                    setShowSuggestions(matches.length > 0);
                }
            } else {
                setSuggestions([]);
                setShowSuggestions(false);
            }
        }, 200);

        return () => clearTimeout(timer);
    }, [value]);

    // Handle outside click to close
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (cityCanonical: string) => {
        onChange(cityCanonical);
        if (onSelect) onSelect(cityCanonical);
        setShowSuggestions(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            if (showSuggestions && suggestions.length > 0) {
                e.preventDefault();
                handleSelect(suggestions[0].city.canonical);
            } else if (onSelect) {
                // If no suggestions or hidden, just submit current value
                onSelect(value);
            }
        } else if (e.key === 'Escape') {
            setShowSuggestions(false);
        }
    };

    // Styles based on variant
    const inputBaseStyles = "w-full rounded-lg px-3.5 py-2.5 text-sm transition-all focus:outline-none";
    const variantStyles = variant === 'zinc'
        ? "bg-zinc-900/60 border border-zinc-800 text-zinc-200 placeholder:text-zinc-700 focus:border-blue-500/40"
        : "bg-black/30 border border-white/20 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500";

    const dropdownBaseStyles = "absolute z-50 w-full mt-1 rounded-lg border shadow-xl overflow-hidden max-h-60 overflow-y-auto";
    const dropdownVariantStyles = variant === 'zinc'
        ? "bg-[#0c0c10] border-zinc-800"
        : "bg-slate-900/90 backdrop-blur-md border-white/10";

    const itemBaseStyles = "px-3.5 py-2.5 text-sm cursor-pointer transition-colors flex justify-between items-center group";
    const itemVariantStyles = variant === 'zinc'
        ? "text-zinc-300 hover:bg-zinc-800 hover:text-white"
        : "text-gray-300 hover:bg-white/10 hover:text-white";

    const subtextStyles = variant === 'zinc'
        ? "text-xs text-zinc-600 group-hover:text-zinc-500"
        : "text-xs text-gray-500 group-hover:text-gray-400";

    return (
        <div ref={wrapperRef} className={`relative ${wrapperClassName || ''}`}>
            <input
                type="text"
                value={value}
                onChange={(e) => {
                    onChange(e.target.value);
                    if (!showSuggestions && e.target.value.length >= 2) setShowSuggestions(true);
                }}
                onFocus={() => {
                    if (value.length >= 2 && suggestions.length > 0) setShowSuggestions(true);
                }}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                className={`${inputBaseStyles} ${variantStyles} ${className || ''}`}
            />

            {showSuggestions && suggestions.length > 0 && (
                <div className={`${dropdownBaseStyles} ${dropdownVariantStyles}`}>
                    {suggestions.map((match, index) => (
                        <div
                            key={`${match.city.canonical}-${index}`}
                            onClick={() => handleSelect(match.city.canonical)}
                            className={itemVariantStyles}
                        >
                            <span className="font-medium">
                                {match.city.canonical}
                            </span>
                            <span className={subtextStyles}>
                                {match.city.region}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
