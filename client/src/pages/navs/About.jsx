import React from 'react'
import { Container } from 'react-bootstrap'
import AppNavbar from '../../components/AppNavbar'
import AppFooter from '../../components/AppFooter'

function About() {
    return <>
        <AppNavbar/>
        <Container>
            <div>About us</div>
        </Container>
        <AppFooter/>
    </>
}

export default About