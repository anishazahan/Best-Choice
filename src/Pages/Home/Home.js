import React from 'react'
import Subscribe from '../../Shared/Subscribe/Subscribe'
import BlogDetails from '../Blog/BlogDetails'
import HomeBolg from '../Blog/HomeBolg'
import CateiogoryProducts from '../Products/CateiogoryProducts'
import NewProducts from '../Products/NewProducts'
import RecommendenProducts from '../Products/RecommendenProducts'
import FeatureProducts from '../Products2/FeatureProducts'
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
      <FeatureProducts></FeatureProducts>
      {/* <RecommendenProducts></RecommendenProducts> */}
      <OfferBanner></OfferBanner>
      <CateiogoryProducts></CateiogoryProducts>
      <Services></Services>
      {/* <NewProducts></NewProducts> */}
      <HomeBolg></HomeBolg>
      <Sponcer></Sponcer>
      <Subscribe></Subscribe>

    </div>
  )
}

export default Home




