import React, { useState } from 'react'
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Container, Form, Modal } from 'react-bootstrap'

function AccountContent() {

  // const [addressList, setAddressList] = useState([])
  const [addAddress, setAddAddress] = useState(false)

  const [newAddshow, setNewAddshow] = useState(false);
  const [editAddshow, setEditAddshow] = useState(false);

  const handleNewAddClose = () => setNewAddshow(false);
  const handleNewAddShow = () => setNewAddshow(true);

  const handleEditAddClose = () => setEditAddshow(false);
  const handleEditAddShow = () => setEditAddshow(true);

  let addressList = [
    {
      address : "thanisandra,bengaluru"
    },
    {
      address : "tiruvottiyur,chennai"
    },
    {
      address : "Malleshpalya,bengaluru"
    },
    {
      address : "tiruvallur,chennai"
    },
    {
      address : "tiruvallur,chennai"
    }
  ]

  const handleAddressDelete = async() => {

  }

  const handleEditAddress = async() => {

  }

  const handleAddNewAddress = async() => {
    

  }

  return <>
    <Container>
      <div className='addressBlock my-3'>

        <div className='d-flex justify-content-between mb-3'>
          <h4>My Address</h4>
          <div style={{width : "10rem"}} className='d-flex justify-content-between'>
            <Button variant='danger' type='button' onClick={handleAddressDelete}><FontAwesomeIcon icon={faTrash}/></Button>
            <Button variant='secondary' type='button' onClick={()=> handleEditAddShow()}><FontAwesomeIcon icon={faEdit}/></Button>
            {
              !addressList.length >= 5 ? <Button variant='primary' type='button' disabled><FontAwesomeIcon icon={faPlus}/></Button> : <Button variant='primary' type='button' onClick={()=> handleNewAddShow()}><FontAwesomeIcon icon={faPlus}/></Button>
            }
          </div>
        </div>
        
        <Form.Select aria-label="Default select example">
          <option>Select your Address</option>
          {
            addressList && addressList.map((e,i)=> {
              return <option value={e.address} key={i}>{e.address}</option>
            })
          }
        </Form.Select>
      </div>
    </Container>


    {/* Add  Address */}
    <Modal show={newAddshow} onHide={handleNewAddClose}>
      <Form onSubmit={handleAddNewAddress}>
        <Modal.Header closeButton>
          <Modal.Title>Add Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleNewAddClose}>Close</Button>
          <Button variant="primary" type='submit'>Save Changes</Button>
        </Modal.Footer>
      </Form>
    </Modal>


    {/* Edit  Address */}
    <Modal show={editAddshow} onHide={handleEditAddClose}>
      <Form onSubmit={handleEditAddress}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditAddClose}>Close</Button>
          <Button variant="primary" type='submit'>Save Changes</Button>          
        </Modal.Footer>
      </Form>
    </Modal>
  </>
}

export default AccountContent