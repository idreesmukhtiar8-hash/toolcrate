import type { ReactNode } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { defaultSEO } from "@/config/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata = defaultSEO;

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-custom flex min-h-16 items-center justify-between gap-4">
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-slate-900">
          Tool<span className="text-blue-600">Crate</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-600 hover:text-blue-600">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/tools" className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
          Browse Tools
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <div className="container-custom grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="text-xl font-extrabold text-slate-900">
            Tool<span className="text-blue-600">Crate</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-6 text-slate-600">{siteConfig.description}</p>
        </div>
        {siteConfig.footerNavigation.map((group) => (
          <div key={group.title}>
            <h2 className="font-semibold text-slate-900">{group.title}</h2>
            <ul className="mt-4 space-y-2">
              {group.links.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-600 hover:text-blue-600">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-200 py-5">
        <div className="container-custom flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-blue-600">{siteConfig.email}</a>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
