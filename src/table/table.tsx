import React, { useState } from "react";
import { TableProps } from "../definitions/types";
import { Bike } from "../definitions/types";

export default function Table({ filteredBikes }: TableProps) {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Bike | null;
    direction: "ascending" | "descending";
  }>({ key: null, direction: "ascending" });

  const handleSort = (key: keyof Bike) => {
    let direction: "ascending" | "descending" = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedBikes = React.useMemo(() => {
    let sortableBikes = [...filteredBikes];
    if (sortConfig.key !== null) {
      sortableBikes.sort((a, b) => {
        if (a[sortConfig.key!] < b[sortConfig.key!]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key!] > b[sortConfig.key!]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableBikes;
  }, [filteredBikes, sortConfig]);

  function dataStyle() {
    return "p-3 border border-gray-500";
  }

  return (
    <div className="overflow-x-auto">
      <table className="border border-gray-500 max-w-[1200px] mx-auto">
        <thead>
          <tr>
            <th
              className={`${dataStyle()} cursor-pointer hover:text-blue-500 transition duration-200 ease-in-out`}
              onClick={() => handleSort("BikeID")}
            >
              ID
            </th>
            <th
              className={`${dataStyle()} cursor-pointer hover:text-blue-500 transition duration-200 ease-in-out`}
              onClick={() => handleSort("Make")}
            >
              Make
            </th>
            <th
              className={`${dataStyle()} cursor-pointer hover:text-blue-500 transition duration-200 ease-in-out`}
              onClick={() => handleSort("Model")}
            >
              Model
            </th>
            <th
              className={`${dataStyle()} cursor-pointer hover:text-blue-500 transition duration-200 ease-in-out`}
              onClick={() => handleSort("Year")}
            >
              Year
            </th>
            <th
              className={`${dataStyle()} cursor-pointer hover:text-blue-500 transition duration-200 ease-in-out`}
              onClick={() => handleSort("Displacement")}
            >
              Displacement
            </th>
            <th
              className={`${dataStyle()} cursor-pointer hover:text-blue-500 transition duration-200 ease-in-out`}
              onClick={() => handleSort("Price")}
            >
              Price
            </th>
            <th
              className={`${dataStyle()} cursor-pointer hover:text-blue-500 transition duration-200 ease-in-out`}
              onClick={() => handleSort("Terrain")}
            >
              Terrain
            </th>
            <th
              className={`${dataStyle()} cursor-pointer hover:text-blue-500 transition duration-200 ease-in-out`}
              onClick={() => handleSort("Description")}
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedBikes.map((bike) => (
            <tr key={bike.BikeID} className="border text-gray-500">
              <td className={dataStyle()}>{bike.BikeID}</td>
              <td className={dataStyle()}>{bike.Make}</td>
              <td className={dataStyle()}>{bike.Model}</td>
              <td className={dataStyle()}>{bike.Year}</td>
              <td className={dataStyle()}>{bike.Displacement}</td>
              <td className={dataStyle()}>{bike.Price}</td>
              <td className={dataStyle()}>{bike.Terrain}</td>
              <td className={dataStyle()}>{bike.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
