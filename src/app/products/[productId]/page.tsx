"use client";

import Image from "next/image";
import "../../style/products.css";
import { useState, useEffect } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import Producto from "@/app/interfaces/interfaces";

async function getProductById(id: number) {
  const url = `https://fakestoreapi.com/products/${id}`;
  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error en la petición al servidor");
  }

  const data = await res.json();
  return data;
}

export default function ProductDetails({ params }: { params: { productId: string } }) {
  const idProduct = Number(params.productId);
  const [producto, setProducto] = useState<Producto | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const data = await getProductById(idProduct);
        setProducto(data);
      } catch (error) {
        setError((error as Error).message);
      }
    };

    if (idProduct) {
      fetchProducto();
    }
  }, [idProduct]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!producto) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <div className="product-card">
        <div className="product-tumb">
          <Image src={producto.image} width={300} height={300} alt="foto producto" />
        </div>
        <div className="product-details">
          <span className="product-catagory">{producto.category}</span>
          <h4>
            <b>{producto.title}</b>
          </h4>
          <p>{producto.description}</p>
          <div className="product-bottom-details">
            <div className="product-price">
              <small>${producto.price}</small>
            </div>
            <div className="product-links">
              <a href="">
                <Heart />
              </a>
              <a href="">
                <ShoppingCart />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
