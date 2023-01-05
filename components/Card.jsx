import Image from "next/image";
import React from "react";
import { HiThumbUp } from "react-icons/hi";

const Card = ({ result }) => {
  console.log(result);
  return (
    <div>
      <Image
        src={`https://image.tmdb.org/t/p/w500/${result.backdrop_path}`}
        width={200}
        height={100}
      />
      <div>
        <p className="truncate">{result.overview}</p>
        <h2>{result.title || result.name}</h2>
        <p>
          {result.release_date || result.first_air_date}{" "}
          <HiThumbUp className="h-5" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
};

export default Card;
