import React, { useEffect, useState } from 'react'
import { Card, Container, Image } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { jwtDecode } from 'jwt-decode'
import { format } from 'date-fns'
import AxiosService from '../../../utils/AxiosService'
import ApiRoutes from '../../../utils/ApiRoutes'

function OrdersContent() {
  
  const [ orders, setOrders ] = useState([])
  const getLoginToken = localStorage.getItem('loginToken')
  const decodedToken = jwtDecode(getLoginToken)
  const id = decodedToken.id

  const getOrdersList = async() => {
    try {
      let res = await AxiosService.get(`${ApiRoutes.GETALLORDERS.path}/${id}`,{ headers : { 'Authorization' : `${getLoginToken}` } })
      let result = res.data.ordersList
      if(res.status === 200){
        setOrders(result)
      }
    } catch (error) {
      toast.error(error.response.data.message || error.message)
    }
  }

  useEffect(()=> {
    getOrdersList()
  },[orders])

  return <>
    <Container className='my-4'>
      <h4>My Orders</h4>
      <div>
        {
          orders.length > 0 ? orders.map((e,i) => {
            return <Card key={i} className='mx-5 mb-3 orderListCard mx-auto'>
              {
                e.orderId && <>
                <div className='orderListCardHeader d-flex px-5 pt-3'>
                  <div>OrderId : {e.orderId} </div>
                  <div>Amount paid : {'\u20B9'}{e.amount}/- </div>
                  <div>Ordered on {format(e.createdAt, "dd/MM/yyyy")}</div>
                </div>
                <hr className='mx-auto' style={{width : "90%"}}/>
                <div className='orderListCardBody'>
                  {
                    e.product.map((ele) => {
                      return <div className='mx-5 orderListBodyCard d-flex'>
                        <Image height={180} className='orderCardImage' src={`https://farmkettle.onrender.com/${ele.productImage}`} style={{borderRadius : "5px"}}/>
                        <div className='my-4 orderListBodyCardContent'>
                          <h4>{ele.productTitle}(<span style={{fontSize : 'smaller'}}>{ele.productWeight}</span>)</h4>
                          <p>Quantity : {ele.productQuantity} </p>
                          <div style={{color : "green"}}>Price : {'\u20B9'}{ele.productPrice}/-</div>
                          <div>Product SubTotal : {ele.productQuantity * ele.productPrice}/-</div>
                        </div>
                      </div>
                    })
                  }
                </div>
                <hr className='mx-auto' style={{width : "90%"}}/>
                <p className='mx-auto'>Products will be <i>delivered in a week</i> at {e.address}</p>
                </>
              }
                
            </Card>
          }).reverse() 
          :
          <Card className='mx-auto' style={{width : "20%"}}>
            <Card.Body className='text-center'>No Orders Found!</Card.Body>
          </Card>
        }
        
      </div>
    </Container>
  </>
}

export default OrdersContent