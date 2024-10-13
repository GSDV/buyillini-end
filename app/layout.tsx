

import type { Metadata } from 'next';
import Link from 'next/link';
import { IBM_Plex_Sans } from 'next/font/google';

import '@styles/global.css';


const ibm_plex_sans = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700']
});



export const metadata: Metadata = {
    title: 'BuyIllini',
    description: 'The best online marketplace for University of Illinois students!',
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={ibm_plex_sans.className} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Navbar />
                    {children}
                <Footer />
            </body>
        </html>
    );
}



function Navbar() {
    return (
        <div style={{ padding: '5px 10px', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '15px', backgroundColor: '#ff7936' }}>
            <Link href='/'>
                <img alt='logo' src={'/logo.png'} width='50' height='50'  />
            </Link>
        </div>
    );
}



function Footer() {
    return (
        <div style={{ padding: '5px', width: '100%', backgroundColor: '#c9c9c9' }}>
            <h4 style={{ color: '#1c1c1c', textAlign: 'center', fontWeight: 300, fontSize: 'min(3vw, 1.1em)' }}>This site is not affiliated with the University of Illinois.</h4>
            <h5 style={{ color: '#1c1c1c', textAlign: 'center', fontWeight: 300, fontSize: 'min(2.5vw, 0.9em)' }}>By using BuyIllini, you agree to the <Link href='/terms-and-conditions/' target='_blank'>Terms and Conditions</Link> and the <a href='/privacy-policy/' target='_blank'>Privacy Policy</a>.</h5>
        </div>
    );
}