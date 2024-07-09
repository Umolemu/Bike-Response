import React from "react";
import { TableProps } from "../definitions/types";

export default function Table({ filteredBikes }: TableProps) {
  function dataStyle() {
    return "p-3 border border-gray-500";
  }
  return (
    <div className="overflow-x-auto">
      <table className="border border-gray-500 max-w-[1200px] mx-auto">
        <thead>
          <tr>
            <th className={dataStyle()}>ID</th>
            <th className={dataStyle()}>Make</th>
            <th className={dataStyle()}>Model</th>
            <th className={dataStyle()}>Year</th>
            <th className={dataStyle()}>Displacement</th>
            <th className={dataStyle()}>Price</th>
            <th className={dataStyle()}>Terrain</th>
            <th className={dataStyle()}>Description</th>
          </tr>
        </thead>
        <tbody>
          {filteredBikes.map((bike) => (
            <tr
              key={bike.BikeID}
              className="border text-gray-500"
            >
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
