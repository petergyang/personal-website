import AnimatedName from "@/components/AnimatedName";

export default function Home() {
  return (
    <main className="min-h-screen py-16 px-6">
      <div className="max-w-[600px] mx-auto">
        {/* Animated Name with Hand-drawn Circle */}
        <AnimatedName />

        {/* Bio */}
        <p className="mb-6">
          I&apos;m a product leader and creator. Currently, I work at Roblox and
          create extremely practical AI tutorials and interviews for busy
          people. I also like to share{" "}
          <a
            href="https://x.com/petergyang/status/1482071018927652866"
            target="_blank"
            rel="noopener noreferrer"
          >
            humor
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/posts/petergyang_ive-talked-to-100-ai-pms-on-linkedin-to-activity-7394192229579280384-mcmo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            memes
          </a>{" "}
          from time to time.
        </p>

        {/* Featured Writing */}
        <p className="mb-4">Some of my favorite writing includes:</p>
        <ul className="mb-8 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-[#D30800] mt-[2px]">■</span>
            <a
              href="https://creatoreconomy.so/p/40-life-lessons-i-know-at-40-i-wish-i-knew-at-20?utm_source=publication-search"
              target="_blank"
              rel="noopener noreferrer"
            >
              40 life lessons after turning 40
            </a>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#D30800] mt-[2px]">■</span>
            <a
              href="https://creatoreconomy.so/p/so-whats-going-to-happen-to-product-management-anyway"
              target="_blank"
              rel="noopener noreferrer"
            >
              So what&apos;s going to happen to product management
            </a>
          </li>
        </ul>

        {/* Social Links */}
        <p>
          You can read my{" "}
          <a
            href="https://creatoreconomy.so/"
            target="_blank"
            rel="noopener noreferrer"
          >
            newsletter
          </a>
          , check out my{" "}
          <a
            href="https://www.youtube.com/@peteryangyt"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
          , or follow me on{" "}
          <a
            href="https://x.com/petergyang"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/petergyang/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          . I also have a{" "}
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
