import React, { useContext, useEffect, useState } from 'react'
import { Breadcrumb, Container, Button, Modal, Form, Card, Row } from 'react-bootstrap'
import AppNavbar from '../../components/AppNavbar'
import AppFooter from '../../components/AppFooter'
import { toast } from 'react-toastify';
import AxiosService from '../../utils/AxiosService';
import ApiRoutes from '../../utils/ApiRoutes';
import { UserAuthContext } from '../../contextApi/UserContextComponent'
import { jwtDecode } from 'jwt-decode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function MyAddress() {

  let {userAuth} = useContext(UserAuthContext)
  const [address, setAddress] = useState();
  const [addressList, setAddressList] = useState([]);
  const [show, setShow] = useState(false);  
  const [editAddress, setEditAddress] = useState();
  const [oldAddress, setOldAddress] = useState();
  const [editShow, setEditShow] = useState(false); 
  const [id,setId] = useState()
  const getLoginToken = localStorage.getItem('loginToken')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = (e,id) => {
    setEditShow(true)
    setOldAddress(e)
    setId(id)
  }

  const handleAddAddress = async() => {
    try {
      let addAddress = { newAddress : address }
      let res = await AxiosService.post(`${ApiRoutes.ADDADDRESS.path}/${userAuth[0]?._id}`,addAddress,{ headers : {
        'Authorization' : `${getLoginToken}`
      }})
      if(res.status === 200){
        handleClose()
      }
    } catch (error) {
      toast.error(error.response.data.message || error.message)
    }
  }

  const handleEditAddress = async(id)=> {
    try {
      let modifiedAddress = { newAddress : editAddress }
      let res = await AxiosService.put(`${ApiRoutes.EDITADDRESS.path}/${userAuth[0]?._id}/${id}`,modifiedAddress,{ headers : {
        'Authorization' : `${getLoginToken}`
      }})
      if(res.status === 200){
        handleEditClose()
      }
    } catch (error) {
      toast.error(error.response.data.message || error.message)
    }
  }

  const handleDeleteAddress = async(id)=> {
    try {
      let res = await AxiosService.delete(`${ApiRoutes.DELETEADDRESS.path}/${userAuth[0]?._id}/${id}`,{ headers : {
        'Authorization' : `${getLoginToken}`
      }})
    } catch (error) {
      toast.error(error.response.data.message || error.message)
    }
  }


  const getAddressList = async() => {
    try {
      const decodedtoken = jwtDecode(getLoginToken)
      const id = decodedtoken.id
      let res = await AxiosService.get(`${ApiRoutes.GETADDRESS.path}/${id}`,{ headers : {
        'Authorization' : `${getLoginToken}`
      }})
      let result = res.data.lists
      setAddressList(result)
    } catch (error) {
      toast.error(error.response.data.message || error.message)
    }
  }

  useEffect(() => {
    getAddressList()
  },[addressList])

  return <>
    <AppNavbar/>
    <Container className='p-4'>
      <Breadcrumb>
        <Breadcrumb.Item href='/myaccount'>My Account</Breadcrumb.Item>
        <Breadcrumb.Item active>My Address</Breadcrumb.Item>
      </Breadcrumb>
      
      <div>
          <header className='d-flex justify-content-between align-items-center mb-3'>
            <h4 className='mb-0'>My Address</h4>
            {
              addressList.length <6  ? <Button onClick={()=> handleShow()}>Add Address</Button> : <Button onClick={()=> handleShow()} disabled>Add Address</Button>
            }
          </header>

          <Row xs={1} md={3} className="g-4">
          {
            addressList.length > 0 ?
              addressList.map((e,i) => {
                return <div>
                  <Card className='addressCard px-0' key={i}>
                    <Card.Body className='addressContent'>
                      <p className='addressText'>{e.address}</p>
                      <div className='actionBtns'>
                        <Button variant='secondary' onClick={() => handleEditShow(e.address,e._id)}><FontAwesomeIcon icon={faEdit}/></Button>
                        <Button variant='danger' onClick={() => handleDeleteAddress(e._id)}><FontAwesomeIcon icon={faTrash}/></Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              })
              :
              <Card>
                <Card.Body>No Address Found! Please add new</Card.Body>
              </Card>
          }
          </Row>
      </div>
    </Container>
    <AppFooter/>

    <Modal show={show} onHide={handleClose}>
      <Form>
        <Modal.Header closeButton>
          <Modal.Title>Add Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={3} placeholder='Enter new Address' onChange={(e) => setAddress(e.target.value)}/>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleAddAddress}>Save Address</Button>
        </Modal.Footer>
      </Form>
    </Modal>

    <Modal show={editShow} onHide={handleEditClose}>
      <Form>
        <Modal.Header closeButton>
          <Modal.Title>Edit Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={3} placeholder='Enter new Address' defaultValue={oldAddress} onChange={(e) => setEditAddress(e.target.value)}/>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>Close</Button>
          <Button variant="primary" onClick={(e) => handleEditAddress(id)}>Save Address</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  </>
}

export default MyAddress