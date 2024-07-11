import React from 'react'
import { Container, Col, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import AppNavbar from '../../components/AppNavbar'
import AppFooter from '../../components/AppFooter'
import AxiosService from '../../utils/AxiosService'
import ApiRoutes from '../../utils/ApiRoutes'

function Login() {

  let navigate = useNavigate()

  let formik = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    validationSchema:Yup.object({          
      email:Yup.string().required('Email is required').email('Enter a valid email'),
      password:Yup.string().required('Password is required').matches(/^[a-zA-Z0-9!@#$%^&*]{8,15}$/,'Enter a valid Password')
    }),
    onSubmit : async(values) => {
        try {
          console.log(values)
          console.log(`${ApiRoutes.LOGIN.path}`)
            let res = await AxiosService.post(`${ApiRoutes.LOGIN.path}`,values)
            // if(res.status === 200){
            //     localStorage.setItem('loginToken',res.data.loginToken)
            //     navigate('/')
            // }
        } catch (error) {
          console.log(error.message)
            // toast.error(error.response.data.message || error.message)
        }
    }
  })

  return <>
    <AppNavbar/>
    <Container>
      <Col md xs={12}>
        <Form onSubmit={formik.handleSubmit} className='authForm mx-auto my-5 p-5 rounded-5'>
          
          <Form.Group className="mb-4">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" id='email' name='email' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/>
            {formik.touched.email && formik.errors.email ? (<div className='authErrorText'>{formik.errors.email}</div>) : null}
          </Form.Group>
          
          <Form.Group className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" id='password' name='password' onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur}/>
            {formik.touched.password && formik.errors.password ? (<div className='authErrorText'>{formik.errors.password}</div>) : null}
          </Form.Group>
          
          <div className='mb-4'>
            <Link to={'/forgotpassword'} className='frgtPwdText'>Forgot Password ?</Link>
          </div>
         
          <div className="d-grid mb-4">
            <Button className='formBtns' type='submit'>Login</Button>
          </div>
          <hr style={{color:"#0E6B06"}}/>
          <div className="d-grid mb-4">
            <Button className='formBtns' onClick={()=>navigate('/register')}>Sign Up</Button>
          </div>

        </Form>
      </Col>
    </Container>
    <AppFooter/>
  </>
}

export default Login