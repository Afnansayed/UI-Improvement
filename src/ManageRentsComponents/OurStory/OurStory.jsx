import React from 'react';
import img from '../../assets/photos/photos-8.jpg'
import DeshlineCard from '../../SheardComponents/DeshlineCard/DeshlineCard';
const OurStory = () => {
    return (
        <div className='relative mb-40 p-8'>
              <div>
                <img src={img} className='max-w-3xl' alt="" />
              </div>
              <div className='absolute bottom-[-100px] right-[100px]'>
                <DeshlineCard bgColor={'#ecf5ff'} title={'Our Story'} />
              </div>
        </div>
    );
};

export default OurStory;