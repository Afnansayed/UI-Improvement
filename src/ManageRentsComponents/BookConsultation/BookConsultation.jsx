import React from 'react';
import img from '../../assets/photos/image-15.jpg'
const BookConsultation = () => {
    return (
        <div className='p-8 flex justify-between mb-12'>
            <div className='w-1/2'>
            <h1 className='flex gap-2 items-center'><p className='h-1 bg-[#f99454] w-20'></p><span className='text-lg text-[#f99454] font-semibold'>Meet the Team For Book Consultation</span></h1>
            <h3 className='text-4xl font-semibold'>Meeting the stewards of the <br /> heritage journey</h3>
            <p className='text-clip'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, quisquam? Perferendis dignissimos ex voluptatem consequuntur nulla explicabo tenetur  nostrum?
            </p>

            <p className='p-2 text-[#fff] bg-blue-500 w-1/3 text-center mt-6'>Book Consultation Now</p>
            </div>
            <div className='w-[30%]'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default BookConsultation;