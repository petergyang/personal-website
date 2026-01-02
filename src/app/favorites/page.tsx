import Link from "next/link";
import PolaroidCard from "@/components/PolaroidCard";

const favorites = [
  {
    imageSrc: "/favorites/rocky.png",
    category: "Movie",
    title: "Rocky",
    year: 1976,
    rotation: -3,
    description: "Go the distance",
  },
  {
    imageSrc: "/favorites/terminator-2.png",
    category: "Movie",
    title: "Terminator 2: Judgment Day",
    year: 1991,
    rotation: 3,
    description: "Best action movie ever made",
  },
  {
    imageSrc: "/favorites/dinopark-tycoon.png",
    category: "Simulation",
    title: "Dinopark Tycoon",
    year: 1993,
    rotation: -2,
    description: "Loved playing this in elementary",
  },
  {
    imageSrc: "/favorites/chrono-trigger.png",
    category: "RPG",
    title: "Chrono Trigger",
    year: 1995,
    rotation: 4,
    description: "My seminal RPG",
  },
  {
    imageSrc: "/favorites/starcraft-brood-war.png",
    category: "RTS",
    title: "Starcraft: Brood War",
    year: 1998,
    rotation: -3,
    description: "Endless hours of competitive play",
  },
  {
    imageSrc: "/favorites/attack-on-titan.png",
    category: "Anime",
    title: "Attack on Titan",
    year: 2013,
    rotation: 2,
    description: "This got me hooked on anime",
  },
  {
    imageSrc: "/favorites/fury-road.png",
    category: "Movie",
    title: "Mad Max: Fury Road",
    year: 2015,
    rotation: -4,
    description: "WITNESS ME",
  },
  {
    imageSrc: "/favorites/zelda-botw.png",
    category: "Game",
    title: "Zelda: Breath of the Wild",
    year: 2017,
    rotation: 3,
    description: "Beautiful exploration",
  },
  {
    imageSrc: "/favorites/parasite.png",
    category: "Movie",
    title: "Parasite",
    year: 2019,
    rotation: -2,
    description: "The basement scene broke my brain",
  },
  {
    imageSrc: "/favorites/baldurs-gate.png",
    category: "RPG",
    title: "Baldur's Gate 3",
    year: 2023,
    rotation: 4,
    description: "So many branching paths",
  },
];

export default function FavoritesPage() {
  return (
    <main className="min-h-screen corkboard-bg py-12 px-6">
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
              description={fav.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
