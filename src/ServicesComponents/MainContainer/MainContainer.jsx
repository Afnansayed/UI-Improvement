import React from 'react';
import Container from '../Container/Container';
import Container2 from '../Container2/Container2';

const MainContainer = () => {
    return (
        <div className='grid grid-cols-3 gap-6'>
              <div className='col-span-2'>
                  <Container/>
              </div>
              <div>
                 <Container2/>
              </div>
        </div>
    );
};

export default MainContainer;            
