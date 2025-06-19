// components/Navbar.jsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/about" },
    { label: "Display", href: "/display" },
  ];

  return (
    <nav className="bg-gray-800 sticky top-0 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="sm:text-xl text-lg text-green-500 font-bold">Next App</h1>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`hover:underline ${
                  pathname === item.href
                    ? "text-green-600 border-b border-green-600 font-semibold"
                    : "text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
