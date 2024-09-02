import React from 'react';
import VideoPlayer from '../VideoPlayed/VideoPlayer';
import PropertyBuying from '../../../SheardComponents/PropertyBuying/PropertyBuying';
import video2 from '../../../assets/videos/istockphoto-1398606357-640_adpp_is.mp4';
import image2 from '../../../assets/photos/image-2.jpg';
const ContenTwo = () => {
    return (
        <div className='flex gap-8 w-[90%] mx-auto'>
            <VideoPlayer videoSrc={video2} imageSrc={image2}/>
            <PropertyBuying/>
        </div>
    );
};

export default ContenTwo;