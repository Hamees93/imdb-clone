import Image from "next/image";
import React from "react";
import { HiThumbUp } from "react-icons/hi";

const Card = ({ result }) => {
  console.log(result);
  return (
    <div className="p-3 cursor-pointer hover:text-white active:text-red-400 xl:hover:scale-105 transition-transform duration-150 ease-in-out">
      <div className="">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${result.backdrop_path}`}
          width={200}
          height={100}
          layout="responsive"
        />
      </div>
      <div>
        <p className="truncate text-lg">{result.overview}</p>
        <h2 className="text-lg font-bold">{result.title || result.name}</h2>
        <p className="flex items-center">
          {result.release_date || result.first_air_date}{" "}
          <HiThumbUp className="h-5 ml-3 mr-1" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
};

export default Card;
