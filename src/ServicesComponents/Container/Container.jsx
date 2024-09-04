import React from 'react';
import { FaLocationCrosshairs } from 'react-icons/fa6';
import Image from './Image/Image';
import Overview from './Overview/Overview';
const Container = () => {
    return (
        <div>
             <div className='shadow-lg p-2 mt-5'>
                <h1 className='text-xl font-semibold'>3 BHK Builder Floor for Sale Ram Bazar Hyderabad <span className='text-2xl font-bold ml-6 '>$ 300k</span></h1>
                <p className='text-lg'><span className='inline-block text-[#f99454] mr-6'><FaLocationCrosshairs></FaLocationCrosshairs></span> Haji Osman Ali Reoad , Mojaffar Nagar</p>
             </div>
             <div>
                <Image/>
             </div>
             <div>
                <Overview/>
             </div>
        </div>
    );
};

export default Container;