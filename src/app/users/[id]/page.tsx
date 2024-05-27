"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

async function getUserData(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    console.log("error en la petición al servidor");
    throw new Error("Error fetching user data");
  }

  const data = await res.json();
  return data;
}

export default function Detalles({ params }: { params: { id: string } }) {
  const userId = Number(params.id);
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserData(userId);
        setUser(data);
      } catch (error) {
        setError((error as Error).message);
      }
    };

    fetchUserData();
  }, [userId]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <p>
        Usuario <strong>{user.name}</strong>
      </p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>

      <hr />
      <button onClick={() => router.back()}>Atrás</button>
    </>
  );
}
