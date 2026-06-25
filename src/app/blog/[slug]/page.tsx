import Link from "next/link";
import { notFound } from "next/navigation";

const posts: Record<string, { title: string; date: string; body: string }> = {
  "hello-world": {
    title: "Hello World",
    date: "2026-06-01",
    body: "Welcome to the blog! This is the first post.",
  },
  "getting-started": {
    title: "Getting Started with Next.js",
    date: "2026-06-10",
    body: "Next.js gives you a great developer experience with all the features you need for production.",
  },
  "tailwind-tips": {
    title: "Tailwind CSS Tips & Tricks",
    date: "2026-06-20",
    body: "Tailwind makes it easy to build beautiful UIs directly in your markup.",
  },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) notFound();

  return (
    <article className="space-y-4 max-w-prose">
      <Link href="/blog" className="text-sm text-indigo-600 hover:underline">
        ← Back to Blog
      </Link>
      <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
      <p className="text-sm text-gray-400">{post.date}</p>
      <p className="text-gray-700 leading-relaxed">{post.body}</p>
    </article>
  );
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}
