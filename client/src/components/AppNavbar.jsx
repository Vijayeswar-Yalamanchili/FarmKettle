import React, { useContext, useState } from 'react'
import { Container, Image, Button, Badge } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import logo from '../assets/farmKettle.png'
import { CartDataContext } from '../contextApi/CartDataComponent'

function AppNavbar() {

    const navigate = useNavigate()
    let { cart} = useContext(CartDataContext)

    const [myProfile, setMyProfile] = useState(false)
    const getLoginToken = localStorage.getItem('loginToken')
    
    const handleMyProfile = () => setMyProfile(!myProfile)

    // const handleAuth = () => {
    //     get
    // } 
    return <>
        <div style={{backgroundColor : "#0E6B06", height : "5rem"}}>
            <Container className='d-flex justify-content-between align-items-center'>
                <Image src={logo} height={80} onClick={()=> navigate('/')}/>
                <div className='navs d-flex'>
                    <Link to={'/'} style={{textDecoration : "none",color : "white"}}>Home</Link>
                    <Link to={'/about'} style={{textDecoration : "none",color : "white"}}>About us</Link>
                    <Link to={'/healthCertifications'} style={{textDecoration : "none",color : "white"}}>Health & Certifications</Link>
                    <Link to={'/contact'} style={{textDecoration : "none",color : "white"}}>Contact Us</Link>
                    <Link style={{textDecoration : "none",color : "white"}} onClick={() => getLoginToken ? navigate('/buyProducts') : navigate('/login')}>Buy Products</Link>
                    {
                        getLoginToken ? 
                        <Button variant='none' className='authBtns cartBtn' onClick={()=>handleCartButton()}>
                            <FontAwesomeIcon icon={faCartShopping} style={{ height : '1.5rem'}}/>
                            <div className='cartBadge' style={{fontSize :"1.2rem"}}>{cart}</div>
                        </Button>
                        :
                        null
                    }
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