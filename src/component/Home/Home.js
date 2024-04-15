import React, { Fragment } from 'react'
import Header from './Header'
import SectionNumber from './SectionNumber'
import About from './About'
import DarkVariantExample from './Carsousels'
import Footer from './../Footer/Footer'
export default function Home() {
  return (
    <Fragment> 
     <Header/>
     <SectionNumber/> 
     <About/>
     <DarkVariantExample/>
      <Footer/>
     </Fragment>
  )
}
