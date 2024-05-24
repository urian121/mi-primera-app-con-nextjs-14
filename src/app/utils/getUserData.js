// Obtener usuario por su id

export async function getUserData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    console.log("error en la petición al servidor");
  }

  const data = await res.json();
  return data;
}
