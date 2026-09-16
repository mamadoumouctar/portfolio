"use client";

import React, { useEffect, useState } from "react";

const IconSun = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
);

const IconMoon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
);

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Lit le thème déjà appliqué par le script inline du layout (pattern hydration-safe).
        /* eslint-disable react-hooks/set-state-in-effect */
        setDark(document.documentElement.classList.contains("dark"));
        setMounted(true);
        /* eslint-enable react-hooks/set-state-in-effect */
    }, []);

    function toggle() {
        const next = !dark;
        setDark(next);
        const root = document.documentElement;
        if (next) {
            root.classList.add("dark");
            try { localStorage.setItem("theme", "dark"); } catch (e) { /* ignore */ }
        } else {
            root.classList.remove("dark");
            try { localStorage.setItem("theme", "light"); } catch (e) { /* ignore */ }
        }
    }

    return (
        <button
            onClick={toggle}
            aria-label={dark ? "Passer en mode clair" : "Passer en mode sombre"}
            title={dark ? "Mode clair" : "Mode sombre"}
            className="rounded-md p-2 text-slate-500 transition hover:bg-white hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
        >
            {mounted && dark ? <IconSun /> : <IconMoon />}
        </button>
    );
}
