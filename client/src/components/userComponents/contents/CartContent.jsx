import React, { useContext, useEffect, useState } from 'react'
import { Card, Container, Image } from 'react-bootstrap'
import pic from '../../../assets/blackTea.png'
import { toast } from 'react-toastify'
import { jwtDecode } from 'jwt-decode'
import { CartDataContext } from '../../../contextApi/CartDataComponent'
import AxiosService from '../../../utils/AxiosService'
import ApiRoutes from '../../../utils/ApiRoutes'

function CartContent() {

  let { setCart,cart } = useContext(CartDataContext)
  const [quantity, setQuantity] = useState(1)
  const [cartItem, setCartItem] = useState([])
  let getLoginToken = localStorage.getItem('loginToken')
  let decodedToken = jwtDecode(getLoginToken)
  let id = decodedToken.id

  const addQuantity = () => {
      setQuantity(quantity+1)
  }
  const removeQuantity = (productId) => {
      quantity >= 2 ? setQuantity(quantity-1) : handleRemoveCart(productId)
  }

  const handleRemoveCart = async(productId) => {
    try {
        let res = await AxiosService.put(`${ApiRoutes.REMOVECARTLIST.path}/${productId}/${id}`,{ headers : { 'Authentication' : `${getLoginToken}` }})
        if(res.status === 200) {
            setCart(cart-1)
        }
    } catch (error) {
        toast.error(error.response.data.message || error.message)
    }
}

  const getCartItem = async() => {
    try {
      let res = await AxiosService.get(`${ApiRoutes.GETCARTITEMS.path}/${id}`,{ headers : { 'Authorization' : `${getLoginToken}` }})
      if (res.status === 200) {
        setCartItem(res.data.cartItems)
      }      
    } catch (error) {
      toast.error(error.response.data.message || error.message)
    }
  }

  useEffect(()=> {
    getCartItem()
  },[cartItem])

  return  <>
    <Container className='my-5'>
      {
        cartItem.length > 0 ? cartItem.map((e,i)=> {
            return <Card className='cartItemCard d-flex mx-auto mb-3' key={i}>
              <div className='cartItemCardImage'>
                {/* <Image src={`http://localhost:8000/${e.productImage}`} style={{width : "100%",height : "100%"}}/> */}
                <Image src={`https://farmkettle.onrender.com/${e.productImage}`} style={{width : "100%",height : "100%"}}/>
              </div>
              <Card.Body className='cartItemCardBody d-flex my-3'>
                <div>
                  <Card.Title>{e.productTitle}<span style={{fontSize : "smaller"}}> ({e.productWeight})</span></Card.Title>
                  <Card.Text>{e.productDescription}</Card.Text>
                </div>
                <div className='cartItemCardQuantity d-flex'>
                  <Card.Text style={{fontSize :"smaller"}} className='mb-0'>Delivery in 1 week</Card.Text>
                  <div className='cartItemCardCount d-flex'>
                    <button type="button" className='btn btn-outline-danger' onClick={()=>{removeQuantity(e._id)}}>-</button>
                    &nbsp;
                    <div className='py-1 quantityText'>{quantity}</div>
                    &nbsp;
                    <button type="button" className='btn btn-outline-success' onClick={()=>{addQuantity()}}>+</button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          })
          :
          <Card style={{width : "18rem"}} className='mx-auto'>
            <Card.Body className='text-center' style={{fontSize : "larger"}}>No Items in Your Cart</Card.Body>
          </Card>

      }
    </Container>  
  </>
}

export default CartContent