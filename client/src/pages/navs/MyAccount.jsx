import React from 'react'
import AppNavbar from '../../components/AppNavbar'
import AppFooter from '../../components/AppFooter'
// import AccountContent from '../../components/contents/AccountContent'
import MyAccountContent from '../../components/contents/MyAccountContent'

function MyAccount() {
    return <>
    <AppNavbar/>
    {/* <AccountContent/> */}
    <MyAccountContent/>
    <AppFooter/>
    </>
}

export default MyAccount