import React from 'react'
import {Button} from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import userErrorScreenAnime from '../assets/userErrorScreenAnime.svg'

function UserErrorScreen() {

  const navigate = useNavigate();

  const handleErrorPage = () => {
    let getToken = localStorage.getItem('loginToken')
    if(getToken === null){
      navigate('/login')
    }else{
      const decodedToken = jwtDecode(getToken)
      navigate('/')
    }
  }

  return <>
    <div className='mx-auto d-flex flex-column justify-content-between align-items-center'>
      <img src={userErrorScreenAnime} alt="errorscreen" style={{width : "40%",height : "40%"}} />      
      <Button onClick={()=> handleErrorPage()} style={{width : "max-content"}}>Go to Home</Button>
    </div>
  </>
}

export default UserErrorScreen