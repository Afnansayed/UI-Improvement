import React from 'react';
import Othersevices from '../../componets/landingPageComponents/OtherServices/Othersevices';
import PropertyBuying from '../../SheardComponents/PropertyBuying/PropertyBuying';
import CustomButton from '../../componets/CustomButton/CustomButton';
import VideoPlayer from '../../componets/landingPageComponents/VideoPlayed/VideoPlayer';
import ContentOne from '../../componets/landingPageComponents/ContentOne/ContentOne';
import ContentTwo from '../../componets/landingPageComponents/ContentTwo/ContenTwo'
import ContentThree from './../../componets/landingPageComponents/ContentThee/ContentThree';
const Home = () => {
    return (
        <div>
           
            <ContentOne/>
            <ContentThree/>
            <ContentTwo/>
            <Othersevices/>
        </div>
    );
};

export default Home;