//"use client";
async function getSesion() {
  let url = "http://127.0.0.1:8100/check-session";

  try {
    const res = await fetch(url, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Error en la petición al servidor");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function ChekeSesion() {
  const sessionBD = await getSesion();
  console.log(sessionBD);

  return (
    <div>
      <h1>--</h1>
    </div>
  );
}
