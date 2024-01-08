"use client"


import Link from "next/link"
import { usePathname } from "next/navigation"
import '../style.css'

export default function RootLayout({ children }) {

  const navLinks = [
    { name: 'About', link: '/about' },
    { name: 'Product', link: '/product' }
  ]

  const pathName = usePathname();

  return (
    <html lang="en">
      <body>
        <header>
          <ul>
            {navLinks.map((navLink, index) => {
              const isActive = pathName.startsWith(navLink.link);
              return (
                <li key={index}> <Link className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'} href={navLink.link}>{navLink.name}</Link> </li>
              )
            })}
          </ul>
        </header>
        {children}</body>
    </html>
  )
}
