import Users from "@/components/users/Users";

export const metadata = {
  title: "Mi pagina especial Home",
};

export default function Home() {
  return (
    <main>
      <div>page principal</div>
      <button>Click</button>
      <Users />
    </main>
  );
}
