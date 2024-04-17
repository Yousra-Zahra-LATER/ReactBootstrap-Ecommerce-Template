import React, { Fragment } from 'react'
import Header from './Header'
import SectionNumber from './SectionNumber'
import About from './About'
import DarkVariantExample from './Carsousels'
import Barre from './Barre'

export default function Home() {
  return (
    <Fragment> 
     <Header/>
     <SectionNumber/> 
     <About/>
     <Barre/>
     </Fragment>
  )
}
