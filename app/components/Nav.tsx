"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="font-display text-sm uppercase tracking-wider border-b border-line">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? "text-accent"
                  : "text-ink hover:text-accent transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-3 text-muted text-xs">
          <a
            href="https://t.me/asadbektillayevv"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            Telegram
          </a>
          <a
            href="https://linkedin.com/in/asadbek-tillayev-7540ab329"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
}
