import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

const ListedFile = () => {
    return (
        <div className='p-8 flex flex-wrap gap-6'>
             <div className='p-8 bg-[#fdf0e7] w-[23%]'>
                <h3 className='text-4xl font-bold text-orange-400'>2k+</h3>
                <p>New Flat Listed</p>

                <div className='text-orange-400 flex items-center justify-between mt-4'>
                    <h3>View all</h3>
                    <p className='border-2 border-orange-400 p-2 rounded-full'><FaArrowDown/></p>
                </div>
             </div>
             <div className='p-8 bg-[#ecf5ff] w-[23%]'>
                <h3 className='text-4xl font-bold text-blue-600'>2k+</h3>
                <p>New Flat Listed</p>

                <div className='text-blue-600 flex items-center justify-between mt-4'>
                    <h3>View all</h3>
                    <p className='border-2 border-blue-600 p-2 rounded-full'><FaArrowDown/></p>
                </div>
             </div>
             <div className='p-8 bg-[#fdf0e7] w-[23%]'>
                <h3 className='text-4xl font-bold text-orange-400'>2k+</h3>
                <p>New Flat Listed</p>

                <div className='text-orange-400 flex items-center justify-between mt-4'>
                    <h3>View all</h3>
                    <p className='border-2 border-orange-400 p-2 rounded-full'><FaArrowDown/></p>
                </div>
             </div>
             <div className='p-8 bg-[#ecf5ff] w-[23%]'>
                <h3 className='text-4xl font-bold text-blue-600'>2k+</h3>
                <p>New Flat Listed</p>

                <div className='text-blue-600 flex items-center justify-between mt-4'>
                    <h3>View all</h3>
                    <p className='border-2 border-blue-500 text-blue-600 p-2 rounded-full'><FaArrowDown/></p>
                </div>
             </div>
        </div>
    );
};

export default ListedFile;