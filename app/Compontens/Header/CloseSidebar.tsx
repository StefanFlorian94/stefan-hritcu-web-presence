"use client";

import { sidebarOpened } from "@/app/redux/slices/SidebarSlice";
import { AppDispatch, RootState } from "@/app/redux/store";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function CloseSidebar() {
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const [isRotated, setIsRotated] = useState(false);

  const handleClosedSidebar = () => {
    setIsRotated((prev) => !prev);

    setTimeout(() => {
      dispatch(sidebarOpened(!isOpen));
    }, 600);
  };

  return (
    <AnimatePresence>
      <motion.div
        animate={{
          rotate: isRotated ? 360 : 0,
          scale: isRotated ? 1.8 : 1,
          color: isRotated ? "#ffffff" : "#ffffff",
        }}
        transition={{ duration: 0.6, ease: "backInOut" }}
        className={`absolute z-50 top-8 right-8 ${isOpen ? "" : "hidden"}`}
        onClick={handleClosedSidebar}
      >
        <IoCloseSharp className="w-10 h-10 cursor-pointer" />
      </motion.div>
    </AnimatePresence>
  );
}
