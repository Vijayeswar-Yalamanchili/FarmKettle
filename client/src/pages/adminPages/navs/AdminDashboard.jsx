import React, { useEffect, useState } from 'react'
import { Container, Card, Image } from 'react-bootstrap'
import AdminNavbar from '../../../components/adminComponents/AdminNavbar'
import AdminFooter from '../../../components/adminComponents/AdminFooter'
import usersList from '../../../assets/usersList.svg'
import productsList from '../../../assets/productsList.svg'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import AxiosService from '../../../utils/AxiosService'
import ApiRoutes from '../../../utils/ApiRoutes'
import { toast } from 'react-toastify'

function AdminDashboard() {

  let navigate = useNavigate()
  const [users, setUsers] = useState([])
  const [usercount, setUserCount] = useState()
  const [admincount, setAdminCount] = useState()
  const [products, setProducts] = useState([])
  const [productsCount, setProductsCount] = useState([]);
  let getAdminToken = localStorage.getItem('adminLoginToken')
  let decodedToken = jwtDecode(getAdminToken)
  let id = decodedToken.id

  let getAllUsersList = async() => {
    try {
      let res = await AxiosService.get(`${ApiRoutes.ADMINALLUSERS.path}/${id}`, { headers : { 'Authorization' : `${getAdminToken}`}})
      if(res.status === 200){
          setUsers(res.data.usersList)
          setUserCount(res.data.userCount)
          setAdminCount(res.data.adminCount)
      }
    } catch (error) {
      toast.error(error.response.data.message || error.message)
    }
  }

  const getProductsList = async() => {
    try {
      let res = await AxiosService.get(`${ApiRoutes.ADMINGETPRODUCT.path}/${id}`,{ headers : { 
          'Authorization' : `${getAdminToken}`
      }})
      if(res.status === 200) {
          setProducts(res.data.productsList)
          setProductsCount(res.data.productsCount)
      }
    } catch (error) {
      toast.error(error.response.data.message || error.message)
    }
  }

  useEffect(()=> {
      getAllUsersList()
      getProductsList()
  },[products,users])

  return <>
    <AdminNavbar/>
    <Container>
      <div className='dashboardCards'>
        <Card className='cardAcc' onClick={()=> navigate('/admin/dashboard/userslist')}>
              <Card.Body className='cardBody'>
                  <Image src={usersList} className='cardImage'/>
                  <div className='cardBodyText'>
                      <h4>UsersList</h4>
                      <p className='subtitle'>Users : {usercount}</p>
                      <p className='subtitle'>Admins :{admincount}</p>
                  </div>
              </Card.Body>
          </Card>
          <Card className='cardAcc' onClick={()=> navigate('/admin/dashboard/productslist')}>
              <Card.Body className='cardBody'>
                  <Image src={productsList} className='cardImage'/>
                  <div className='cardBodyText'>
                      <h4>ProductsList</h4>
                      <p className='subtitle'>Products : {productsCount}</p>
                  </div>
              </Card.Body>
          </Card>
      </div>
    </Container>
    <AdminFooter/>
  </>
}

export default AdminDashboard