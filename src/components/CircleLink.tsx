"use client";

import { useState } from "react";

interface CircleLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function CircleLink({ href, children }: CircleLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="circle-link"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <svg
        className="circle-svg"
        viewBox="0 0 100 50"
        preserveAspectRatio="none"
      >
        <ellipse
          cx="50"
          cy="25"
          rx="46"
          ry="21"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="300"
          strokeDashoffset={isHovered ? "0" : "300"}
          style={{
            transition: isHovered ? "stroke-dashoffset 0.4s ease-out" : "none",
          }}
        />
      </svg>
    </a>
  );
}
