import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Container, Image, Spinner } from 'react-bootstrap'
import pic from '../../../assets/blackTea.png'
import { toast } from 'react-toastify'
import { jwtDecode } from 'jwt-decode'
import { CartDataContext } from '../../../contextApi/CartDataComponent'
import AxiosService from '../../../utils/AxiosService'
import ApiRoutes from '../../../utils/ApiRoutes'

function CartContent() {

  let { setCart,cart } = useContext(CartDataContext)
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(false)
  const [cartItem, setCartItem] = useState([])
  const [quantities, setQuantities] = useState({})
  // const [ price, setPrice ] = useState([])
  let temp=[]

  let getLoginToken = localStorage.getItem('loginToken')
  let decodedToken = jwtDecode(getLoginToken)
  let id = decodedToken.id

  const handleRemoveCart = async(productId) => {
    try {
      setLoading(true)
      let res = await AxiosService.put(`${ApiRoutes.REMOVECARTLIST.path}/${productId}/${id}`,{ headers : { 'Authentication' : `${getLoginToken}` }})
      if(res.status === 200) {
          setCart(cart-1)
      }
      setLoading(false)
    } catch (error) {
      toast.error(error.response.data.message || error.message)
    }
  }

  const getCartItem = async() => {
    try {
      let res = await AxiosService.get(`${ApiRoutes.GETCARTITEMS.path}/${id}`,{ headers : { 'Authorization' : `${getLoginToken}` }})
      let result = res.data.cartItems
      let productPrices = result.map((e) => e.price)
      if (res.status === 200) {
        setCartItem(result)
        // setPrice(productPrices)
      }      
    } catch (error) {
      toast.error(error.response.data.message || error.message)
    }
  }

  const handleQuantityChange = (productId, change) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 1) + change,
    }))
    quantities[productId] <= 0 && handleRemoveCart(productId)
  }

  const cummulativePrice = cartItem.reduce((preve,curr)=> preve + ((quantities[curr._id]  || 1)* curr?.productPrice) ,0)

  useEffect(()=> {
    getCartItem()
  },[cartItem])

  return  <>
    <Container className='my-5'>
      {
        cartItem.length > 0 ? cartItem.map((e,i)=> {

            let finalPrice =  `${e.productPrice}` * `${quantities[e._id] || 1}`

            return <Card className='cartItemCard d-flex mx-auto mb-3' key={i}>
              <div className='cartItemCardImage'>
                {/* <Image src={`http://localhost:8000/${e.productImage}`} style={{width : "100%",height : "100%"}}/> */}
                <Image src={`https://farmkettle.onrender.com/${e.productImage}`} style={{width : "100%",height : "100%"}}/>
              </div>
              <Card.Body className='cartItemCardBody d-flex my-3'>
                <div className='cartItemCardHeader d-flex'>
                  <div>
                    <Card.Title>{e.productTitle}<span style={{fontSize : "smaller"}}> ({e.productWeight})</span></Card.Title>
                    <div style={{fontSize : "smaller"}}>{e.productDescription}</div>
                    <div style={{color : "green"}}>{'\u20B9'}{e.productPrice}/pack (incl. tax)</div>
                  </div>
                  <div className='cartItemCardCount d-flex'>
                    <button type="button" className='btn btn-outline-danger' onClick={()=>{handleQuantityChange(e._id,-1)}} disabled={loading}>{loading ? <Spinner animation="border" /> : '-'}</button>
                    &nbsp;
                    <div className='py-1 cartQuantityText'>{quantities[e._id] || 1}</div>
                    &nbsp;
                    <button type="button" className='btn btn-outline-success' onClick={()=>{handleQuantityChange(e._id,1)}}>+</button>
                  </div>
                </div>

                <div className='cartItemCardQuantity d-flex'>
                  <Card.Text style={{fontSize :"smaller"}} className='mb-0'>Delivery in 1 week</Card.Text>
                  <h5 className="cartItemPrice">{'\u20B9'}{finalPrice}/-</h5>
                </div>
              </Card.Body>
            </Card>
          })
          :
          <Card style={{width : "18rem"}} className='mx-auto'>
            <Card.Body className='text-center' style={{fontSize : "larger"}}>No Items in Your Cart</Card.Body>
          </Card>
      }
      <hr/>
      {
        cummulativePrice ? 
          <div className='summaryBlock mx-auto'>
            <h5>Summary</h5>
            <div className='d-flex justify-content-between'>
              <div>
                <p>Final Price</p>
                <p>Shipping</p>
              </div>
              <div>
                <p >{'\u20B9'}{cummulativePrice}</p>
                <p style={{color : "green"}}>Free</p>
              </div>
            </div>
            <Button style={{width : "100%"}}>Buy Now</Button>        
          </div>
          :
          null 
      }
    </Container>  
  </>
}

export default CartContent