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
        {/* Left-side social icons */}
        <div className="fixed left-8 bottom-0 flex flex-col items-center z-50">
          <a
            href="https://github.com/subhascodes"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6 text-gray-400 hover:text-yellow-400 transition-colors duration-300 p-2"
            aria-label="GitHub"
          >
            {/* GitHub SVG */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.867 8.187 6.839 9.504.5.09.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.153-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.56 9.56 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.849-2.337 4.695-4.566 4.944.359.309.678.919.678 1.853 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.479C19.134 20.205 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/subhasmitasahu260705"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6 text-gray-400 hover:text-yellow-400 transition-colors duration-300 p-2"
            aria-label="LinkedIn"
          >
            {/* LinkedIn SVG */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.291c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.291h-3v-4.604c0-1.098-.021-2.513-1.532-2.513-1.534 0-1.768 1.197-1.768 2.432v4.685h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.562 2.838-1.562 3.033 0 3.593 1.997 3.593 4.591v4.738z"/>
            </svg>
          </a>
          <a
            href="https://instagram.com/sneha.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6 text-gray-400 hover:text-yellow-400 transition-colors duration-300 p-2"
            aria-label="Instagram"
          >
            {/* Instagram SVG */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.337 3.608 1.312.974.974 1.25 2.242 1.312 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.337 2.633-1.312 3.608-.974.974-2.242 1.25-3.608 1.312-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.337-3.608-1.312-.974-.974-1.25-2.242-1.312-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.337-2.633 1.312-3.608.974-.974 2.242-1.25 3.608-1.312C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.665.414 3.678 1.4c-.987.987-1.27 2.093-1.329 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.281.342 2.387 1.329 3.374.987.987 2.093 1.27 3.374 1.329C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.387-.342 3.374-1.329.987-.987 1.27-2.093 1.329-3.374.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.059-1.281-.342-2.387-1.329-3.374-.987-.987-2.093-1.27-3.374-1.329C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.2-10.406a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
            </svg>
          </a>
          <a
  href="https://x.com/kyasamjhein"
  target="_blank"
  rel="noopener noreferrer"
  className="mb-6 text-gray-400 hover:text-yellow-400 transition-colors duration-300 p-2"
  aria-label="X"
>
  {/* X (Twitter) SVG */}
  <svg className="w-6 h-6" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.89 14.32L27.34 5.33h-2.22l-7.36 8.12-5.85-8.12H4.66l8.79 12.22-8.79 9.67h2.22l7.8-8.6 6.2 8.6h7.25l-9.03-12.9zm-2.76 3.06l-.9-1.25-7.19-9.99h2.22l5.78 8.03.9 1.25 7.45 10.36h-2.22l-6.04-8.4z"/>
  </svg>
</a>

          <div className="w-px h-32 bg-yellow-400 mt-0"></div>
        </div>
        {/* Vertical email/line starts here */}
        <div className="fixed right-8 bottom-0 flex flex-col items-center z-50 group">
          <a
            href="mailto:subhasmitas188@gmail.com"
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


