import React, { useState } from 'react'
import { Container, Image, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { jwtDecode } from 'jwt-decode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faBars, faBasketShopping, faCartShopping, faHeartPulse, faHouse, faList, faPhone, faPowerOff, faRectangleList, faRightToBracket, faUserGear, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import logo from '../../assets/farmkettleAdmin.png'

function AdminNavbar() {
    const [respMenu, setRespMenu] = useState(false)
    const handleRespMenu = () => setRespMenu(!respMenu)
    
    return <>
    <div style={{backgroundColor : "blue", height : "5rem"}}>
            <div className='d-flex justify-content-between align-items-center px-3'>
                <Image src={logo} height={80} onClick={()=> navigate('/admin')}/>
                <div className='adminNavs d-flex'>
                    <Link to={'/admin'} className='adminNavTab' style={{textDecoration : "none",color : "white"}}>
                        <Button variant='outline-light' className='adminNavBtn'>Login</Button>
                    </Link>
                    <Link to={'/admin/register'} className='adminNavTab' style={{textDecoration : "none",color : "white"}}>
                        <Button variant='outline-light' className='adminNavBtn'>Register</Button>
                    </Link>
                    <Button variant='none' className='adminAuthBtns' onClick={()=>handleRespMenu()}>
                        <FontAwesomeIcon icon={faBars} style={{ height : '1.5rem', color : "white"}}/>
                    </Button>
                </div>
            </div>               
        </div>

        {
            respMenu ?
                <div className="adminRespMenuDrpdwn list-group list-group-flush px-1">
                    <Link to={`/`} className="listMenu list-group-item list-group-item-action">
                        <span className='d-flex align-items-center justify-content-start' style={{gap:"15px"}}>
                            <FontAwesomeIcon icon={faHouse} size='xl' style={{color: "blue", width:"18px", height:"16px"}}/>Login
                        </span>
                    </Link>
                    <Link to={`/about`} className="listMenu list-group-item list-group-item-action">
                        <span className='d-flex align-items-center justify-content-start' style={{gap:"15px"}}>
                            <FontAwesomeIcon icon={faAddressCard} size='xl' style={{color: "blue", width:"18px", height:"16px"}}/>Register
                        </span>
                    </Link>                    
                </div> 
                :
                null
        }
    </>
}

export default AdminNavbar