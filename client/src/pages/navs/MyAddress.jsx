import React from 'react'
import { Breadcrumb, Container } from 'react-bootstrap'
import AppNavbar from '../../components/AppNavbar'
import AppFooter from '../../components/AppFooter'

function MyAddress() {
  return <>
    <AppNavbar/>
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item href='/myaccount'>My Account</Breadcrumb.Item>
        <Breadcrumb.Item active>My Address</Breadcrumb.Item>
      </Breadcrumb>
    </Container>
    <AppFooter/>
  </>
}

export default MyAddress