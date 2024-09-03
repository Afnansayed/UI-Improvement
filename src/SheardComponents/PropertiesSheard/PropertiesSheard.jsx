import React from "react";
import { FaArrowLeft, FaArrowRight, FaDollarSign } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import img from "../../assets/photos/image-3.jpg";
const PropertiesSheard = ({title , img1 , img2 , img3}) => {
  return (
    <div className="max-w-[1350px] mx-auto relative my-12">
  <div className="flex justify-between">
    <p className="text-2xl font-semibold">{title}</p>
    <p className="text-blue-500 underline">See all Property</p>
  </div>

  <div className="flex gap-6 relative ">
    {/* Left Arrow Button */}
    <button className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-blue-700 p-3 text-white rounded-full z-10">
      <FaArrowLeft />
    </button>

    {/* Card 1 */}
    <div className="w-1/3 py-2">
      <img src={img1} className="w-full h-[230px]"  alt="" />
      <div className="bg-slate-50 p-4">
        <div className="flex justify-between">
          <p>Apartment</p>
          <p className="text-lg text-bold">
            <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
            Ready to Move
          </p>
        </div>
        <div className="divider"></div>
        <h3 className="text-xl font-semibold">SunnySlope Suites</h3>
        <p>
          <span className="inline-block text-orange-400 mr-6 text-lg mt-2">
            <FaMapLocation />
          </span>{" "}
          Mendowsher park Greenland usa
        </p>
        <p>
          <span className="inline-block mr-6 text-lg mt-6">
            <FaDollarSign />
          </span>{" "}
          2500000
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="w-1/3 py-2">
      <img src={img2} className="w-full h-[230px]" alt="" />
      <div className="bg-slate-50 p-4">
        <div className="flex justify-between">
          <p>Apartment</p>
          <p className="text-lg text-bold">
            <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
            Ready to Move
          </p>
        </div>
        <div className="divider"></div>
        <h3 className="text-xl font-semibold">SunnySlope Suites</h3>
        <p>
          <span className="inline-block text-orange-400 mr-6 text-lg mt-2">
            <FaMapLocation />
          </span>{" "}
          Mendowsher park Greenland usa
        </p>
        <p>
          <span className="inline-block mr-6 text-lg mt-6">
            <FaDollarSign />
          </span>{" "}
          2500000
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="w-1/3 py-2">
      <img src={img3} className="w-full h-[230px]" alt="" />
      <div className="bg-slate-50 p-4">
        <div className="flex justify-between">
          <p>Apartment</p>
          <p className="text-lg text-bold">
            <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
            Ready to Move
          </p>
        </div>
        <div className="divider"></div>
        <h3 className="text-xl font-semibold">SunnySlope Suites</h3>
        <p>
          <span className="inline-block text-orange-400 mr-6 text-lg mt-2">
            <FaMapLocation />
          </span>{" "}
          Mendowsher park Greenland usa
        </p>
        <p>
          <span className="inline-block mr-6 text-lg mt-6">
            <FaDollarSign />
          </span>{" "}
          2500000
        </p>
      </div>
    </div>

    {/* Right Arrow Button */}
    <button className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-blue-700 p-3 text-white rounded-full z-10">
      <FaArrowRight />
    </button>
  </div>
</div>

  );
};

export default PropertiesSheard;
