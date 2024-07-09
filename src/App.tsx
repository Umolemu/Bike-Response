import React, { useEffect, useState } from "react";
import "./App.css";
import Search from "./search/search";
import Table from "./table/table";
import { Bike } from "./definitions/types";

function App() {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [filteredBikes, setFilteredBikes] = useState<Bike[]>([]);
  // Fetch bikes data
  useEffect(() => {
    fetch("/data/bikes_response.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("No bikes found");
        }
        return response.json();
      })
      .then((data: Bike[]) => {
        setBikes(data);
        setFilteredBikes(data);
      })
      .catch((error) => {
        console.error("Error fetching bikes: ", error);
      });
  }, []);
  
  function handleSearch(query: string, filter: string) {
    let fileteredBikes = bikes;
    if (query) {
      fileteredBikes = bikes.filter((bike) => {
        //if selected filter is all, join all values of bike object and filter it
        const valueToFilter =
          filter === "all"
            ? Object.values(bike).join(" ").toLowerCase()
            //else filter the selected value
            : String(bike[filter as keyof Bike]).toLowerCase();
        return valueToFilter.includes(query.toLowerCase());
      });
    }
    setFilteredBikes(fileteredBikes);
  }

  return (
    <div className="App">
      <Search onSearch={handleSearch} />
      <Table filteredBikes={filteredBikes} />
    </div>
  );
}

export default App;
