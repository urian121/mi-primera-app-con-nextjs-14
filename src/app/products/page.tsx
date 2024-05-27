"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, ShoppingCart } from "lucide-react";
import Producto from "../interfaces/interfaces";
import "../style/products.css";

async function getProductos() {
  const url = "https://fakestoreapi.com/products";
  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error en la petición al servidor");
  }

  const data = await res.json();
  return data;
}

export default function Productos() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await getProductos();
        setProductos(data);
      } catch (error) {
        setError((error as Error).message);
      }
    };

    fetchProductos();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h3>
        Lista de productos <hr />
      </h3>
      {productos.length === 0 ? (
        <p>Cargando...</p>
      ) : (
        productos.map((producto: Producto) => (
          <div key={producto.id}>
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
                  <div className="product-links">
                    <div className="product-price">
                      <small>${producto.price}</small>
                    </div>
                    <a href="">
                      <Heart />
                    </a>
                    <a href="">
                      <ShoppingCart />
                    </a>
                    <Link href={`/products/${producto.id}`}>
                      Detalles <ArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}
