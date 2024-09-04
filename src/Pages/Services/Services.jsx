import React from 'react';
import Amenities from '../../ServicesComponents/Amenities/Amenities';
import Othersevices from '../../componets/landingPageComponents/OtherServices/Othersevices';
import PropertiesSheard from '../../SheardComponents/PropertiesSheard/PropertiesSheard';
import image from '../../assets/photos/image-4.jpeg';
import image2 from '../../assets/photos/image-5.jpeg';
import image3 from '../../assets/photos/image-6.jpeg';
import Container from '../../ServicesComponents/Container/Container';
import Container2 from '../../ServicesComponents/Container2/Container2';
import MainContainer from '../../ServicesComponents/MainContainer/MainContainer';
const Services = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            {/* <div className='flex justify-between'>
            <Container/>
            <Container2/>
            </div> */}
            <MainContainer/>
            <Amenities/>
            <Othersevices/>
            <PropertiesSheard img1={image} img2={image2} img3={image3}/>
        </div>
    );
};

export default Services;