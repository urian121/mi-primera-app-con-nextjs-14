"use client";
import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
}

interface ApiResponse {
  resp: User[];
}

async function getSesion() {
  let url = "http://127.0.0.1:8100/check-session";

  try {
    const res = await fetch(url, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.log("Error en la petición al servidor");
      return;
    }

    const data: ApiResponse = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default function Productos() {
  const [data, setData] = useState<User[] | null>(null);

  useEffect(() => {
    const fetchSesion = async () => {
      try {
        const data = await getSesion();
        if (data) {
          console.log(data.resp);
          setData(data.resp);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchSesion();
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <p>Nombre: {item.name}</p>
              <p>Email: {item.email}</p>
              <p>Ciudad: {item.address.city}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}
