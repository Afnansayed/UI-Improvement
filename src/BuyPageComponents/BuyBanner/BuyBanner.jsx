import React from "react";
import banner2 from "../../assets/banner/banner2.webp";
import { FaDollarSign, FaHome, FaSearch } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
const BuyBanner = () => {
  return (
    <>
      <div
        className="p-12 h-72 bg-cover bg-center bg-no-repeat mb-56 relative"
        style={{ backgroundImage: `url(${banner2})` }}
      >
        {" "}
      </div>

      {/* Form  */}
      <div className="w-[984px] mx-auto p-6 shadow-xl space-y-6 bg-[#ffffff] absolute top-[200px] left-[370px]">
        <div className="shadow-sm p-2">
          <nav>
            <ul className="flex gap-6 text-lg font-semibold">
              <li className="text-blue-500 border-b-2 border-blue-500">Buy</li>
              <li>Rent</li>
              <li>PG</li>
              <li>Pilot</li>
              <li>Commercial</li>
            </ul>
          </nav>
        </div>
        <div className="relative border-2 ">
          <input
            type="text"
            className="w-full placeholder-gray-500 p-2 pl-12 placeholder-opacity-75"
            placeholder="Search Properties"
          />
          <p className="absolute left-3 top-[14px]">
            <FaSearch></FaSearch>
          </p>
        </div>
        <div className=" flex justify-between">
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <p className="text-xl font-bold text-[#e77330]">
                <CiLocationOn />
              </p>
              <p className="text-xl font-semibold text-[#e77330]">
                Your Loacation
              </p>
            </div>
            <select
              name="location"
              id=""
              className="p-2 text-[#e77330] w-[258px] border-2"
            >
              <option value=""></option>
              <option value="">Dhaka</option>
            </select>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <p className="text-xl font-bold text-[#e77330]">
                <FaHome />
              </p>
              <p className="text-xl font-semibold text-[#e77330]">
                Property Type
              </p>
            </div>
            <select
              name="location"
              id=""
              className="p-2 text-[#e77330] w-[258px] border-2"
            >
              <option value=""></option>
              <option value="">Dhaka</option>
            </select>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <p className="text-xl font-bold text-[#e77330]">
                <FaDollarSign/>
              </p>
              <p className="text-xl font-semibold text-[#e77330]">
                Budget
              </p>
            </div>
            <input type="number" className="p-2 text-[#e77330] w-[258px] border-2" />
          </div>
        </div>
        <div>
            <button className="flex  items-center gap-3 p-2 bg-[#0059b1] text-white w-full justify-center "><FaSearch></FaSearch> Find Property</button>
        </div>
      </div>
    </>
  );
};

export default BuyBanner;
