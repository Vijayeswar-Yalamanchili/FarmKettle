import React from 'react'
import { Card, Image, Col, Button } from 'react-bootstrap'
import { toast } from 'react-toastify'
import AxiosService from '../../utils/AxiosService'
import ApiRoutes from '../../utils/ApiRoutes'

function AdminProductCard({e}) {

    let getAdminLoginToken = localStorage.getItem('adminLoginToken')

    const handleEditProduct = async(pId) => {
        console.log("edit : ",pId)
    }

    const handleDeleteProduct = async(pId) => {
        try {
            let res = await AxiosService.delete(`${ApiRoutes.ADMINDELETEPRODUCT.path}/${pId}`, { headers : {
                'Authorization' : `${getAdminLoginToken}`
            }})
        } catch (error) {
            toast.error(error.response.data.message || error.message)
        }
    }

    return <>
        <Col>
            <Card style={{ width: '18rem',border : "none", borderRadius : "5px",boxShadow : 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
                <Image height={220} src={`http://localhost:8000/${e.productImage}`} style={{borderRadius : "5px"}}/>
                <Card.Body className='productCardBody'>
                    <h5 className='text-center'>{e.productTitle}<span style={{fontSize : "smaller"}}>({e.productWeight})</span></h5>
                    <p className='text-center'>{e.productDescription}</p>
                    <div className='d-flex justify-content-around'>
                        <Button variant="secondary" onClick={() => handleEditProduct(e._id)}>Edit Product</Button>
                        <Button variant="danger" onClick={() => handleDeleteProduct(e._id)}>Delete Product</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    </>
}

export default AdminProductCard