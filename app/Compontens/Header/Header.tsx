"use client";

import { sidebarOpened } from "@/app/redux/slices/SidebarSlice";
import { AppDispatch, RootState } from "@/app/redux/store";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const dispatch = useDispatch<AppDispatch>();
  const sidebarStatus = useSelector((state: RootState) => state.sidebar.isOpen);

  const [isRotated, setIsRotated] = useState(false);

  const handleOpenSidebar = () => {
    dispatch(sidebarOpened(!sidebarStatus));
  };
  return (
    <header className="bg-gray-900 text-white shadow">
      <nav className="flex justify-between items-center py-4 px-6">
        {/* RESPONSIVE HAMBURGER BUTTON */}
        <motion.div
          className="md:hidden cursor-pointer focus:outline-none hover:ring-2 hover:ring-blue-500 p-1 rounded"
          animate={{ rotate: isRotated ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onHoverStart={() => setIsRotated(true)}
          onHoverEnd={() => setIsRotated(false)}
          onClick={() => {
            setIsRotated((prev) => !prev);
            handleOpenSidebar();
          }}
        >
          <GiHamburgerMenu className="w-6 h-6" />
        </motion.div>

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
      </nav>
    </header>
  );
}
