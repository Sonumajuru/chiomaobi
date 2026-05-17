import { AppProvider } from '@/lib/AppContext';
import './globals.css';
import Navbar from '@/components/Navbar';
import EnrollModal from '@/components/EnrollModal';
import Toast from '@/components/Toast';
import Link from 'next/link';

export const metadata = {
  title: 'Tech Bloom Limited | Digital Skills Training',
  description: 'Equipping Nigerians with in-demand digital skills.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <AppProvider>
          <Navbar />
          <main>{children}</main>

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
          <EnrollModal />
          {/* Note: Create Toast.tsx similar to EnrollModal using toast context */}
        </AppProvider>
      </body>
    </html>
  )
}
