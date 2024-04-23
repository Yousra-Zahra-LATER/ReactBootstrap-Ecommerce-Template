import React, { Fragment } from 'react'
import Header from './Header'
import SectionNumber from './SectionNumber'
import Barre from './Barre'
import FAQ from './FAQ'
import Reviews from './Reviews'
import AboutSection from './AboutSection'
import IngredientsSection from './IngredientSection'
import ParallaxSection from './ParallaxSection'
import BlogSection from './BlogSection'

export default function Home() {
  return (
    <Fragment> 
     <Header/>
     <SectionNumber/> 
     <AboutSection/>
     <IngredientsSection/>
     <ParallaxSection/>
     <BlogSection/>
     <Reviews/>
     <FAQ/>
     <Barre/>
     </Fragment>
  )
}
