// Imports 
import localFont from "next/font/local"
import "./globals.css"

// Import components
import Navbar from '@/components/navbar/Navbar' 
import Footer from '@/components/footer/Footer' 

const generalSans = localFont({
  src: "./fonts/GeneralSans-Regular.woff2",
  variable: "--font-general-sans",
  weight: "400",
  subsets: ['latin'],
  display: "swap",
})

export const metadata = {
  title: "Artem Kysylov",
  description: "UI/UX Design, Web development, Digital products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={generalSans.className}>
        <div className='wrapper'>
          <Navbar/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
