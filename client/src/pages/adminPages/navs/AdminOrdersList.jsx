import React from 'react'
import AdminNavbar from '../../../components/adminComponents/AdminNavbar'
import AdminFooter from '../../../components/adminComponents/AdminFooter'
import AdminOrdersContent from '../../../components/adminComponents/content/AdminOrdersContent'

function AdminOrdersList() {
  return <>
    <AdminNavbar/>
    <AdminOrdersContent/>
    <AdminFooter/>
  </>
}

export default AdminOrdersList