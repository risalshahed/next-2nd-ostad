export default async function getAllPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');

  if(!res.ok) {
    throw new Error('error fetching posts')
  }

  return res.json();
}