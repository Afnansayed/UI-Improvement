import React from 'react';

const DeshlineCard = ({bgColor ,title}) => {
    return (
        <div style={{backgroundColor: `${bgColor}`}} className='w-[592px] p-6'>
             <div className='w-[592px] space-y-5'>
            <h1 className='flex gap-2 items-center'><p className='h-1 bg-[#f99454] w-20'></p><span className='text-lg text-[#f99454] font-semibold'>{title}</span></h1>
            <h3 className='text-4xl font-semibold'>Efficient and tranceoarent home buying solution</h3>
            <p className='text-clip'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, quisquam? Perferendis dignissimos ex voluptatem consequuntur nulla explicabo tenetur  nostrum?
            </p>
           
          </div>  
        </div>
    );
};

export default DeshlineCard;