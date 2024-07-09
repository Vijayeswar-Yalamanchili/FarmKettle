import React from 'react'
import { Container } from 'react-bootstrap'
import AppNavbar from '../../components/AppNavbar'
import AppFooter from '../../components/AppFooter'

function Login() {
  return <>
    <AppNavbar/>
    <Container>
      <div>login</div>
    </Container>
    <AppFooter/>
  </>
}

export default Login