import React from 'react';
import Amenities from '../../ServicesComponents/Amenities/Amenities';
import Othersevices from '../../componets/landingPageComponents/OtherServices/Othersevices';
import PropertiesSheard from '../../SheardComponents/PropertiesSheard/PropertiesSheard';
import image from '../../assets/photos/image-4.jpeg';
import image2 from '../../assets/photos/image-5.jpeg';
import image3 from '../../assets/photos/image-6.jpeg';
import Container from '../../ServicesComponents/Container/Container';
const Services = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Container/>
            
            <Amenities/>
            <Othersevices/>
            <PropertiesSheard img1={image} img2={image2} img3={image3}/>
        </div>
    );
};

export default Services;