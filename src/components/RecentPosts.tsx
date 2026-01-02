"use client";

import { useEffect, useState } from "react";

interface Post {
  title: string;
  url: string;
}

interface RecentPostsProps {
  showHeading?: boolean;
}

export default function RecentPosts({ showHeading = true }: RecentPostsProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/posts");
        if (response.ok) {
          const data = await response.json();
          setPosts(data.posts);
        }
      } catch {
        // Silently fail - posts section just won't show
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="mb-8">
        {showHeading && <p className="mb-4">Here are my 3 most recent posts:</p>}
        <ul className="space-y-2">
          {[1, 2, 3].map((i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-[#D30800] mt-[2px] bullet">■</span>
              <span className="bg-gray-200 h-5 w-64 rounded animate-pulse" />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      {showHeading && <p className="mb-4">Here are my 3 most recent posts:</p>}
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.url} className="flex items-start gap-2">
            <span className="text-[#D30800] mt-[2px] bullet">■</span>
            <a href={post.url} target="_blank" rel="noopener noreferrer">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
