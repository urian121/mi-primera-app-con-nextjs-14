/**
 * Para mostrar el ID de producto específico, hacemos uso de los parámetros de ruta. Esto nos permite hacer uso del objeto params disponible en cada página
 */

// export default function ProductDetail({ params }: { params: { productId: string } }) {

type Params = {
  params: {
    productId: string;
  };
};

export default function ProductDetail({ params }: { params: Params["params"] }) {
  return (
    <>
      <h1>Detalles del producto</h1>
      <strong style={{ color: "black", fontSize: "35px" }}>{params.productId}</strong>
    </>
  );
}
