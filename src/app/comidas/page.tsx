import Image from "next/image";
import "../style/card_comida.css";
import dataPerson from "../api/api.json";
import { Heart, HeartOff } from "lucide-react";

type interfacePost = {
  id: string;
  name: string;
  description: string;
  address: string;
  score: number;
  ratings: number;
  image: string;
};

export default function page() {
  const like = 193;
  const isLiked = true;

  return (
    <>
      <h2>Lista de comidas 🍕</h2>

      {dataPerson.map((post: interfacePost) => (
        <div className="card_comida" key={post.id}>
          <div className="card-header-comida">
            <div className="profile-comida">
              <span className="letter-comida">Urian Dev</span>
            </div>
            <div className="card-title-group">
              <h5 className="card-title-comida">Taco Mexicano</h5>
              <div className="card-date-comida">20-05-2024</div>
            </div>
          </div>
          <Image
            className="card-image-comida"
            src={post.image}
            width={100}
            height={100}
            alt={post.name}
          />
          <div className="card-text-comida">
            Comida mexicana, tipica de mexico, facil de preparar y fácil de cocinar.
          </div>
          <div className="card-like-bar">
            {isLiked ? <Heart /> : <HeartOff />}
            <div className="like-text-comida">
              <b>{like}</b>Me encanta
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
