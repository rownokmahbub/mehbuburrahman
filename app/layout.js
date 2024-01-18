import './globals.css'
import { Providers } from './Providers'



export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>

      <body className="main-light dark:main-dark">
        <main className='light'>
          <Providers>
           
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
