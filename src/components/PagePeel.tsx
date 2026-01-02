"use client";

import Link from "next/link";

export default function PagePeel() {
  return (
    <Link
      href="/favorites"
      className="page-peel"
      aria-label="View my favorites"
    >
      <div className="page-peel-corner" aria-hidden="true" />
      <span className="page-peel-text">My Favorites</span>
    </Link>
  );
}
