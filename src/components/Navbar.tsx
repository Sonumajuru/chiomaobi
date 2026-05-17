'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useApp } from '@/lib/AppContext';

const links = [
  { href: '/', label: 'Home', id: 'home' },
  { href: '/about', label: 'About Us' },
  { href: '/courses', label: 'Courses' },
  { href: '/placement', label: 'Job Placement' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { openEnroll } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="nav-inner">
        <Link href="/" className="logo">
          Tech<span>Bloom</span>
        </Link>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={pathname === l.href ? 'active' : ''}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a className="nav-cta" onClick={openEnroll} style={{ cursor: 'pointer' }}>
              Enroll Now
            </a>
          </li>
        </ul>

        <button className="hamburger" onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </Link>
        ))}
        <a onClick={() => { openEnroll(); setMenuOpen(false); }} style={{ cursor: 'pointer' }}>
          Enroll Now
        </a>
      </div>
    </nav>
  );
}
