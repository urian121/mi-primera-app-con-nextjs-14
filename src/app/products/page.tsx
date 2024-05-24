"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

async function getProductos() {
  let url = "https://fakestoreapi.com/products";
  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.log("error en la petición al servidor");
  }

  const data = await res.json();
  return data;
}

type Producto = {
  id: number;
  title: string;
};

export default function Productos() {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const data = await getProductos();
      setProductos(data);
    };

    fetchProductos();
  }, []);

  return (
    <>
      <h3>
        Lista de productos <hr />
      </h3>
      {productos.length === 0 && <p>Cargando...</p>}
      {productos.map((producto: Producto) => (
        <div key={producto.id}>
          <Link href={`/products/${producto.id}`}>{producto.title}</Link>
        </div>
      ))}
    </>
  );
}
