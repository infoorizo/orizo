import Link from "next/link";

const posts = [
  { slug: "hello-world", title: "Hello World", date: "2026-06-01" },
  { slug: "getting-started", title: "Getting Started with Next.js", date: "2026-06-10" },
  { slug: "tailwind-tips", title: "Tailwind CSS Tips & Tricks", date: "2026-06-20" },
];

export default function BlogIndexPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Blog</h1>
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-gray-800">{post.title}</p>
              <p className="text-sm text-gray-400 mt-1">{post.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
