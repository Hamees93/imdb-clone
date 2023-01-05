import React from "react";
import Card from "./Card";

const Result = ({ results }) => {
  return (
    <div>
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Result;
