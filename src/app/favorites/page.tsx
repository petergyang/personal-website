import Link from "next/link";
import PolaroidCard from "@/components/PolaroidCard";
import ThemeToggle from "@/components/ThemeToggle";

const favorites = [
  {
    imageSrc: "/favorites/rocky.png",
    category: "Movie",
    title: "Rocky",
    year: 1976,
    rotation: -3,
  },
  {
    imageSrc: "/favorites/dinopark-tycoon.png",
    category: "Simulation",
    title: "Dinopark Tycoon",
    year: 1993,
    rotation: 4,
  },
  {
    imageSrc: "/favorites/chrono-trigger.png",
    category: "RPG",
    title: "Chrono Trigger",
    year: 1995,
    rotation: -2,
  },
  {
    imageSrc: "/favorites/starcraft-brood-war.png",
    category: "RTS",
    title: "Starcraft: Brood War",
    year: 1998,
    rotation: 3,
  },
  {
    imageSrc: "/favorites/attack-on-titan.png",
    category: "Anime",
    title: "Attack on Titan",
    year: 2013,
    rotation: -4,
  },
];

export default function FavoritesPage() {
  return (
    <main className="min-h-screen corkboard-bg py-12 px-6">
      <ThemeToggle />

      <Link
        href="/"
        className="fixed top-6 left-6 font-handwritten text-xl text-white/90 hover:text-white transition-colors flex items-center gap-2 z-50 no-underline"
        aria-label="Back to home"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back
      </Link>

      <div className="max-w-6xl mx-auto pt-16">
        <h1 className="font-handwritten text-5xl text-center mb-12 text-white/90">
          My Favorites
        </h1>

        <div className="timeline justify-center">
          {favorites.map((fav, index) => (
            <PolaroidCard
              key={fav.title}
              imageSrc={fav.imageSrc}
              category={fav.category}
              title={fav.title}
              year={fav.year}
              rotation={fav.rotation}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
