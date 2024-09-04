import React from "react";
import { FaBath, FaGalacticRepublic } from "react-icons/fa";
import { FaBellConcierge, FaFoursquare } from "react-icons/fa6";

const Overview = () => {
  return (
    <div className="p-6 bg-[#f9fafb] my-9">
      <h2 className="text-2xl font-semibold">Overview</h2>

      <div className="flex gap-24 my-4 p-2 shadow-lg bg-[#fff]">
        <p className="text-xl">
          <span className="inline-block mr-2 ">
            <FaGalacticRepublic></FaGalacticRepublic>
          </span>{" "}
          2 Beds
        </p>
        <p className="text-xl">
          <span className="inline-block mr-2 ">
            <FaBath></FaBath>
          </span>{" "}
          2 Bath
        </p>
        <p className="text-xl">
          <span className="inline-block mr-2 ">
            <FaBellConcierge></FaBellConcierge>
          </span>{" "}
          2 Balcony
        </p>
        <p className="text-xl">
          <span className="inline-block mr-2 ">
            <FaFoursquare></FaFoursquare>
          </span>{" "}
          Fully Furnished
        </p>
      </div>
      {/*  */}
      <div className="grid grid-cols-4 gap-6">
        <div>
          <p>Carpet Area</p>
          <h3 className="text-lg font-semibold">2000 sqft</h3>
          <p>$ 225 sqft</p>
        </div>
        <div>
          <p>Floor</p>
          <h3 className="text-lg font-semibold">Second (out of 6 floor)</h3>
        </div>
        <div>
          <p>Trancetion Type </p>
          <h3 className="text-lg font-semibold">Ready to move</h3>
        </div>
        <div>
          <p>Lift</p>
          <h3 className="text-lg font-semibold">1</h3>
        </div>
        <div>
          <p>Facing</p>
          <h3 className="text-lg font-semibold">North - East</h3>
        </div>
        <div>
          <p>Additional Romm</p>
          <h3 className="text-lg font-semibold">1 servent $ gust room</h3>
        </div>
        <div>
          <p>Age of Construction</p>
          <h3 className="text-lg font-semibold">New Construction</h3>
        </div>
      </div>
    </div>
  );
};

export default Overview;
