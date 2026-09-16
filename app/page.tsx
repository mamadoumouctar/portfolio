import React from "react";
import Link from "next/link";
import {profile, experiences, skills, languages, projects} from "../data";
import IconArrow from "@/components/icons/IconArrow";
import IconExternal from "@/components/icons/IconExternal";
import IconGitHub from "@/components/icons/IconGitHub";
import IconLinkedIn from "@/components/icons/IconLinkedIn";
import IconMail from "@/components/icons/IconMail";
import IconPhone from "@/components/icons/IconPhone";
import IconPin from "@/components/icons/IconPin";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  return (
    <main className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
      {/* HERO / PROFIL */}
      <section id="profile" className="scroll-mt-24 pb-16 pt-6">
        {/*<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Disponible pour un stage
        </div>*/}
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-lg font-medium text-emerald-700 dark:text-emerald-400">{profile.role}</p>
        <p className="mt-5 max-w-2xl text-slate-600 dark:text-slate-300">{profile.pitch}</p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href="#project"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
          >
            Voir mes projets <IconArrow className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-white dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-900"
          >
            Me contacter
          </a>
          <div className="ml-auto flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-lg p-2 transition hover:bg-white hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100">
              <IconGitHub className="h-5 w-5" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-lg p-2 transition hover:bg-white hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100">
              <IconLinkedIn className="h-5 w-5" />
            </a>
          </div>
        </div>

        <p className="mt-6 inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
          <IconPin className="h-4 w-4" /> {profile.location}
        </p>
      </section>

      {/* COMPÉTENCES */}
      <section className="scroll-mt-24 border-t border-slate-200 py-16 dark:border-slate-800">
        <SectionTitle label="Stack technique">Compétences</SectionTitle>
        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.group}>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{s.group}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span key={i} className="rounded-md bg-white px-2.5 py-1 text-sm text-slate-600 ring-1 ring-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-700">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPÉRIENCE */}
      <section id="work" className="scroll-mt-24 border-t border-slate-200 py-16 dark:border-slate-800">
        <SectionTitle label="Parcours professionnel">Expérience</SectionTitle>
        <div className="space-y-10">
          {experiences.map((e) => (
            <div key={e.role} className="relative border-l border-slate-200 pl-6 dark:border-slate-800">
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{e.role}</h3>
                <span className="text-sm text-slate-500 dark:text-slate-400">{e.period}</span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                {e.company} · <span className="font-normal text-slate-500 dark:text-slate-400">{e.place}</span>
              </p>
              <ul className="mt-3 space-y-1.5">
                {e.points.map((p, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400 dark:bg-slate-600" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROJETS */}
      <section id="project" className="scroll-mt-24 border-t border-slate-200 py-16 dark:border-slate-800">
        <SectionTitle label="Réalisations">Projets</SectionTitle>
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((p) => (
            <article key={p.name} className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 transition hover:border-emerald-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-800">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  <Link href={`/projects/${p.slug}`} className="transition hover:text-emerald-700 dark:hover:text-emerald-400">
                    {p.name}
                  </Link>
                </h3>
                <span className="text-xs text-slate-400 dark:text-slate-500">{p.period}</span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-emerald-700 dark:text-emerald-400">{p.tagline}</p>
              <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">{p.context}</p>
              <ul className="mt-3 flex-1 space-y-1.5">
                {p.points.map((pt, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400 dark:bg-slate-600" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
                <Link
                  href={`/projects/${p.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 transition group-hover:text-emerald-700 dark:text-slate-100 dark:group-hover:text-emerald-400"
                >
                  Voir le détail <IconArrow className="h-4 w-4" />
                </Link>
                <div className="flex items-center gap-3 text-slate-400 dark:text-slate-500">
                  {p.demo ? (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300">
                      Démo <IconExternal className="h-3.5 w-3.5" />
                    </a>
                  ) : null}
                  {p.link ? (
                    <a href={p.link} target="_blank" rel="noreferrer" aria-label="Code source" className="transition hover:text-slate-900 dark:hover:text-slate-100">
                      <IconGitHub className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* LANGUES */}
      <section className="scroll-mt-24 border-t border-slate-200 py-16 dark:border-slate-800">
        <SectionTitle label="Communication">Langues</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2">
          {languages.map((l) => (
            <div key={l.name} className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-baseline justify-between">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">{l.name}</h3>
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">{l.level}</span>
              </div>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{l.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 border-t border-slate-200 py-16 dark:border-slate-800">
        <SectionTitle label="Restons en contact">Contact</SectionTitle>
        <p className="max-w-xl text-slate-600 dark:text-slate-300">
          {"Une opportunité de stage, une question ou un projet ? N'hésitez pas à me joindre directement."}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 transition hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600">
            <IconMail className="h-4 w-4 text-emerald-600 dark:text-emerald-400" /> {profile.email}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 transition hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600">
            <IconLinkedIn className="h-4 w-4 text-emerald-600 dark:text-emerald-400" /> LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 transition hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600">
            <IconGitHub className="h-4 w-4 text-emerald-600 dark:text-emerald-400" /> GitHub
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8 text-sm text-slate-400 dark:border-slate-800 dark:text-slate-500">
        © {new Date().getFullYear()} {profile.name}. Construit avec Next.js et Tailwind CSS.
      </footer>
    </main>
  );
}
