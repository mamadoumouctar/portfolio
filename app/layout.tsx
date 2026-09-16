import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react";
import "./global.css"
import NavBar from "../components/NavBar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mamadou Mouctar Diallo — Développeur logiciel',
  description:
    "Portfolio de Mamadou Mouctar Diallo, développeur logiciel et étudiant en informatique à l'Université Laval. Développement web, DevOps et méthodes Agile.",
}

// Applique le thème avant le premier rendu pour éviter tout flash (FOUC).
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.className} min-h-screen bg-slate-50 antialiased transition-colors dark:bg-slate-950`}>
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  )
}
