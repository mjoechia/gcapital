import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export const metadata: Metadata = { title: {default:'G Capital Resource | Building Value. Creating Opportunities.',template:'%s | G Capital Resource'}, description:'G Capital Resource Pte. Ltd. — investments, trading and mergers & acquisitions.', metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||'https://example.com'), openGraph:{title:'G Capital Resource',description:'Building Value. Creating Opportunities.',type:'website'} };
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/></body></html>}
