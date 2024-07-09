import React from 'react'
import { Container, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/farmKettle.png'

function AppFooter() {

    let navigate = useNavigate()
    return <>
        <div style={{backgroundColor : "#0E6B06",color : "white",height : "17rem"}}>
            <Container className='text-center py-4'>
                <Image src={logo} width={80} height={80}/>
                <div className='mb-3'>FARMKETTLE</div>
                <div className='footerMenu mx-auto'>
                    <p onClick={()=>navigate('/')}>Home</p>
                    <p onClick={()=>navigate('/about')}>About us</p>
                    <p onClick={()=>navigate('/healthCertifications')}>Health & Certifications</p>
                    <p onClick={()=>navigate('/contact')}>Contact us</p>
                </div>
                <hr />
                <div style={{fontSize : "0.7em"}}>Copyright &copy; 2024 Vijayeswar Yalmanchili</div>
            </Container>
        </div>
    </>
}

export default AppFooter