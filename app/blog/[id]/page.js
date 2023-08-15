import getSinglePost from "@/lib/getSinglePost";

export default async function Post({ params }) {
  const id = params.id;
  const post = await getSinglePost(id);

  return (
    <section className='container mx-auto py-10'>
      <h1 className='text-3xl font-bold mb-4'>{post.title}</h1>
      <div className='bg-white p-4 rounded-lg shadow-md'>
        {post.body}
      </div>
    </section>
  )
}