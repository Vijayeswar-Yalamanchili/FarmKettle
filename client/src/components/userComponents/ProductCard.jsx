import React, { useState } from 'react'
import { Button, Col, Card, Image } from 'react-bootstrap'
import { toast } from 'react-toastify'
import AxiosService from '../../utils/AxiosService'
import ApiRoutes from '../../utils/ApiRoutes'
import { jwtDecode } from 'jwt-decode'

function ProductCard({cart,setCart,cardData}) {

    let [toggle, setToggle] = useState(true)
    let getLoginToken = localStorage.getItem('loginToken')
    let decodedToken = jwtDecode(getLoginToken)
    let id = decodedToken.id

    const handleAddCart = async(productId) => {
        try {
            let res = await AxiosService.put(`${ApiRoutes.ADDCARTLIST.path}/${productId}/${id}`,{ headers : { 'Authentication' : `${getLoginToken}` }})
            console.log("Adding : ", res.data)
            if(res.status === 200) {
                setToggle(false)
                setCart(cart+1)
            }
        } catch (error) {
            toast.error(error.response.data.message || error.message)
        }
    }

    const handleRemoveCart = async(productId) => {
        try {
            let res = await AxiosService.put(`${ApiRoutes.REMOVECARTLIST.path}/${productId}/${id}`,{ headers : { 'Authentication' : `${getLoginToken}` }})
            console.log("Removal : ", res.data)
            if(res.status === 200) {
                setToggle(true)
                setCart(cart-1)
            }
        } catch (error) {
            toast.error(error.response.data.message || error.message)
        }
    }

    return <>
        <Col>
            <Card style={{ width: '18rem',border : "none",boxShadow : 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
                <Image height={180} src={`http://localhost:8000/${cardData.productImage}`} style={{borderRadius : "5px"}}/>
                <Card.Body className='productCardBody'>
                    <h5 className='text-center'>{cardData.productTitle}<span style={{fontSize : "smaller"}}> ({cardData.productWeight})</span></h5>
                    <p className='text-center'>{cardData.productDescription}</p>
                    {
                        toggle ? 
                        <Button variant="primary" onClick={() => handleAddCart(cardData._id)}>Add to Cart</Button>
                        :
                        <Button variant="danger" onClick={() => handleRemoveCart(cardData._id)}>Remove from Cart</Button>
                    }
                </Card.Body>
            </Card>
        </Col>
    </>
}

export default ProductCard