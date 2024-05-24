"use client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [productId, setProductId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof id === "string") {
      setProductId(id);
    }
  }, [id]);

  return (
    <div>
      <h1>Detalles del Producto</h1>
      <p>ID del Producto: {productId}</p>
    </div>
  );
}
