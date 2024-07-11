import React, { useState } from 'react'
import { Button, Col, Card } from 'react-bootstrap'

function ProductCard({cart,setCart,cardData}) {

    let [toggle, setToggle] = useState(true)

    const handleAddCart = () => {
        setToggle(!toggle)
        setCart(cart+1)
    }

    const handleRemoveCart = () => {
        setToggle(!toggle)
        setCart(cart-1)
    }

    return <>
        <Col>
            <Card style={{ width: '18rem',border : "none",boxShadow : 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
                <Card.Img variant="top" height={220} src={cardData.productImage} />
                <Card.Body className='productCardBody'>
                    <h5 className='text-center'>{cardData.productTitle}<span style={{fontSize : "smaller"}}>{cardData.productWeight}</span></h5>
                    <p className='text-center'>{cardData.ProductDescription}</p>
                    {
                        toggle ? 
                        <Button variant="primary" onClick={handleAddCart}>Add to Cart</Button>
                        :
                        <Button variant="danger" onClick={handleRemoveCart}>Remove from Cart</Button>
                    }
                </Card.Body>
            </Card>
        </Col>
    </>
}

export default ProductCard