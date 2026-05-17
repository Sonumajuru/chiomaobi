import { AppProvider } from '@/lib/AppContext';
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
      <body>
        <AppProvider>
          <nav>
            <div className="nav-inner">
              <Link href="/" className="logo">Tech<span>Bloom</span></Link>
              <ul className="nav-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/courses">Courses</Link></li>
                <li><Link href="/placement">Job Placement</Link></li>
                <li className="nav-cta">Enroll Now</li>
              </ul>
            </div>
          </nav>
          
          <main>{children}</main>

          <footer>
            <div className="footer-inner">
              <p>© 2025 Tech Bloom Limited. Port Harcourt, Nigeria</p>
            </div>
          </footer>
        </AppProvider>
      </body>
    </html>
  )
}
