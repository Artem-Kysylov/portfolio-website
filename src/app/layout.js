import localFont from "next/font/local"
import "./globals.css"

const generalSans = localFont({
  src: "./fonts/GeneralSans-Regular.woff",
  variable: "--font-general-sans",
  weight: "400",
})

export const metadata = {
  title: "Artem Kysylov",
  description: "UI/UX Design, Web development, Digital products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${generalSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
