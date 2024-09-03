import React from 'react';
import BuyBanner from '../../BuyPageComponents/BuyBanner/BuyBanner';
import ListedFile from '../../BuyPageComponents/ListedFile/ListedFile';
import PropertiesSheard from '../../SheardComponents/PropertiesSheard/PropertiesSheard';
import img1 from '../../assets/photos/image-3.jpg';
import img2 from '../../assets/photos/image-4.jpeg';
import img3 from '../../assets/photos/image-5.jpeg';
import Testimonial from '../../BuyPageComponents/Testimonial/Testimonial';
const Buy = () => {
    return (
        <div>
            <BuyBanner/>
            <ListedFile/>
            <PropertiesSheard title={'Popular Properties'} img1={img1} img2={img2} img3={img3}/>
            <PropertiesSheard title={'New Listed Properties'} img1={img1} img2={img2} img3={img3}/>
            <Testimonial/>
        </div>
    );
};

export default Buy;