import type { Metadata } from 'next';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'PokeNext',
  description: 'My PokeNext aplication',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <body>
        <Navbar />
        <main className='main-container'> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
