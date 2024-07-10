import React from 'react'
import AppNavbar from '../../components/AppNavbar'
import AppFooter from '../../components/AppFooter'
import HomeContent from '../../components/contents/HomeContent'

function Home() {
    return <>
        <AppNavbar/>
        <HomeContent/>
        <AppFooter/>
    </>
}

export default Home