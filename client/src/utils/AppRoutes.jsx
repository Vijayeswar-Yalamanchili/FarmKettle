import Login from "../pages/authentications/Login"
import Register from "../pages/authentications/Register"
import Home from "../pages/navs/Home"
import About from "../pages/navs/About"
import HealthCertifications from "../pages/navs/HealthCertifications"
import Contact from "../pages/navs/Contact"
import BuyProducts from "../pages/navs/BuyProducts"
import MyAccount from "../pages/navs/MyAccount"
import MyOrders from "../pages/navs/MyOrders"
import MyProfile from "../pages/navs/MyProfile"
import MyAddress from "../pages/navs/MyAddress"

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
        element : <BuyProducts/>,
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
        path : '/myorders',
        element : <MyOrders/>,
        exact : true
    },
    
]

export default Approutes