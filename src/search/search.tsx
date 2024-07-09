import React, { useState } from "react";
import { SearchProps } from "../definitions/types";
import "../search/search.css";
export default function Search({ onSearch }: SearchProps) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  function handleSearch() {
    onSearch(query, filter);
  }

  return (
    <div className="flex flex-col items-center ">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-400 p-2 rounded-lg w-1/2"
      />
      <div className="flex gap-10" >
        <select 
        value={filter} 
        onChange={(e) => setFilter(e.target.value)}
        className="border border-gray-400 p-2 rounded-lg h-12 m-5"
        >
          <option value="all">All</option>
          <option value="BikeID">ID</option>
          <option value="Make">Make</option>
          <option value="Model">Model</option>
          <option value="Year">Year</option>
          <option value="Displacement">Displacement</option>
          <option value="Price">Price</option>
          <option value="Terrain">Terrain</option>
          <option value="Description">Description</option>
        </select>
        <button 
        onClick={handleSearch}
        className="transition duration-150 ease-in-out hover:translate-y-[-3px]"
        >Search</button>
      </div>
    </div>
  );
}
