import { Roboto } from "next/font/google";
import Navbar from "@/components/Navbar/Navba";
import "./global.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "nextcrud - ecomerce",
  description: "Ésta es la pagina principal de mi tienda",
  keywords: ["tienda virtual", "e-comerce", ""],
  /*openGraph:{ver en pagina de next es pa previzualizacion en dispositivos móviles}*/
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
