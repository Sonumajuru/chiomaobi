'use client';

import Link from 'next/link';
import { useApp } from '@/lib/AppContext';
import { useState } from 'react';

export default function Navbar() {
  const { openEnroll } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="nav-inner">
        <Link href="/" className="logo">Tech<span>Bloom</span></Link>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/courses">Courses</Link></li>
          <li><Link href="/placement">Job Placement</Link></li>
          <li><button onClick={openEnroll} className="nav-cta" style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>Enroll Now</button></li>
        </ul>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </div>
      </div>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/courses" onClick={() => setMenuOpen(false)}>Courses</Link>
        <Link href="/placement" onClick={() => setMenuOpen(false)}>Job Placement</Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <a onClick={() => { openEnroll(); setMenuOpen(false); }}>Enroll Now</a>
      </div>
    </nav>
  );
}