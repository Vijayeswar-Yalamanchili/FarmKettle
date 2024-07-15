import React, { useContext, useState } from 'react'
import { Container, Image, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { jwtDecode } from 'jwt-decode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faBars, faBasketShopping, faCartShopping, faHeartPulse, faHouse, faList, faPhone, faPowerOff, faRectangleList, faRightToBracket, faUserGear, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import logo from '../assets/farmKettle.png'
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'
import { useLogout } from '../hooks/UseLogout'
import { CartDataContext } from '../contextApi/CartDataComponent'
import { UserAuthContext } from '../contextApi/UserContextComponent'


function AppNavbar() {

    const navigate = useNavigate()
    let logout = useLogout()
    let { cart } = useContext(CartDataContext)
    let {userAuth} = useContext(UserAuthContext)

    const [myProfile, setMyProfile] = useState(false)
    const [respMenu, setRespMenu] = useState(false)
    const getLoginToken = localStorage.getItem('loginToken')
    
    const handleMyProfile = () => setMyProfile(!myProfile)
    const handleRespMenu = () => setRespMenu(!respMenu)

    const handleLogout = async() => {
        try {     
          const decodedToken = jwtDecode(getLoginToken)
          const id = decodedToken.id 
          let res = await AxiosService.put(`${ApiRoutes.LOGOUT.path}/${id}`,{ headers : { 'Authorization' : ` ${getLoginToken}`}})
          if(res.status === 200){
            logout()
          }
        } catch (error) {
            console.log(error)
          toast.error(error.response.data.message || error.message)
        }
    }

    return <>
        <div style={{backgroundColor : "#0E6B06", height : "5rem"}}>
            <div className='d-flex justify-content-between align-items-center px-3'>
                <Image src={logo} height={80} onClick={()=> navigate('/')}/>
                <div className='navs d-flex'>
                    <Link className='navTab' to={'/'} style={{textDecoration : "none",color : "white"}}>Home</Link>
                    <Link className='navTab' to={'/about'} style={{textDecoration : "none",color : "white"}}>About us</Link>
                    <Link className='navTab' to={'/healthCertifications'} style={{textDecoration : "none",color : "white"}}>Health & Certifications</Link>
                    <Link className='navTab' to={'/contact'} style={{textDecoration : "none",color : "white"}}>Contact Us</Link>
                    <Link className='navTab' style={{textDecoration : "none",color : "white"}} onClick={() => getLoginToken ? navigate('/buyProducts') : navigate('/login')}>Buy Products</Link>
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
                    <Button variant='none' className='authBtns respBtn' onClick={()=>handleRespMenu()}>
                        <FontAwesomeIcon icon={faBars} style={{ height : '1.5rem'}}/>
                    </Button>
                </div>
            </div>               
        </div>

        {
            myProfile ? 
                getLoginToken ?
                    <div className="myProfileDrpdwn list-group list-group-flush px-1">
                        <div className="listMenu list-group-item list-group-item-action"><b style={{textTransform : 'capitalize'}}>Hi, {userAuth[0]?.firstName}</b></div>
                        <Link to={`/myaccount`} className="listMenu list-group-item list-group-item-action">
                            <span className='d-flex align-items-center' style={{gap:"15px"}}>
                                <FontAwesomeIcon icon={faUserGear} size='xl' style={{color: "#0E6B06", width:"18px", height:"16px"}}/>My Account
                            </span>
                        </Link>
                        <Link to={`/myorders`} className="listMenu list-group-item list-group-item-action">
                            <span className='d-flex align-items-center' style={{gap:"15px"}}>
                                <FontAwesomeIcon icon={faRectangleList} size='xl' style={{color: "#0E6B06", width:"18px", height:"16px"}}/>My Orders
                            </span>
                        </Link>
                        <Link className="listMenu list-group-item list-group-item-action" onClick={handleLogout}>
                            <span className='d-flex align-items-center' style={{gap:"15px"}}>
                                <FontAwesomeIcon icon={faPowerOff} size='xl' style={{color: "#0E6B06", width:"18px", height:"16px"}}/>Logout
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

        {
            respMenu ?
                <div className="myRespMenuDrpdwn list-group list-group-flush px-1">
                    <Link to={`/`} className="listMenu list-group-item list-group-item-action">
                        <span className='d-flex align-items-center justify-content-start' style={{gap:"15px"}}>
                            <FontAwesomeIcon icon={faHouse} size='xl' style={{color: "#0E6B06", width:"18px", height:"16px"}}/>Home
                        </span>
                    </Link>
                    <Link to={`/about`} className="listMenu list-group-item list-group-item-action">
                        <span className='d-flex align-items-center justify-content-start' style={{gap:"15px"}}>
                            <FontAwesomeIcon icon={faAddressCard} size='xl' style={{color: "#0E6B06", width:"18px", height:"16px"}}/>About Us
                        </span>
                    </Link>
                    <Link to={`/healthCertifications`} className="listMenu list-group-item list-group-item-action">
                        <span className='d-flex align-items-center justify-content-start' style={{gap:"15px"}}>
                            <FontAwesomeIcon icon={faHeartPulse} size='xl' style={{color: "#0E6B06", width:"18px", height:"16px"}}/>Health & Certifications
                        </span>
                    </Link>
                    <Link to={`/contact`} className="listMenu list-group-item list-group-item-action">
                        <span className='d-flex align-items-center justify-content-start' style={{gap:"15px"}}>
                            <FontAwesomeIcon icon={faPhone} size='xl' style={{color: "#0E6B06", width:"18px", height:"16px"}}/>Contact Us
                        </span>
                    </Link>
                    <Link className="listMenu list-group-item list-group-item-action" onClick={() => getLoginToken ? navigate('/buyProducts') : navigate('/login')}>
                        <span className='d-flex align-items-center justify-content-start' style={{gap:"15px"}}>
                            <FontAwesomeIcon icon={faBasketShopping} size='xl' style={{color: "#0E6B06", width:"18px", height:"16px"}}/>Buy Products
                        </span>
                    </Link>
                </div> 
                :
                null
        }
    </>
}

export default AppNavbar