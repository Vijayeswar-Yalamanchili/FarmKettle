import React, { useContext, useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { jwtDecode } from 'jwt-decode'
import { CartDataContext } from '../../../contextApi/CartDataComponent'
import ProductCard from '../ProductCard'
import AxiosService from '../../../utils/AxiosService'
import ApiRoutes from '../../../utils/ApiRoutes'

function BuyProductContent() {

    let { cart, setCart} = useContext(CartDataContext)
    const [productCardData,setProductCardData] = useState([])

    let getLoginToken = localStorage.getItem('loginToken')
    let decodedToken = jwtDecode(getLoginToken)
    let id = decodedToken.id

    const getProductsData = async() => {
        try {
            let res = await AxiosService.get(`${ApiRoutes.GETALLPRODUCTS.path}/${id}`,{ headers : { 
                'Authorization' : `${getLoginToken}`
            }})
            if(res.status === 200) {
                setProductCardData(res.data.productsList)
            }
        } catch (error) {
            toast.error(error.response.data.message || error.message)
        }
    }

    useEffect(() => {
        getProductsData()
    },[productCardData])

    return <> 
        <Container className='my-4'>
            <div className='d-flex justify-content-between align-items-center'> 
                <h4>PRODUCTS LIST</h4>
            </div>
            <div className='productCard mt-4'>
                <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {
                    productCardData && productCardData.map((e,i) => {
                        return <ProductCard cart={cart} setCart={setCart} cardData={e} key={i}/>
                    })
                }
                </Row>
            </div>
        </Container>
    </>
}

export default BuyProductContent