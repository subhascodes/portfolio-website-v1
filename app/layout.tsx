import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {/* Vertical email/line starts here */}
        <div className="fixed right-8 bottom-0 flex flex-col items-center z-50 group">
          <a
            href="mailto:yourmail@example.com"
            className="mb-4 text-yellow-400 hover:text-gray-400 transition-colors duration-300 text-xs tracking-widest vertical-email"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed", letterSpacing: "0.2em" }}
          >
            subhasmitas188@gmail.com
          </a>
          <div className="w-px h-32 bg-yellow-400 group-hover:bg-gray-400 transition-colors duration-300"></div>
        </div>
        {/* Main page content */}
        {children}
      </body>
    </html>
  )
}


