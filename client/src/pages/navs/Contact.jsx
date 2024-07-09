import React from 'react'
import { Container } from 'react-bootstrap'
import AppNavbar from '../../components/AppNavbar'
import AppFooter from '../../components/AppFooter'

function Contact() {
  return <>
    <AppNavbar/>
    <Container>
        <div>Contact us</div>
    </Container>
    <AppFooter/>
  </>
}

export default Contact