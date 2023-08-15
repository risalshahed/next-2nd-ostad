import getAllPosts from '@/lib/getAllPosts';
import Link from 'next/link';

export default async function Blog() {
  const blogData = await getAllPosts();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="space-y-4">
        {blogData.map((post) => (
          <div key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <h3 className="text-xl text-blue-800 hover:underline font-bold">
                {post.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}