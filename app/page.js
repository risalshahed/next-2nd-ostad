import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Blog!</h1>
      <Link href="/blog">
        <p className="text-blue-500 hover:underline">Go to Blog</p>
      </Link>
    </div>
  );
}