import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { jwtDecode } from 'jwt-decode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AxiosService from '../../../utils/AxiosService'
import ApiRoutes from '../../../utils/ApiRoutes'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

function AdminUsersContent() {
    
    const [users, setUsers] = useState([])
    const [popup, setPopup] = useState(false)
    const [userID, setUserID] = useState()
    let adminLoginToken = localStorage.getItem('adminLoginToken')
    let decodedToken = jwtDecode(adminLoginToken)
    let id = decodedToken.id

    const handlePopUp = async(id) => {
        setPopup(true)
        setUserID(id)
    }

    let getAllUsersList = async() => {
        try {
            let res = await AxiosService.get(`${ApiRoutes.ADMINALLUSERS.path}/${id}`, { headers : { 'Authorization' : `${adminLoginToken}`}})
            if(res.status === 200){
                setUsers(res.data.usersList)
            }
        } catch (error) {
            toast.error(error.response.data.message || error.message)
        }
    }

    const handleDelete = async(userID) => {
        try {
            let res = await AxiosService.delete(`${ApiRoutes.ADMINDELETEUSER.path}/${userID}`, { headers : { 'Authorization' : `${adminLoginToken}`}})
            setPopup(false)
        } catch (error) {
            toast.error(error.response.data.message || error.message)
        }
    }

    useEffect(()=>{
        getAllUsersList()
    },[users])

    return <>
        <Container className='my-5'>
            <Table striped bordered hover responsive>
                <thead className='text-center'>
                    <tr>
                    <th>S.No</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Type</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((e,i) => {
                            return <tr className='text-center' key={i}>
                            <td>{i+1}</td>
                            <td>{e.firstName}</td>
                            <td>{e.lastName}</td>
                            <td>{e.email}</td>
                            <td>{e.isAdmin === true ? "Admin" : "User"}</td>
                            <td className='userActionBtns'>
                                <Button variant='primary'><FontAwesomeIcon icon={faEdit}/></Button>
                                &nbsp; 
                                <Button variant='danger' onClick={() => handlePopUp(e._id)}><FontAwesomeIcon icon={faTrash}/></Button>
                            </td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </Container>

        {
            popup && <div className='popupBlock'>
                <div className='alertText'>Are you sure to Remove ?</div>
                <div className='d-flex justify-content-between'>
                    <Button variant='danger' onClick={() => setPopup(false)}>Cancel</Button>
                    <Button variant='primary' onClick={() => handleDelete(userID)}>Remove</Button>
                </div>
            </div>
        }
    </>
}

export default AdminUsersContent