"use client";
import { useRouter } from "next/navigation";

function About() {
  const router = useRouter();
  return (
    <section>
      <h1>About:</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste omnis
        molestiae sapiente doloremque beatae nisi incidunt provident ullam vitae
        nobis architecto illum consequatur aperiam facere deleniti, commodi ad
        porro, unde ipsum fugit assumenda error. Ducimus, tempore pariatur nisi
        voluptatem itaque magnam perspiciatis ab excepturi soluta exercitationem
        reprehenderit vero obcaecati ipsam consequuntur animi quos expedita
        aspernatur fuga sit! Distinctio porro dolorum, ipsam ipsum dicta
        pariatur repellendus quis laudantium. Necessitatibus quia eos cupiditate
        modi praesentium quis sequi hic omnis architecto maxime iure earum quos
        vel a eum commodi eveniet nisi sunt asperiores, ducimus quisquam velit
        ullam voluptatem! Impedit ea perspiciatis dolores ut?
      </p>
      <button
        className="bg-sky-400 px-3 py-1 rounded-md"
        onClick={() => {
          alert("Executing code!!");
          router.push("/");
        }}
      >
        Click
      </button>
    </section>
  );
}

export default About;
