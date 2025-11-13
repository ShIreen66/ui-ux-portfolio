"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../logo";
import { useRouter, usePathname } from "next/navigation";

interface NavLink {
  name: string;
  href: string;
  subLinks?: { name: string; href: string }[];
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleDownloadPDF = () => {
    window.print();
  };

  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    {
      name: "Case Study",
      href: "/case-study",
      subLinks: [
        { name: "Alsco", href: "/case-study/alsco" },
        { name: "Moneyspot", href: "/case-study/moneyspot" },
        { name: "ClassCade", href: "/case-study/classcade" },
      ],
    },
  ];

  const handleNavClick = (
    href: string,
    e?: React.MouseEvent<HTMLAnchorElement>,
    closeMobile?: boolean
  ) => {
    if (e && (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1)) return;
    if (e) e.preventDefault();

    if (href.startsWith("#")) {
      const el = document.getElementById(href.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(href);
    }

    if (closeMobile) setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-[999] w-full bg-white/80 dark:bg-gray-950/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
      <div className="container">
        <nav className="flex justify-between items-center py-2">
          <Logo />

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className="text-gray-700 dark:text-gray-300 font-medium hover:text-indigo-500 transition-colors duration-300 flex items-center gap-1"
                >
                  {link.name}
                  {link.subLinks && <ChevronDown size={16} />}
                </a>

                {/* Dropdown */}
                {link.subLinks && (
                  <ul className="absolute left-0 top-full mt-2 w-48 bg-white dark:bg-gray-900 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {link.subLinks.map((sub) => (
                      <li key={sub.name}>
                        <a
                          href={sub.href}
                          onClick={(e) => handleNavClick(sub.href, e)}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                        >
                          {sub.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
