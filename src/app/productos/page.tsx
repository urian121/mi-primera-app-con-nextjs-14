import { ScanSearch } from "lucide-react";
import Link from "next/link";

export default function ProductList() {
  let objetosProductos = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
    { id: 5, name: "Product 5" },
  ];

  return (
    <>
      <h3>Listado de productos</h3>
      <ul>
        {objetosProductos.map((objeto) => {
          return (
            <li key={objeto.id}>
              {objeto.name} &nbsp;
              <Link href={`/productos/${objeto.id}`}>
                <ScanSearch />
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
