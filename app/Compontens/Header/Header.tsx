import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white shadow">
      <nav className="flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          OpenTech
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6">
          <li>
            <Link href="/categories">Categories</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Call to Action */}
        <Link
          href="/support"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Support Me 💙
        </Link>

        {/* RESPONSIVE HAMBURGER BUTTON */}
        <div className="md:hidden">
          <GiHamburgerMenu />
        </div>
      </nav>
    </header>
  );
}
