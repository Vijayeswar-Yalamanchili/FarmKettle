import React, { useState } from 'react'
import { Container, Image, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import logo from '../assets/farmKettle.png'

function AppNavbar() {

    const navigate = useNavigate()
    const [myProfile, setMyProfile] = useState(false)
    const getLoginToken = localStorage.getItem('loginToken')
    
    const handleMyProfile = () => setMyProfile(!myProfile)

    return <>
        <div style={{backgroundColor : "#0E6B06", height : "5rem"}}>
            <Container className='d-flex justify-content-between align-items-center'>
                <Image src={logo} height={80} onClick={()=> navigate('/')}/>
                <div className='navs d-flex'>
                    <Link to={'/'} style={{textDecoration : "none",color : "white"}}>Home</Link>
                    <Link to={'/about'} style={{textDecoration : "none",color : "white"}}>About us</Link>
                    <Link to={'/healthCertifications'} style={{textDecoration : "none",color : "white"}}>Health & Certifications</Link>
                    <Link to={'/buyProducts'} style={{textDecoration : "none",color : "white"}}>Buy Products</Link>
                    <Button variant='none' className='authBtns' onClick={()=>handleMyProfile()}>
                        <FontAwesomeIcon icon={faUser} style={{ height : '1.5rem'}}/>
                    </Button>
                </div>
            </Container>               
        </div>

        <div>
      {
        myProfile ? 
            getLoginToken ?
                <div className="myProfileDrpdwn list-group list-group-flush px-1">
                    <Link to={'/logout'} className="listMenu list-group-item list-group-item-action">
                    <span className='d-flex align-items-center' style={{gap:"15px"}}>
                        <FontAwesomeIcon icon={faRightToBracket} size='xl' style={{color: "#0E6B06", width:"18px", height:"16px"}}/>Login
                    </span>
                    </Link>
                    <Link to={`/myaccout`} className="listMenu list-group-item list-group-item-action">
                    <span className='d-flex align-items-center' style={{gap:"15px"}}>
                        <FontAwesomeIcon icon={faUserPlus} size='xl' style={{color: "#0E6B06", width:"18px", height:"16px"}}/>Register
                    </span>
                    </Link>
                </div> 
                :
                <div className="myProfileDrpdwn list-group list-group-flush px-1">
                    <Link to={'/login'} className="listMenu list-group-item list-group-item-action">
                    <span className='d-flex align-items-center' style={{gap:"15px"}}>
                        <FontAwesomeIcon icon={faRightToBracket} size='xl' style={{color: "#0E6B06", width:"18px", height:"16px"}}/>Login
                    </span>
                    </Link>
                    <Link to={`/register`} className="listMenu list-group-item list-group-item-action">
                    <span className='d-flex align-items-center' style={{gap:"15px"}}>
                        <FontAwesomeIcon icon={faUserPlus} size='xl' style={{color: "#0E6B06", width:"18px", height:"16px"}}/>Register
                    </span>
                    </Link>
                </div> 
          : null
      }
    </div>
    </>
}

export default AppNavbar