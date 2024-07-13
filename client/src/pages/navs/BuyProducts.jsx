import React from 'react'
import { Container } from 'react-bootstrap'
import AppNavbar from '../../components/AppNavbar'
import AppFooter from '../../components/AppFooter'
import BuyProductContent from '../../components/contents/BuyProductContent'

function BuyProducts() {
    return <>
        <AppNavbar/>
        <BuyProductContent/>
        <AppFooter/>
    </>
}

export default BuyProducts