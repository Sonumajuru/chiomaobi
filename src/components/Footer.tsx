import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo" style={{ fontSize: '1.4rem', marginBottom: '0.5rem', display: 'inline-flex' }}>
              Tech<span>Bloom</span>
            </Link>
            <p>Equipping Nigerians with in-demand digital skills and connecting graduates with top employers across the country.</p>
            <div className="footer-socials">
              <a href="https://www.facebook.com/share/1Ec2zKxjS6/" target="_blank" rel="noreferrer" className="social-btn social-fb" title="Facebook">f</a>
              <a href="https://www.linkedin.com/in/chiomaruth-obi" target="_blank" rel="noreferrer" className="social-btn social-li" title="LinkedIn">in</a>
              <a href="mailto:techbloomltd@gmail.com" className="social-btn social-em" title="Email">✉</a>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/courses">All Courses</Link></li>
              <li><Link href="/placement">Job Placement</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Our Courses</h4>
            <ul className="footer-links">
              <li><Link href="/courses">ChatGPT + Prompting</Link></li>
              <li><Link href="/courses">Gemini AI</Link></li>
              <li><Link href="/courses">Canva Pro</Link></li>
              <li><Link href="/courses">Notion</Link></li>
              <li><Link href="/courses">ClickUp</Link></li>
              <li><Link href="/courses">Zapier & Make</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul className="footer-links">
              <li><a href="mailto:techbloomltd@gmail.com">techbloomltd@gmail.com</a></li>
              <li><a href="https://www.facebook.com/share/1Ec2zKxjS6/" target="_blank" rel="noreferrer">Facebook Page</a></li>
              <li><a href="https://www.linkedin.com/in/chiomaruth-obi" target="_blank" rel="noreferrer">LinkedIn Profile</a></li>
              <li><a>Port Harcourt, Rivers State</a></li>
              <li><a>Mon–Sat: 8AM – 6PM</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Tech Bloom Limited. All rights reserved. | Port Harcourt, Nigeria</p>
          <p style={{ color: 'rgba(255,255,255,.35)' }}>Empowering Africa&apos;s Digital Future 🌍</p>
        </div>
      </div>
    </footer>
  );
}
