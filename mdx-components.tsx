import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import React from 'react'

// Applique un style Tailwind cohérent au contenu MDX (App Router), clair et sombre.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <article className="py-12">
        <Link
          href="/#project"
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
        >
          ← Retour aux projets
        </Link>
        <div className="space-y-4">{children}</div>
      </article>
    ),
    h1: (p) => <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl" {...p} />,
    h2: (p) => <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-slate-100" {...p} />,
    h3: (p) => <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-slate-100" {...p} />,
    p: (p) => <p className="leading-relaxed text-slate-600 dark:text-slate-300" {...p} />,
    ul: (p) => <ul className="list-disc space-y-1.5 pl-5 text-slate-600 marker:text-emerald-500 dark:text-slate-300" {...p} />,
    ol: (p) => <ol className="list-decimal space-y-1.5 pl-5 text-slate-600 dark:text-slate-300" {...p} />,
    li: (p) => <li className="pl-1" {...p} />,
    a: (p) => <a className="font-medium text-emerald-700 underline underline-offset-2 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300" {...p} />,
    strong: (p) => <strong className="font-semibold text-slate-900 dark:text-slate-100" {...p} />,
    code: (p) => <code className="rounded bg-slate-100 px-1.5 py-0.5 text-[0.85em] text-slate-800 dark:bg-slate-800 dark:text-slate-200" {...p} />,
    pre: (p) => (
      <pre
        className="overflow-x-auto rounded-lg border border-slate-800 bg-slate-900 p-4 text-sm leading-relaxed text-slate-100 [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-inherit"
        {...p}
      />
    ),
    hr: () => <hr className="my-8 border-slate-200 dark:border-slate-800" />,
    blockquote: (p) => <blockquote className="border-l-2 border-emerald-300 pl-4 italic text-slate-500 dark:border-emerald-700 dark:text-slate-400" {...p} />,
    ...components,
  }
}
