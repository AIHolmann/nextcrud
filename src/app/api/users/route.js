import { NextResponse } from "next/server";

console.log(process.env.TOKEN);
console.log(process.env.SECRET_KEY);

export async function GET() {
  //extract params
  //query database
  //comunicate with other services

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST(request) {
  const { name, lastname } = await request.json();
  console.log(name, lastname);
  return NextResponse.json({ message: "Creeando Datos" });
}

export function PUT() {
  return NextResponse.json({ message: "Actualizando Datos" });
}

export function DELETE() {
  return NextResponse.json({ message: "Eliminando Datos" });
}
