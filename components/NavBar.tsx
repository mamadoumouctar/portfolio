import React from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navItems = [
    { title: "Profil", path: "#profile" },
    { title: "Expérience", path: "#work" },
    { title: "Projets", path: "#project" },
    { title: "Contact", path: "#contact" },
];

const IconGitHub = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
        <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.42.36.8 1.08.8 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
);

const IconLinkedIn = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
);

const NavBar = () => (
    <header className="sticky top-0 z-20 -mx-5 border-b border-slate-200 bg-slate-50/80 px-5 backdrop-blur transition-colors dark:border-slate-800 dark:bg-slate-950/80 sm:-mx-6 sm:px-6">
        <nav className="flex items-center justify-between py-4" id="nav">
            <Link href="#profile" className="text-sm font-bold tracking-tight text-slate-900 dark:text-slate-100">
                MMD<span className="text-emerald-600 dark:text-emerald-400">.</span>
            </Link>

            <div className="hidden items-center gap-1 sm:flex">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className="rounded-md px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                    >
                        {item.title}
                    </Link>
                ))}
            </div>

            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                <a
                    href="https://github.com/mamadoumouctar"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="rounded-md p-2 transition hover:bg-white hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                >
                    <IconGitHub />
                </a>
                <a
                    href="https://linkedin.com/in/mamadoumouctar"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="rounded-md p-2 transition hover:bg-white hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                >
                    <IconLinkedIn />
                </a>
                <ThemeToggle />
            </div>
        </nav>
    </header>
);

export default NavBar;
