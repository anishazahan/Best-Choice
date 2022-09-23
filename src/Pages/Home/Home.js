import React from 'react'
import BlogDetails from '../Blog/BlogDetails'
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
      <RecommendenProducts></RecommendenProducts>
      <OfferBanner></OfferBanner>
      <CateiogoryProducts></CateiogoryProducts>
      <Services></Services>
      <NewProducts></NewProducts>
      <HomeBolg></HomeBolg>
      <Sponcer></Sponcer>
      
      <BlogDetails></BlogDetails>
    </div>
  )
}

export default Home