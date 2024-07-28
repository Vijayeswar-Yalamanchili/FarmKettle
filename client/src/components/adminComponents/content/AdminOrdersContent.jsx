import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Breadcrumb, Card, Container, Image } from 'react-bootstrap'
import { format } from 'date-fns'
import { UserListContext } from '../../../contextApi/UserListContextComponent'

function AdminOrdersContent() {

  let navigate = useNavigate()
  let { orders } = useContext(UserListContext)
  return  <>
      <Container className='my-5'>
          <Breadcrumb>
              <Breadcrumb.Item onClick={ ()=> navigate('/admin/dashboard')}>Dashboard</Breadcrumb.Item>
              <Breadcrumb.Item active>Orderslist</Breadcrumb.Item>
          </Breadcrumb>
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

export default AdminOrdersContent