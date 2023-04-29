import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-500 flex justify-center">
      <div className="text-center">
        <div className="text-xl font-semibold pt-2">
          <Link href="/">Sunny Media</Link>
        </div>
        <div className="space-x-4 py-2">
          <Link href="/about">About</Link>
          <Link href="/about/team">Our Team</Link>
          <Link href="/code/repos">Code</Link>
        </div>
      </div>
    </header>
  );
}
