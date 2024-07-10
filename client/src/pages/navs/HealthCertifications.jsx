import React from 'react'
import AppNavbar from '../../components/AppNavbar'
import AppFooter from '../../components/AppFooter'
import HealthCertificationsContent from '../../components/contents/HealthCertificationsContent'

function HealthCertifications() {
  return <>
    <AppNavbar/>
      <HealthCertificationsContent/>
    <AppFooter/>
  </>
}

export default HealthCertifications