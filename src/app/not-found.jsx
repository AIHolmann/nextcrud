import Link from "next/link";

export default function NotFound(params) {
  return (
    <section>
      <h1>404 error</h1>
      <p>Página no encotrada</p>
      <br />
      <Link href="/">Volver</Link>
    </section>
  );
}
