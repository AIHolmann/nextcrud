import PostPage from "../page";
import { Suspense } from "react";

async function LoadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

async function Page({ params }) {
  const post = await LoadPost(params.id);
  return (
    <div>
      <hr />
      <h1>
        {post.id}. {post.title}
      </h1>
      <p>{post.body}</p>
      <hr />
      <h3>
        <i>Otras publicaciones:</i>
      </h3>
      <Suspense fallback={<div>Cargando publicaciones...</div>}>
        <PostPage />
      </Suspense>
    </div>
  );
}

export default Page;
