import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/Navbar'
import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
  title: 'StellStarter'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn('min-h-screen bg-background antialiased font-sansSerif')}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <Navbar />
          <main className='pt-16'>
            {children}
          </main>
          <Toaster richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
