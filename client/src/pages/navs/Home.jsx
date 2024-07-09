import React from 'react'
import { Container } from 'react-bootstrap'
import AppNavbar from '../../components/AppNavbar'
import AppFooter from '../../components/AppFooter'

function Home() {
    return <>
        <AppNavbar/>
        <Container>
            <div>Home</div>
        </Container>
        <AppFooter/>
    </>
}

export default Home