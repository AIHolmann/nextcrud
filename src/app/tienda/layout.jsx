import Link from "next/link";

export const metadata = {
  title: "tienda oficial",
};

function TiendaLayout({ children }) {
  return (
    <>
      <nav>
        <h3>Seccion tienda</h3>
        <ul>
          <li>
            <Link href="/tienda/categorias">Categorias</Link>
          </li>
          <li>
            <Link href="/tienda/categorias/computadoras">Productos</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}

export default TiendaLayout;
