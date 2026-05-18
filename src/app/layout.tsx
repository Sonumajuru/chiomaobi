import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/lib/AppContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EnrollModal from '@/components/EnrollModal';
import Toast from '@/components/Toast';

export const metadata: Metadata = {
  title: 'Tech Bloom Limited | Digital Skills Training & Job Placement',
  description: 'Tech Bloom Limited equips Nigerians with in-demand digital skills and connects graduates with employers. Based in Port Harcourt, Rivers State.',
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
          <Footer />
          <EnrollModal />
          <Toast />
        </AppProvider>
      </body>
    </html>
  )
}
