"use client";

export default function SectionTitle({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">{label}</p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl">{children}</h2>
        </div>
    );
}