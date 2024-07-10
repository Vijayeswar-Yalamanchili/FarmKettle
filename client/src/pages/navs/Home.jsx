import React from 'react'
import { Container } from 'react-bootstrap'
import AppNavbar from '../../components/AppNavbar'
import AppFooter from '../../components/AppFooter'
import HomeContent from '../../components/HomeContent'

function Home() {
    return <>
        <AppNavbar/>
        <Container>
            <HomeContent/>
        </Container>
        <AppFooter/>
    </>
}

export default Home