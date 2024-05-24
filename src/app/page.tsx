import Image from "next/image";

import "./style/card.css";
import dataPerson from "./api/api.json";

type interfacePost = {
  id: string;
  name: string;
  description: string;
  address: string;
  score: number;
  ratings: number;
  image: string;
};

export default async function Home() {
  return (
    <>
      <div className="container_card">
        {dataPerson.map((post: interfacePost) => (
          <div className="custom_card" key={post.id}>
            <div className="card-header">
              <Image src={post.image} width={100} height={100} alt={post.name} />
              <div className="info">
                <h4>{post.name}</h4>
                <p>UI & UX</p>
              </div>
            </div>
            <div className="card-description">{post.description}</div>
          </div>
        ))}
      </div>
    </>
  );
}
