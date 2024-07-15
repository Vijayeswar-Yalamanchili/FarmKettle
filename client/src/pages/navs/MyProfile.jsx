import React, { useContext, useState } from 'react'
import { Breadcrumb, Container } from 'react-bootstrap'
import AppNavbar from '../../components/AppNavbar'
import AppFooter from '../../components/AppFooter'
import { UserAuthContext } from '../../contextApi/UserContextComponent'


function MyProfile() {

  let {userAuth} = useContext(UserAuthContext)
  // console.log(userAuth)

  return <>
    <AppNavbar/>
    <Container>

      <Breadcrumb>
        <Breadcrumb.Item href='/myaccount'>My Account</Breadcrumb.Item>
        <Breadcrumb.Item active>My Profile</Breadcrumb.Item>
      </Breadcrumb>

      <h4>Profile details</h4>

      <div>
        <div>name : {userAuth[0]?.firstName} {userAuth[0]?.lastName}</div>
        <div>email : {userAuth[0]?.email}</div>
        <div>Mobile : {userAuth[0]?.mobile}</div>
      </div>

    </Container>
    <AppFooter/>
  </>
}

export default MyProfile