import React from 'react';
import { FaHome } from 'react-icons/fa';
const Othersevices = () => {
    return (
        <div className='my-12'>
             <h3 className='text-3xl font-semibold text-center mb-8'>Other Services</h3>
             <div className='flex justify-between gap-3 w-[90%] mx-auto'>
                <div className='bg-[#ecf5ff] p-5 w-[384px] flex gap-8 rounded-sm'>
                <span><FaHome className='text-2xl text-[#ee6611]'/></span>
                    <div className=' '>
                        
                        <h1 className=' font-semibold text-xl mb-2'>Advance Property <br /> Search</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </div>
                <div className='bg-[#ecf5ff] p-5 w-[384px] flex gap-8 rounded-sm'>
                <span><FaHome className='text-2xl text-[#ee6611]'/></span>
                    <div className=' '>
                        
                        <h1 className=' font-semibold text-xl mb-2'>Advance Property <br /> Search</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </div>
                <div className='bg-[#ecf5ff] p-5 w-[384px] flex gap-8 rounded-sm'>
                <span><FaHome className='text-2xl text-[#ee6611]'/></span>
                    <div className=' '>
                        
                        <h1 className=' font-semibold text-xl mb-2'>Advance Property <br /> Search</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default Othersevices;