import React from 'react';

import * as SC from './styles';

const Home: React.FC = () => {
  return (
    <>
      <SC.MainHeader>
        <SC.ContentContainer>
          <p>Home</p>
        </SC.ContentContainer>
      </SC.MainHeader>
      <SC.MainBody>
        <SC.ContentContainer>
          <p>Body</p>
        </SC.ContentContainer>
      </SC.MainBody>
      <SC.MainFooter>
        <SC.FooterContainer>
          <p>Footer</p>
        </SC.FooterContainer>
      </SC.MainFooter>
    </>
  );
};

export default Home;
