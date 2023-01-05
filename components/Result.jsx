import React from "react";
import Card from "./Card";

const Result = ({ results }) => {
  return (
    <div className="bg-gray-700 text-gray-200 select-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Result;
