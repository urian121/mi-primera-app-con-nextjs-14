import Link from "next/link";
import User from "@/app/interfaces/interfaces";

async function getDataUsers() {
  let url = "https://jsonplaceholder.typicode.com/users";

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.log("error en la petición al servidor");
  }

  const data = await res.json();
  return data;
}

export default async function Usuarios() {
  const data = await getDataUsers();

  return (
    <ol>
      {data.map((user: User) => (
        <li key={user.id}>
          {" "}
          {user.name}
          <span>
            <Link href={`/users/${user.id}`} className="btn btn-light">
              Ver Detalles
            </Link>
          </span>
        </li>
      ))}
    </ol>
  );
}
