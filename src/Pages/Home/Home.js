import React from 'react'
import HomeBolg from '../Blog/HomeBolg'
import CateiogoryProducts from '../Products/CateiogoryProducts'
import NewProducts from '../Products/NewProducts'
import RecommendenProducts from '../Products/RecommendenProducts'
import HomeBanner from './Componants/HomeBanner'
import Services from './Componants/Services'
import Sponcer from './Componants/Sponcer'
import OfferBanner from './OfferBanner'
import SubBanner2 from './SubBanner2'


const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <SubBanner2></SubBanner2>
      <OfferBanner></OfferBanner>
      <Sponcer></Sponcer>
      <Services></Services>

      <CateiogoryProducts></CateiogoryProducts>
      <RecommendenProducts></RecommendenProducts>
      <NewProducts></NewProducts>
      <HomeBolg></HomeBolg>
      
    
    </div>
  )
}

export default Home