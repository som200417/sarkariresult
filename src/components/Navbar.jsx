"use client";

import Link from "next/link";
import { useRouter ,usePathname } from "next/navigation";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  /* =====================
     SEARCH SUBMIT
  ===================== */
  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    router.push(`/search?q=${encodeURIComponent(query)}`);
    setResults([]);
    setQuery("");
    setSearchOpen(false);
  };

  /* =====================
     LIVE SEARCH
  ===================== */
  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(true);

      fetch(
        `https://api.sarkariresult6.com/wp-json/wp/v2/search?search=${query}&per_page=8`
      )
        .then((res) => res.json())
        .then((data) => {
          setResults(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <header className="site-container rounded-md">

      {/* 🔴 RED HEADER */}
      <div className="bg-red-700 text-white text-center py-8 md:py-12">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-wide">
          SARKARI RESULT
        </h1>
        <p className="text-xs md:text-base font-semibold mt-1">
          SarkariResult6.com
        </p>
      </div>

      {/* 🔵 BLUE NAVBAR */}
      <div className="bg-blue-900">

        <div className="flex items-center justify-between px-4 py-2">

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex text-white text-sm lg:text-base font-semibold">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/latest-jobs">Latest Jobs</NavItem>
            <NavItem href="/results">Results</NavItem>
            <NavItem href="/admit-card">Admit Card</NavItem>
            <NavItem href="/answer-key">Answer Key</NavItem>
            <NavItem href="/document">Documents</NavItem>
            <NavItem href="/admission">Admission</NavItem>
          </ul>

          {/* DESKTOP SEARCH */}
          <div className="hidden lg:block relative w-64">
            <form onSubmit={handleSearch}>
<input
  type="text"
  placeholder="Search..."
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  className="w-full px-3 py-1 text-sm rounded outline-none bg-white text-black placeholder-gray-500"/>
            </form>

            {query.length >= 2 && (
              <SearchDropdown loading={loading} results={results} />
            )}
          </div>

          {/* MOBILE CONTROLS */}
          <div className="flex items-center justify-between w-full lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl p-2"
            >
              ☰
            </button>

            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-white text-xl p-2"
            >
              🔍
            </button>
          </div>
        </div>

        {/* MOBILE SEARCH */}
        {searchOpen && (
          <div className="lg:hidden px-4 pb-3">
            <form onSubmit={handleSearch}>
           <input
  type="text"
  placeholder="Search..."
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  className="w-full px-3 py-2 text-sm rounded outline-none bg-white text-black placeholder-gray-500"/>
            </form>

            {query.length >= 2 && (
              <SearchDropdown loading={loading} results={results} />
            )}
          </div>
        )}

        {/* MOBILE MENU */}
        {menuOpen && (
          <ul className="lg:hidden border-t border-blue-800 text-white text-sm font-semibold">
            <MobileNavItem href="/" onClick={() => setMenuOpen(false)}>Home</MobileNavItem>
            <MobileNavItem href="/latest-jobs" onClick={() => setMenuOpen(false)}>Latest Jobs</MobileNavItem>
            <MobileNavItem href="/results" onClick={() => setMenuOpen(false)}>Results</MobileNavItem>
            <MobileNavItem href="/admit-card" onClick={() => setMenuOpen(false)}>Admit Card</MobileNavItem>
            <MobileNavItem href="/answer-key" onClick={() => setMenuOpen(false)}>Answer Key</MobileNavItem>
            <MobileNavItem href="/document" onClick={() => setMenuOpen(false)}>Documents</MobileNavItem>
            <MobileNavItem href="/admission" onClick={() => setMenuOpen(false)}>Admission</MobileNavItem>
          </ul>
        )}
      </div>
    </header>
  );
}

/* =====================
   SEARCH DROPDOWN
===================== */
function SearchDropdown({ loading, results }) {

  const mapRoute = (type, slug) => {
    switch (type) {
      case "jobs":
        return `/latest-jobs/${slug}`;
      case "admit-card":
        return `/admit-card/${slug}`;
      case "answer_keys":
        return `/answer-key/${slug}`;
      case "documents":
        return `/document/${slug}`;
      case "admissions":
        return `/admission/${slug}`;
      case "results":
        return `/results/${slug}`;
      default:
        return "/";
    }
  };

  const extractSlug = (url) => {
    if (!url) return "";
    const parts = url.split("/").filter(Boolean);
    return parts[parts.length - 1];
  };

  return (
    <div className="absolute left-0 top-full mt-1 w-full bg-white border shadow-lg z-50 max-h-72 overflow-auto rounded">

      {loading && (
        <div className="p-2 text-sm text-gray-500">Searching...</div>
      )}

      {!loading && results.length === 0 && (
        <div className="p-2 text-sm text-gray-500">No result found</div>
      )}

      {results.map((item) => {
        const slug = extractSlug(item.url);
        const path = mapRoute(item.subtype, slug);

        return (
          <Link
            key={item.id}
            href={path}
            className="block px-3 py-2 text-sm border-b hover:bg-gray-100"
          >
            <div className="font-semibold text-gray-800">
              {item.title}
            </div>
            <div className="text-xs text-gray-500">
              {item.subtype}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

/* =====================
   NAV ITEMS
===================== */
function NavItem({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={`block px-4 py-3 transition
          ${isActive ? "bg-blue-950 text-black-300" : "hover:bg-blue-800"}
        `}
      >
        {children}
      </Link>
    </li>
  );
}




function MobileNavItem({ href, children, onClick }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className={`block px-4 py-3 transition
          ${isActive ? "bg-blue-950 text-black-300" : "hover:bg-blue-800"}
        `}
      >
        {children}
      </Link>
    </li>
  );
}