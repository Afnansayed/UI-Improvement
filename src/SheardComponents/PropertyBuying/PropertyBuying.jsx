import React from 'react';
import { FaSearch } from 'react-icons/fa';

const PropertyBuying = () => {
    return (
        <>
          <div className='w-[592px] space-y-5'>
            <h1 className='flex gap-2 items-center'><p className='h-1 bg-[#f99454] w-20'></p><span className='text-lg text-[#f99454] font-semibold'>Property Buying</span></h1>
            <h3 className='text-4xl font-semibold'>Efficient and tranceoarent home buying solution</h3>
            <p className='text-clip'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, quisquam? Perferendis dignissimos ex voluptatem consequuntur nulla explicabo tenetur eius nostrum?
            </p>
            <div className='text-blue-500 flex items-center gap-3 bg-[#ecf5ff] p-2 w-1/4'> <span><FaSearch/></span> Find Property</div>
          </div>  
        </>
    );
};

export default PropertyBuying;