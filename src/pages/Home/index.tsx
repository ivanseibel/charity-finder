/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';

import * as SC from './styles';
import { ReactComponent as ReactLogo } from '../../public/assets/images/charity-finder-icon-blue.svg';
import { useModal } from '../../hooks/useModal';

const Home: React.FC = () => {
  const { handleModal } = useModal();

  const message = (
    <>
      <h2>Welcome to Charity Finder!</h2>
      <p>
        This site is an independent project that uses the public database made
        available by{' '}
        <a
          style={{ textDecoration: 'none' }}
          href="https://globalgiving.org"
          target="_blank"
          rel="noreferrer"
        >
          GlobalGiving.org
        </a>
        . Through this website you can find institutions around the world, learn
        about their projects and make a contribution to those who most need our
        help.
      </p>
    </>
  );

  useEffect(() => {
    handleModal(message);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SC.MainHeader>
        <SC.HeaderContainer>
          <div className="container-logo">
            <ReactLogo />
            <div className="container-logo-texts">
              <h1 className="logo-title">CharityFinder</h1>
              <span className="logo-description">Search and do good</span>
            </div>
          </div>
        </SC.HeaderContainer>
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
