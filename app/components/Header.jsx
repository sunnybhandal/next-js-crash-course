import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-700 flex justify-center">
      <div className="text-center">
        <div className="text-xl font-semibold pt-2">
          <Link href="/">Sunny Media</Link>
        </div>
        <div className="space-x-4 py-2">
          <Link href="/about" className="hover:text-black">
            About
          </Link>
          <Link href="/about/team" className="hover:text-black">
            Our Team
          </Link>
          <Link href="/code/repos" className="hover:text-black">
            Code
          </Link>
        </div>
      </div>
    </header>
  );
}
