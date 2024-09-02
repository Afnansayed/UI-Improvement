import React from 'react';
import VideoPlayedTwo from './../VideoPlayedTwo/videoPlayedTwo';
import videothree from '../../../assets/videos/istockphoto-1398606357-640_adpp_is.mp4';
import imageThree from '../../../assets/photos/image-1.jpeg'
import PropertyBuying from '../../../SheardComponents/PropertyBuying/PropertyBuying';

const ContentThree = () => {
    return (
        <div className='flex gap-8 w-[90%] mx-auto'>
             <PropertyBuying/>
             <VideoPlayedTwo videoSrc={videothree} imageSrc={imageThree} />
        </div>
    );
};

export default ContentThree;