import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/lib/AppContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EnrollModal from '@/components/EnrollModal';
import Toast from '@/components/Toast';

export const metadata: Metadata = {
  title: 'Tech Bloom Limited | Digital Skills Training & Job Placement',
  description:
    'Tech Bloom Limited equips Nigerians with in-demand digital skills and connects graduates with employers. Based in Port Harcourt, Rivers State.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
  );
}
