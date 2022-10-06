import React from 'react'
import HeroBanner from '../components/HeroBanner'
import Navbar from '../components/Navbar'
import ScrollTop from '../utils/ScrollTop'

const HomeLayout = (props) => (
    <>
        <Navbar />
        <HeroBanner />
        <ScrollTop props={props}/>
    </>
)

export default HomeLayout
