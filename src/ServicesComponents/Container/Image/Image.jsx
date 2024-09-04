import React from 'react';
import img from '../../../assets/photos/image-15.jpg'
import img2 from '../../../assets/photos/image-5.jpeg'
import img3 from '../../../assets/photos/image-6.jpeg'
import img4 from '../../../assets/banner/banner1.webp'
const Image = () => {
    return (
        <div className='relative'>
        <div className='grid grid-cols-5 gap-4 mt-5 '>
            <img src={img4} alt="" className="w-full col-span-5 h-[400px]" />
            <img src={img2} alt="" className="w-full col-span-2 h-48" />
            <img src={img3} alt="" className="w-full col-span-2 h-48" />
            <img src={img} alt="" className="w-full col-span-1 h-48" />
        </div>
        <p className='absolute bottom-24 right-12 text-gray-300 font-bold'>View More</p> 
        </div>
    );
};

export default Image;