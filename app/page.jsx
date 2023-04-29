import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <div className="">
      <h1>Welcome to Sunny Media</h1>
      <ul className="flex">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
    </div>
  );
}
