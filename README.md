# Iniciando con Next.js 14

##### Code

        async function getData() {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            cache: "no-store",
        });
        const data = await res.json();
        return data;
        }

        type interfacePost = {
        id: number;
        title: string;
        body: string;
        };

        export default async function Home() {
        const data = await getData();

        return (
            <>
            {data.map((post: interfacePost) => (
                <div key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                </div>
            ))}
            </>
        );
        }

#### Notas

    El Server Side Rendering es una técnica que consiste en renderizar el HTML en el servidor y enviarlo al cliente. Esto nos permite que el usuario vea la interfaz de la aplicación antes de que se cargue el JavaScript. Esta técnica nos permite mejorar la experiencia de usuario y mejorar el SEO de nuestra aplicación.

    ¿Qué es CSR? Client-Side Rendering (Representación en el Lado del Cliente) implica que el navegador carga una página en blanco y luego utiliza JavaScript para llenar esa página con contenido. En este caso, el navegador toma un rol más activo en la creación y presentación de la interfaz de usuario.
