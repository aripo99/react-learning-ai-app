import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { use } from 'react';
import Providers from "@/components/Providers";
import AuthChangeListener from '@/components/AuthChangeListener';
import UserSessionProvider from "@/components/UserSessionProvider";
import loadSession from "@/lib/load-session";

const inter = Inter({ subsets: ['latin'] })

// export const runtime = 'edge';

// this is needed to force dynamic runtime
export const dynamic = 'force-dynamic';

// Update the metadata here
export const metadata: Metadata = {
  title: 'Learn React with AI',
  description: 'Learn react with AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = use(loadSession());

  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <AuthChangeListener session={session}>
          <UserSessionProvider session={session}>
            <Providers>{children}</Providers>
          </UserSessionProvider>
        </AuthChangeListener>
      </body>
    </html>
  )
}
