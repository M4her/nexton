import React from 'react'
import Banner from '../components/Banner'
import Services from '../components/Services'
import Exploring from '../components/Exploring'
import Recommendations from '../components/Recommendations'
import Sellers from '../components/Sellers'
import CollectionBanner from '../components/CollectionBanner'

const Home = () => {
  return (
    <>
    <Banner/>
    <Services/>
    <Exploring/>
    <Recommendations/>
    <Sellers/>
    <CollectionBanner/>
    </>
  )
}

export default Home