import React from 'react';
import ManageBanner from '../../ManageRentsComponents/ManageBanner/ManageBanner';
import ListedFile from '../../BuyPageComponents/ListedFile/ListedFile';
import DeshlineCard from '../../SheardComponents/DeshlineCard/DeshlineCard';
import OurStory from '../../ManageRentsComponents/OurStory/OurStory';
import Misson from '../../ManageRentsComponents/Mission/Misson';
import Ourteam from '../../ManageRentsComponents/OurTeam/Ourteam';
import BookConsultation from '../../ManageRentsComponents/BookConsultation/BookConsultation';
import Testimonial from '../../BuyPageComponents/Testimonial/Testimonial';

const Managerents = () => {
    return (
        <div>
           <ManageBanner/>
           <div className="max-w-7xl mx-auto">
                  <ListedFile/>
                  <OurStory/>
                  <Misson/>
                  <Ourteam/>
                  <BookConsultation/>
                  <Testimonial/>
            </div>                
        </div>
    );
};

export default Managerents;