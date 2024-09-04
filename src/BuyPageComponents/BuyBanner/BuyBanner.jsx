import React from "react";
import banner2 from "../../assets/banner/banner2.webp";
import { FaDollarSign, FaHome, FaSearch } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const BuyBanner = () => {
  return (
    <>
      <div
        className="p-12 h-72 bg-cover bg-center bg-no-repeat relative mb-48"
        style={{ backgroundImage: `url(${banner2})` }}
      >
        {" "}
      </div>

      {/* Form */}
      <div
        className="w-full max-w-[984px] mx-auto p-6 shadow-xl space-y-6 bg-[#ffffff] absolute top-[200px] left-1/2 transform -translate-x-1/2"
      >
        {/* Added max-w-full and centered the form */}
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
            <FaSearch />
          </p>
        </div>
        <div
          className="flex flex-col md:flex-row justify-between gap-6"
        >
          {/* Changed flex to flex-col on small screens and flex-row on medium screens */}
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <p className="text-xl font-bold text-[#e77330]">
                <CiLocationOn />
              </p>
              <p className="text-xl font-semibold text-[#e77330]">
                Your Location
              </p>
            </div>
            <select
              name="location"
              id=""
              className="p-2 text-[#e77330] w-full md:w-[258px] border-2"
            >
              {/* Set width to full on small screens and specific width on medium screens */}
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
              className="p-2 text-[#e77330] w-full md:w-[258px] border-2"
            >
              {/* Set width to full on small screens and specific width on medium screens */}
              <option value=""></option>
              <option value="">Dhaka</option>
            </select>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <p className="text-xl font-bold text-[#e77330]">
                <FaDollarSign />
              </p>
              <p className="text-xl font-semibold text-[#e77330]">Budget</p>
            </div>
            <input
              type="number"
              className="p-2 text-[#e77330] w-full md:w-[258px] border-2"
            />
            {/* Set width to full on small screens and specific width on medium screens */}
          </div>
        </div>
        <div>
          <button className="flex items-center gap-3 p-2 bg-[#0059b1] text-white w-full justify-center">
            <FaSearch /> Find Property
          </button>
        </div>
      </div>
    </>
  );
};

export default BuyBanner;
