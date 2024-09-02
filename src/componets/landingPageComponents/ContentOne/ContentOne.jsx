import React from 'react';
import VideoPlayer from '../VideoPlayed/VideoPlayer';
import video1 from '../../../assets/videos/7578552-uhd_3840_2160_30fps.mp4';
import image from '../../../assets/photos/image-1.jpeg';
import PropertyBuying from '../../../SheardComponents/PropertyBuying/PropertyBuying';

const ContentOne = () => {
    return (
        <div className='flex gap-8 w-[90%] mx-auto'>
            <VideoPlayer videoSrc={video1} imageSrc={image}/>
            <PropertyBuying/>
        </div>
    );
};

export default ContentOne;