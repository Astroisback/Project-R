'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import { auth } from '@/lib/firebase';
import { apiUrl } from '@/lib/api-base';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User } from "firebase/auth";

function LinkContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const code = searchParams.get('code');
    const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
    const [message, setMessage] = useState('Verifying link code...');
    const [user, setUser] = useState<User | null>(null);
    const [discordUsername, setDiscordUsername] = useState("");

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (!currentUser) {
                // Not logged in - update UI to ask for login
                setStatus('loading');
                setMessage('Please sign in to link your Discord account.');
            } else if (code) {
                // Logged in with code - start linking
                linkAccount(currentUser, code);
            } else {
                setStatus('error');
                setMessage('No linking code found. Please use the link provided by the Discord bot.');
            }
        });

        return () => unsubscribe();
    }, [code]);

    const linkAccount = async (user: User, code: string) => {
        try {
            setStatus('loading');
            setMessage('Linking your account...');

            const token = await user.getIdToken();
            const response = await fetch(apiUrl('/api/link-discord'), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ code })
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setDiscordUsername(data.discordUsername || "Unknown");
                setMessage('Successfully linked! You can close this window and return to Discord.');
            } else {
                setStatus('error');
                setMessage(data.error || 'Failed to link account.');
            }
        } catch (error) {
            console.error('Link error:', error);
            setStatus('error');
            setMessage('An error occurred while linking. Please try again.');
        }
    };

    const handleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error('Login error:', error);
            setStatus('error');
            setMessage('Failed to sign in. Please try again.');
        }
    };

    if (!user && !code) {
        return (
            <div className="text-center">
                <div className="text-6xl mb-6">🛸</div>
                <h1 className="text-2xl font-black uppercase tracking-tighter italic text-white mb-2">Invalid <span className="text-blue-500">Transmission</span></h1>
                <p className="text-blue-200/40 text-[10px] font-bold uppercase tracking-widest">
                    No handshake code detected from Discord.
                </p>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-blue-600 neon-blue-glow flex items-center justify-center font-black text-xl text-black mx-auto mb-6 italic">U</div>
                <h1 className="text-2xl font-black uppercase tracking-tighter text-white italic mb-2">Initialize <span className="text-blue-500">Link</span></h1>
                <p className="mb-8 text-blue-200/60 text-xs font-medium">{message}</p>
                <button
                    onClick={handleLogin}
                    className="w-full px-6 py-4 bg-white text-black rounded-xl font-black uppercase tracking-widest text-xs hover:bg-blue-50 transition-all duration-200 "
                >
                    Auth with Google
                </button>
            </div>
        );
    }

    return (
        <div className="text-center max-w-md w-full">
            {status === 'loading' && (
                <>
                    <div className="h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-6" />
                    <h1 className="text-xl font-black uppercase tracking-tighter text-white mb-2">Synchronizing...</h1>
                    <p className="text-blue-200/40 text-[10px] font-bold uppercase tracking-widest">{message}</p>
                </>
            )}

            {status === 'success' && (
                <>
                    <div className="text-6xl mb-6">🛰️</div>
                    <h1 className="text-2xl font-black uppercase tracking-tighter text-blue-400 mb-2">Link Established</h1>
                    <p className="text-white/80 text-sm font-medium mb-2">
                        Discord identity <span className="text-blue-400 font-black italic">@{discordUsername}</span> recognized.
                    </p>
                    <p className="text-blue-200/40 text-[10px] font-bold uppercase tracking-widest mb-8">
                        The bridge is now active.
                    </p>
                    <button
                        onClick={() => router.push("/")}
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white px-6 py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all neon-blue-glow"
                    >
                        Enter Dashboard
                    </button>
                </>
            )}

            {status === 'error' && (
                <>
                    <div className="text-6xl mb-6">⚠️</div>
                    <h1 className="text-2xl font-black uppercase tracking-tighter text-red-500 mb-2">Protocol Error</h1>
                    <p className="text-white/60 text-xs mb-8 font-medium">{message}</p>
                    <button
                        onClick={() => router.push("/")}
                        className="w-full bg-white/5 border border-white/10 text-white px-6 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all"
                    >
                        Return Home
                    </button>
                </>
            )}

            {code && (
                <div className="mt-6 pt-4 border-t border-gray-700">
                    <p className="text-gray-500 text-xs">Link Code: {code}</p>
                </div>
            )}
        </div>
    );
}

export default function LinkPage() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-md w-full border border-gray-700">
                <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
                    <LinkContent />
                </Suspense>
            </div>
        </div>
    );
}
