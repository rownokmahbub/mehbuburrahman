import './globals.css'
import { Providers } from './Providers'
import { Manrope } from 'next/font/google'
const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
})
 

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.className} >

      <body className="main-light dark:main-dark" >
      
        <main className='light'>
          <Providers>
           
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
