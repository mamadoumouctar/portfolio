import React from "react";
import Link from "next/link";

/* ----------------------------- Données du CV ----------------------------- */

const profile = {
  name: "Mamadou Mouctar Diallo",
  role: "Développeur logiciel · Étudiant en informatique",
  location: "Québec, Canada",
  pitch:
    "Étudiant en 5e session du Baccalauréat en informatique à l'Université Laval, avec plus de 7 ans de pratique du développement logiciel, dont près de 2 ans en contexte professionnel. Passionné par le développement web et l'intégration de solutions technologiques, avec une solide maîtrise des pratiques DevOps et des méthodes Agile. Autonome et orienté qualité, je cherche un stage où contribuer concrètement dans un environnement collaboratif et innovant.",
  email: "mamadou@mouctar.dev",
  phone: "581-308-0611",
  github: "https://github.com/mamadoumouctar",
  linkedin: "https://linkedin.com/in/mamadoumouctar",
};

const skills: { group: string; items: string[] }[] = [
  { group: "Développement web", items: ["JavaScript", "React", "HTML", "CSS", "PWA", "Node.js"] },
  { group: "Langages back-end", items: ["Java", "PHP", "Python"] },
  { group: "Frameworks", items: ["Symfony", "Laravel", "Django", "Express"] },
  { group: "API & authentification", items: ["REST", "Swagger", "OAuth 2.0", "OpenID", "SAML"] },
  { group: "DevOps & Agile", items: ["Docker", "Git", "GitHub", "GitLab", "CI/CD", "Ansible", "Jira", "Scrum"] },
  { group: "Bases de données", items: ["MySQL", "PostgreSQL", "Oracle"] },
  { group: "Systèmes", items: ["Linux", "Windows", "Apache", "Nginx", "VirtualBox", "VMware ESXi"] },
];

const experiences = [
  {
    role: "Développeur et concepteur logiciel",
    company: "Danewell SOLUTIONS",
    place: "Dakar, Sénégal",
    period: "nov. 2022 – juil. 2023",
    points: [
      "Développement et intégration des systèmes de paiement mobile money (Orange Money, Wave) au contrôleur UCOPIA (WebLib) : architecture, backend, tests et déploiement.",
      "Coordination de l'équipe de développement via Jira en mode Agile : définition des tâches, sprints et revue de code.",
      "Rédaction et exécution des plans de test pour valider les versions 6.0.12 et 7.0.1 du logiciel UCOPIA.",
    ],
  },
  {
    role: "Stage en développement informatique",
    company: "DSM–DISI · Université Cheikh Anta Diop",
    place: "Dakar, Sénégal",
    period: "juin 2022 – oct. 2022",
    points: [
      "Conception et développement d'un système de contrôle d'accès : authentification, identification par carte, communication avec les sources de données.",
      "Livraison de la solution dans différents environnements en collaboration avec les équipes IT.",
    ],
  },
  {
    role: "Collaborateur de projets informatiques",
    company: "Junior Entreprise Polytechnique",
    place: "Dakar, Sénégal",
    period: "mai 2021 – avr. 2022",
    points: [
      "Conception, développement et déploiement d'applications web de gestion de données pour des clients multisectoriels.",
    ],
  },
];

const projects = [
  {
    slug: "stockflow",
    name: "StockFlow",
    tagline: "Système de gestion de stock multi-points",
    context: "Projet personnel · Déployé en production",
    period: "2026",
    points: [
      "Application de gestion de stock multi-points : produits, stock, transferts entre points de vente, ventes et retours.",
      "API Express + PostgreSQL conteneurisée avec Docker sur un VPS Hostinger, derrière Nginx Proxy Manager avec Authelia en forward auth (authentification et autorisation centralisées).",
    ],
    tags: ["Express", "PostgreSQL", "Docker", "Authelia", "Nginx Proxy Manager"],
    link: "",
    demo: "https://stockflow.mouctar.dev",
  },
  {
    slug: "ugram",
    name: "uGram",
    tagline: "Réseau social de partage de photos inspiré d'Instagram",
    context: "Développement Web Avancé, Université Laval · Équipe de 5",
    period: "hiver 2026",
    points: [
      "Réseau social full-stack : publication de photos, réactions, commentaires, notifications et chat en temps réel (Socket.io).",
      "Architecture hybride AWS (front-end S3, back-end Elastic Beanstalk), sécurité (Zod, Helmet, rate limiting) et observabilité (Sentry, CloudWatch, GA4).",
    ],
    tags: ["React", "Express", "Prisma", "PostgreSQL", "Socket.io", "AWS"],
    link: "",
    demo: "https://ugram.i-maths.net",
  },
  {
    slug: "floppa",
    name: "Floppa",
    tagline: "Marketplace de vente de produits, axée qualité logicielle",
    context: "Projet de session — GLO-2003, Université Laval · Équipe de 5",
    period: "hiver 2026",
    points: [
      "API REST Java 21 (Jersey) mettant en relation vendeurs et acheteurs, avec persistance configurable (in-memory ou MongoDB).",
      "Démarche qualité complète : GitHub Actions, quality gate SonarCloud, couverture de code, OWASP Dependency Check et pratiques Agile.",
    ],
    tags: ["Java 21", "Jersey", "MongoDB", "GitHub Actions", "SonarCloud"],
    link: "https://github.com/Floppa-H26-Team23/floppa",
    demo: "",
  },
  {
    slug: "heatmyfloor",
    name: "HeatMyFloor",
    tagline: "Logiciel de modélisation de plancher chauffant",
    context: "Projet de session — IFT-2007, Université Laval · Équipe de 5",
    period: "automne 2025",
    points: [
      "Application Java 21 (Swing) pour modéliser une pièce et planifier l'installation d'un fil chauffant selon des contraintes physiques réglementaires.",
      "Algorithme de recherche de chemin en serpentin dans un graphe d'intersections, avec validation des contraintes en temps réel.",
      "Fonctionnalités avancées : undo/redo illimité, zoom dynamique, export PNG, sauvegarde/chargement. Conception UML.",
    ],
    tags: ["Java 21", "Swing", "Algorithmes", "UML"],
    link: "",
    demo: "",
  },
];

const languages = [
  { name: "Français", level: "Courant", note: "Langue de travail quotidienne" },
  { name: "Anglais", level: "Intermédiaire", note: "Documentation technique, rédaction et communication fonctionnelles" },
];

/* -------------------------------- Icônes --------------------------------- */

function IconGitHub({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.42.36.8 1.08.8 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}
function IconLinkedIn({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}
function IconMail({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
function IconPhone({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}
function IconPin({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function IconArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
function IconExternal({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 5h5v5M19 5l-9 9M12 5H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5" />
    </svg>
  );
}

/* ------------------------------- Composants ------------------------------- */

function SectionTitle({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">{label}</p>
      <h2 className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl">{children}</h2>
    </div>
  );
}

/* --------------------------------- Page ---------------------------------- */

export default function Home() {
  return (
    <main className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
      {/* HERO / PROFIL */}
      <section id="profile" className="scroll-mt-24 pb-16 pt-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Disponible pour un stage
        </div>
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
          <a href={`tel:${profile.phone.replace(/[^0-9+]/g, "")}`} className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 transition hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600">
            <IconPhone className="h-4 w-4 text-emerald-600 dark:text-emerald-400" /> {profile.phone}
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
