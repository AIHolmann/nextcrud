import PostCard from "../../components/PostCard/PostCard";
import "./post.css";

async function loadPost(params) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

async function Posts() {
  const posts = await loadPost();
  return (
    <div className="grid">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
}
export default Posts;
