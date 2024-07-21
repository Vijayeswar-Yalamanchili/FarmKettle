import Login from "../pages/userPages/authentications/Login"
import Register from "../pages/userPages/authentications/Register"
import Home from "../pages/userPages/navs/Home"
import About from "../pages/userPages/navs/About"
import HealthCertifications from "../pages/userPages/navs/HealthCertifications"
import Contact from "../pages/userPages/navs/Contact"
import BuyProducts from "../pages/userPages/navs/BuyProducts"
import MyAccount from "../pages/userPages/navs/MyAccount"
import MyOrders from "../pages/userPages/navs/MyOrders"
import MyProfile from "../pages/userPages/navs/MyProfile"
import MyAddress from "../pages/userPages/navs/MyAddress"
import AdminLogin from "../pages/adminPages/authentications/AdminLogin"
import AdminRegister from "../pages/adminPages/authentications/AdminRegister"
import AdminDashboard from "../pages/adminPages/navs/AdminDashboard"
import AdminUsersList from "../pages/adminPages/navs/AdminUsersList"
import AdminProductsList from "../pages/adminPages/navs/AdminProductsList"
import AdminProfile from "../pages/adminPages/navs/AdminProfile"
import UserListContextComponent from "../contextApi/UserListContextComponent"
import Cart from "../pages/userPages/navs/Cart"
import { lazy, Suspense } from "react"
import LoadingComponent from '../components/userComponents/LoadingComponent'

const Products = lazy(()=> import('../pages/userPages/navs/BuyProducts'))

const Approutes = [
    {
        path : '/',
        element : <Home/>,
        exact : true
    },
    {
        path : '/about',
        element : <About/>,
        exact : true
    },
    {
        path : '/healthCertifications',
        element : <HealthCertifications/>,
        exact : true
    },
    {
        path : '/contact',
        element : <Contact/>,
        exact : true
    },
    {
        path : '/buyProducts',
        // element : <BuyProducts/>,
        element : <Suspense fallback={<LoadingComponent/>}><Products/></Suspense>,
        exact : true
    },
    {
        path : '/login',
        element : <Login/>,
        exact : true
    },
    {
        path : '/register',
        element : <Register/>,
        exact : true
    },
    {
        path : '/myaccount',
        element : <MyAccount/>,
        exact : true
    },
    {
        path : '/myaccount/profile',
        element : <MyProfile/>,
        exact : true
    },
    {
        path : '/myaccount/address',
        element : <MyAddress/>,
        exact : true
    },
    {
        path : '/cart',
        element : <Cart/>,
        exact : true
    },
    {
        path : '/myorders',
        element : <MyOrders/>,
        exact : true
    },
    // ADMIN
    {
        path : '/admin',
        element : <AdminLogin/>,
        exact : true
    },
    {
        path : '/admin/register',
        element : <AdminRegister/>,
        exact : true
    },
    {
        path : '/admin/dashboard',
        element : <UserListContextComponent><AdminDashboard/></UserListContextComponent>,
        exact : true
    },
    {
        path : '/admin/dashboard/userslist',
        element : <UserListContextComponent><AdminUsersList/></UserListContextComponent>,
        exact : true
    },
    {
        path : '/admin/dashboard/productslist',
        element : <UserListContextComponent><AdminProductsList/></UserListContextComponent>,
        exact : true
    },
    {
        path : '/admin/adminprofile',
        element : <AdminProfile/>,
        exact : true
    },
]

export default Approutes