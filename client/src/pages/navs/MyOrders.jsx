import React from 'react'
import AppNavbar from '../../components/AppNavbar'
import AppFooter from '../../components/AppFooter'
import OrdersContent from '../../components/contents/OrdersContent'

function MyOrders() {
    return <>
    <AppNavbar/>
    <OrdersContent/>
    <AppFooter/>
    </>
}

export default MyOrders