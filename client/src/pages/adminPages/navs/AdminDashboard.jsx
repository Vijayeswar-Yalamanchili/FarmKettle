import React from 'react'
import AdminNavbar from '../../../components/adminComponents/AdminNavbar'
import AdminFooter from '../../../components/adminComponents/AdminFooter'
import AdminDashboardContent from '../../../components/adminComponents/content/AdminDashboardContent'

function AdminDashboard() {
  return <>
    <AdminNavbar/>
    <AdminDashboardContent/>
    <AdminFooter/>
  </>
}

export default AdminDashboard