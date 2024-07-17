import React from 'react'
import { Container, Image } from 'react-bootstrap'
import logo from '../../assets/farmkettleAdmin.png'

function AdminFooter() {
    return <>
        <div style={{backgroundColor : "blue",color : "white",height : "100%"}}>
            <Container className='text-center py-4'>
                <Image src={logo} width={80} height={80}/>
                <div className='mb-3'>FARMKETTLE</div>
                <hr />
                <div style={{fontSize : "0.7em"}}>Copyright &copy; 2024 Vijayeswar Yalmanchili</div>
            </Container>
        </div>
    </>
}

export default AdminFooter