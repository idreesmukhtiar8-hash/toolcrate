import Link from "next/link";
import { Search, Sparkles, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

const categories = [
  ["AI Tools", "Discover AI assistants for writing, research, and creativity.", "/ai-tools"],
  ["PDF Tools", "Work with PDF files using helpful online utilities.", "/category/pdf"],
  ["Image Tools", "Edit, resize, and optimize images online.", "/category/image"],
  ["Video Tools", "Find tools for video editing and content creation.", "/category/video"],
  ["Productivity", "Save time with practical everyday tools.", "/category/productivity"],
  ["Developer Tools", "Utilities for developers and technical workflows.", "/category/developer"]
];

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container-custom py-20 text-center sm:py-28">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-blue-700">
            <Sparkles size={16} /> Discover useful tools in one place
          </div>
          <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-6xl">
            Find the right online tool for <span className="text-gradient">every task</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Explore free and useful online tools for AI, creativity, productivity, documents, and more.
          </p>
          <form action="/search" className="mx-auto mt-9 flex max-w-2xl gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-soft">
            <label htmlFor="q" className="sr-only">Search tools</label>
            <input id="q" name="q" placeholder="Search tools, categories, or tasks..." className="min-w-0 flex-1 rounded-xl px-4 py-3 text-slate-900 outline-none" />
            <button type="submit" aria-label="Search" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
              <Search size={18} /><span className="hidden sm:inline">Search</span>
            </button>
          </form>
          <p className="mt-4 text-sm text-slate-500">Browse tools by category and discover alternatives.</p>
        </div>
      </section>

      <section className="container-custom section-padding">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Explore</p>
            <h2 className="section-title mt-2">Browse categories</h2>
            <p className="section-description">Start with a category and find tools that fit your needs.</p>
          </div>
          <Link href="/categories" className="inline-flex items-center gap-2 font-semibold text-blue-600">All categories <ArrowRight size={17} /></Link>
        </div>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(([name, description, href]) => (
            <Link key={name} href={href} className="card-base group p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600">{name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">Explore <ArrowRight size={16} /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container-custom section-padding text-center">
          <h2 className="section-title">A growing directory of useful tools</h2>
          <p className="section-description mx-auto">ToolCrate is being built to make it easier to discover online tools. Tool listings, editorial content, and additional features will be added as the directory grows.</p>
          <Link href="/tools" className="button-primary mt-7">Explore all tools</Link>
        </div>
      </section>
    </>
  );
}
