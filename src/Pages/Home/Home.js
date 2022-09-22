import React from 'react'
import HomeBolg from '../Blog/HomeBolg'
import Services from './Componants/Services'
import Sponcer from './Componants/Sponcer'
import OfferBanner from './OfferBanner'
import SubBanner2 from './SubBanner2'


const Home = () => {
  return (
    <div>
      <SubBanner2></SubBanner2>
      <OfferBanner></OfferBanner>
      <Sponcer></Sponcer>
      <Services></Services>
      <HomeBolg></HomeBolg>
      
    
    </div>
  )
}

export default Home