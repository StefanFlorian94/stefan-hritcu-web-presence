"use client";

import { sidebarOpened } from "@/app/redux/slices/SidebarSlice";
import { AppDispatch, RootState } from "@/app/redux/store";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Categories", href: "/categories" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Sidebar() {
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);

  const handleClose = () => {
    dispatch(sidebarOpened(false));
  };

  return (
    <>
      {" "}
      {/* Overlay */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleClose}
        ></motion.div>
      )}
      {/* Sidebar */}
      {isOpen && (
        <motion.aside
          className="fixed top-0 left-0 h-screen w-3/4 max-w-xs bg-gray-700 z-50 shadow-lg flex flex-col p-6"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <h2 className="text-xl font-bold mb-6">Menu</h2>
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-3 py-2 rounded hover:bg-gray-200 hover:text-gray-800 hover:text-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={handleClose}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.aside>
      )}
    </>
  );
}
