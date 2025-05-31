"use client";

import { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

export default function BestSellerPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleMenu}
        className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
      >
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in duration-75 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        {(ref) => (
          <div
            ref={ref}
            className="fixed inset-y-0 left-0 w-64 bg-white shadow-md overflow-y-auto z-50"
          >
            <div className="p-4">
              <Link href="/">Logo</Link>
            </div>
            <nav className="px-2">
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
              {/* আরও মেনু আইটেম এখানে যোগ করুন */}
            </nav>
          </div>
        )}
      </Transition>
    </div>
  );
}
