import React from 'react'
import AppNavbar from '../../components/userComponents/AppNavbar'
import AppFooter from '../../components/userComponents/AppFooter'
import HealthCertificationsContent from '../../components/userComponents/contents/HealthCertificationsContent'

function HealthCertifications() {
  return <>
    <AppNavbar/>
      <HealthCertificationsContent/>
    <AppFooter/>
  </>
}

export default HealthCertifications