import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { searchParams } = new URL(request.url);
  searchParams.get("name");
  console.log(searchParams.get("name"), searchParams.get("lastname"));
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const data = await res.json();
  return NextResponse.json(data);
}
