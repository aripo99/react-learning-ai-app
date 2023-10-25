import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ['latin'] })

export const runtime = 'edge';

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
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
