async function getData() {
  let url = "https://jsonplaceholder.typicode.com/posts";

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.log("error en la petición al servidor");
  }

  const data = await res.json();
  return data;
}

type interfacePost = {
  id: number;
  title: string;
  body: string;
};

export default async function Usuarios() {
  const data = await getData();

  return (
    <>
      {data.map((post: interfacePost) => (
        <div key={post.id}>
          <h6>{post.title}</h6>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
}
