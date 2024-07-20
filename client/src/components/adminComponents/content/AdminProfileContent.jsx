import React from 'react'
import { Breadcrumb, Container, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function AdminProfileContent() {

    let navigate = useNavigate()

    return <>
        <Container className='my-4'>

            <Breadcrumb className='mb-2'>
                <Breadcrumb.Item onClick={ ()=> navigate('/admin/dashboard')}>Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item active>Profile</Breadcrumb.Item>
            </Breadcrumb>

            <div className='adminProfileBlock mx-auto'>
                    <div className='adminProfileData'>
                        <h4 className='text-center'>Profile details</h4>
                        <div>
                            <h6>Firstname</h6>
                            <p className='adminProfileTextField mb-0'>a</p>
                        </div>
                        <hr />
                        <div>
                            <h6>Lastname</h6>
                            <p className='adminProfileTextField mb-0'>a</p>
                        </div>
                        <hr />
                        <div>
                            <h6>Email</h6>
                            <p className='adminProfileTextField mb-0'>a</p>
                        </div>
                        <hr />
                        <div>
                            <h6>Mobile</h6>
                            <p className='adminProfileTextField mb-0'>a</p>
                        </div>
                    </div>
                    <Button type='button' style={{width : "100%"}} className='mt-5' >Edit details</Button>
                </div>

        </Container>
    </>
}

export default AdminProfileContent