import Image from "next/image";
import AnimatedName from "@/components/AnimatedName";
import RecentPosts from "@/components/RecentPosts";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen py-16 px-6">
      <ThemeToggle />
      <div className="max-w-[600px] mx-auto">
        <AnimatedName />

        <Image
          src="/peter.png"
          alt="Peter Yang"
          width={300}
          height={300}
          className="mb-8"
          priority
        />

        <p className="mb-6">
          I&apos;m a product leader and creator who has spent over a decade
          building products to empower other creators at Roblox, Reddit, Meta,
          and more.
        </p>

        <p className="mb-6">
          I have a{" "}
          <a
            href="https://creatoreconomy.so/"
            target="_blank"
            rel="noopener noreferrer"
          >
            newsletter
          </a>{" "}
          and{" "}
          <a
            href="https://www.youtube.com/@peteryangyt"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>{" "}
          with extremely practical AI tutorials and interviews for busy people.
        </p>

        <RecentPosts />

        <p className="mb-6">
          I&apos;m lucky to reach an audience of 300K+ people. It&apos;s probably
          because I&apos;m pretty{" "}
          <a
            href="https://x.com/petergyang/status/1482071018927652866"
            target="_blank"
            rel="noopener noreferrer"
          >
            funny
          </a>{" "}
          and good at{" "}
          <a
            href="https://www.linkedin.com/posts/petergyang_ive-talked-to-100-ai-pms-on-linkedin-to-activity-7394192229579280384-mcmo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            memes
          </a>
          .
        </p>

        <p>
          You can also follow me on{" "}
          <a
            href="https://x.com/petergyang"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/petergyang/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          , and{" "}
          <a
            href="https://github.com/petergyang/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </main>
  );
}
