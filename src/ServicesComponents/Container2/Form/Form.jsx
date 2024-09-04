import React from 'react';

const Form = () => {
    return (
        <div className='bg-[#ecf5ff] p-8 mt-28'>
            <p>Property value</p>
            <h3 className='text-2xl font-semibold my-3'>$ 300K - $ 400K</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,</p>

            <div className='flex flex-col mt-5'>
                <label htmlFor="">Min</label>
                <input className='placeholder:text-black p-2 mt-1' type="text" placeholder='$ 300K' />
            </div>
            <div className='flex flex-col mt-5'>
                <label htmlFor="">Max</label>
                <input className='placeholder:text-black p-2 mt-1' type="text" placeholder='$ 300K' />
            </div>
            <div className='flex mt-5'>
                 <p className='w-6 bg-[#f99454] h-5 rounded-full'></p>
                 <p className='w-full h-5 bg-stone-50 rounded-sm'></p>
                 <p className='w-6 bg-[#f99454] h-5 rounded-full'></p>
            </div>
            <div  className='font-semibold flex justify-between mt-2'>
                <p>$ 200k</p>
                <p>$ 200k</p>
            </div>
            <p className='bg-blue-500 text-[#fff] font-semibold mx-auto w-1/3 text-center mt-6 p-2'>Bid Property</p>
        </div>
    );
};

export default Form;