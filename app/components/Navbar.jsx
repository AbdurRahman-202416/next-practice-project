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
    ];

    return (
        <nav className="bg-gray-800 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">MyApp</h1>
                <ul className="flex space-x-6">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`hover:underline ${pathname === item.href
                                    ? "text-yellow-400 font-semibold"
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
