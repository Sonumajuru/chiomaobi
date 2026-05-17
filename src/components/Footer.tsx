import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">Tech<span>Bloom</span></div>
            <p>Equipping Nigerians with in-demand digital skills and connecting graduates with top employers.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/courses">Courses</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul className="footer-links">
              <li>techbloomltd@gmail.com</li>
              <li>Port Harcourt, Nigeria</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Tech Bloom Limited. All rights reserved.</p>
          <p>Port Harcourt, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}