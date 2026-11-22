import Link from "next/link";

const categories = [
  { name: "Image Tools", description: "Resize, compress and convert images.", tools: ["Image Compressor", "Image Resizer", "Image Converter"] },
  { name: "PDF Tools", description: "Manage your PDF documents easily.", tools: ["PDF Merger", "PDF Splitter", "PDF Compressor"] },
  { name: "Text Tools", description: "Useful tools for everyday text tasks.", tools: ["Word Counter", "Character Counter", "Case Converter"] },
  { name: "SEO Tools", description: "Helpful tools for website owners.", tools: ["Meta Tag Generator", "Keyword Counter", "Robots.txt Generator"] },
  { name: "Developer Tools", description: "Simple utilities for developers.", tools: ["JSON Formatter", "Base64 Encoder", "URL Encoder"] },
  { name: "Calculators", description: "Quick and easy online calculations.", tools: ["Percentage Calculator", "Age Calculator", "Discount Calculator"] },
];

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-xl font-bold text-cyan-400">ToolCrate</Link>
        <section className="py-14 text-center">
          <p className="font-semibold uppercase tracking-widest text-cyan-400">Free Online Tools</p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Explore All Tools</h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Discover simple and useful online tools for images, PDFs, text, SEO and more.
          </p>
        </section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <section key={category.name} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-xl font-bold text-cyan-300">{category.name}</h2>
              <p className="mt-2 text-sm text-slate-400">{category.description}</p>
              <ul className="mt-5 space-y-3">
                {category.tools.map((tool) => (
                  <li key={tool} className="rounded-lg bg-slate-800 px-4 py-3 text-sm text-slate-200">
                    {tool}
                    <span className="float-right text-xs text-slate-500">Coming soon</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/" className="text-cyan-400 hover:underline">← Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
