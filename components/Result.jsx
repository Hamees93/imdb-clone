import React from "react";

const Result = ({ results }) => {
  return (
    <div>
      {results.map((result, index) => (
        <h1 key={index}>{result.title}</h1>
      ))}
    </div>
  );
};

export default Result;
