import React from 'react'
import { Button, Image } from 'react-bootstrap'
import googleLogo from '../../assets/googleIcon.svg'

function OAuth() {
    return <>
        <Button type='button' variant='outline-primary' style={{width : "100%"}}>
            <Image src={googleLogo} height={30} className='me-2'/>
            SignUp with Google
        </Button>
    </>
}

export default OAuth