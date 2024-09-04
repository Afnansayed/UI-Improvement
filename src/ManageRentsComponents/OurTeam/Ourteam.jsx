import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import image from '../../assets/photos/image-12.jpg';
import image2 from '../../assets/photos/image-13.jpg'
import image3 from '../../assets/photos/image-14.jpg';
const Ourteam = () => {
    return (
        <div className='p-8'>
            <h1 className='flex gap-2 items-center'><p className='h-1 bg-[#f99454] w-20'></p><span className='text-lg text-[#f99454] font-semibold'>Our team</span></h1>
            <h3 className='text-4xl font-semibold mb-6'>Discover the Faces Behind our Succes</h3>

            <div className="flex gap-6 relative ">
    {/* Left Arrow Button */}
    <button className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-blue-700 p-3 text-white rounded-full z-10">
      <FaArrowLeft />
    </button>

    {/* Card 1 */}
    <div className="w-1/3 py-2">
      <img src={image} className="w-full "  alt="" />
    </div>
    <div className="w-1/3 py-2">
      <img src={image2} className="w-full "  alt="" />
    </div>
    <div className="w-1/3 py-2">
      <img src={image3} className="w-full "  alt="" />
    </div>

   
    

    {/* Right Arrow Button */}
    <button className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-blue-700 p-3 text-white rounded-full z-10">
      <FaArrowRight />
    </button>
  </div>
        </div>
    );
};

export default Ourteam;