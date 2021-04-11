import React from 'react';
import HomeBanner from '../../../components/homeBanner';
import Search from '../../../components/search';
import HomeStaticContent from '../../../components/homeStaticContent';
import Elem from './styles';

const LandingPage = () => {
  
  return (
    <Elem.LandingWrapper>
      <HomeBanner />
      <Search />
      <HomeStaticContent />
    </Elem.LandingWrapper>
  );
}

export default LandingPage;