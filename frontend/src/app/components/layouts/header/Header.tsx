import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="mx-auto max-w-screen-2xl px-6 sm:px-12 md:px-20 lg:px-32 xl:px-44 2xl:px-64 h-24 flex items-center justify-between">
        {/*  LOGO */}
        <div>
          <h2 className="text-red-500 text-sm sm:text-base md:text-lg lg:text-xl">
            LOGO
          </h2>
        </div>
        {/*  NAVBAR & HAMBURGER BUTTON */}
        <div className="flex items-center justify-around">
          <nav>
            <Link href="/">Categories</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </nav>
          <div>
            <h2>+</h2>
          </div>
        </div>
      </header>
    </>
  );
}
