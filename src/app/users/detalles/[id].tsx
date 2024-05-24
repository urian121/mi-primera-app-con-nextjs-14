// import { getUserData } from "@/app/utils/getUserData";
import User from "@/app/interfaces/interfaces";

/*
async function getUserData(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    console.log("error en la petición al servidor");
  }

  const data = await res.json();
  return data;
}
*/
export default function Detalles() {
  /*
  console.log(params.id);
  const userId = params.id;
  const user = getUserData(3);
  console.log(user);
  */
  return (
    <>
      <p>Usuario</p>
    </>
  );
}
