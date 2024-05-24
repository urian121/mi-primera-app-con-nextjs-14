import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

async function getProductById(id: number) {
  let url = `https://fakestoreapi.com/products/${id}`;
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
  description: string;
};

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [producto, setProducto] = useState<Producto | null>(null);

  useEffect(() => {
    const fetchProducto = async () => {
      if (id && typeof id === "string") {
        const data = await getProductById(parseInt(id));
        setProducto(data);
      }
    };

    fetchProducto();
  }, [id]);

  if (!producto) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>{producto.title}</h1>
      <p>{producto.description}</p>
    </div>
  );
}
