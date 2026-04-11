import React from "react";
import { useLocation } from "react-router-dom";

const Search = () => {
  const { state } = useLocation();

  return (
    <div>
      <h2>Search Results</h2>
      {state?.map((item, i) => (
        <div key={i}>
          <p>{item.name || item.storeName}</p>
        </div>
      ))}
    </div>
  );
};

export default Search;