import React, { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import { toast } from 'react-toastify'
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'

export const UserAuthContext = React.createContext()

function UserContextComponent({children}) {

    const [userAuth,setUserAuth] = useState()

    const getUser = async() => {
        try {
            let getLoginToken = localStorage.getItem('loginToken')
            if(getLoginToken){
                const decodedToken = jwtDecode(getLoginToken)
                const id = decodedToken.id
                let res = await AxiosService.get(`${ApiRoutes.CURRENTUSER.path}/${id}`,{ headers : { 'Authorization' : ` ${getLoginToken}`}})
                let result = res.data.currentUser
                // let currentUser = result.filter((user)=> user._id === id)
                if(res.status === 200){
                    setUserAuth(result)                    
                }
            }
        } catch (error) {
            console.log(error.message)
            // toast.error(error.response.data.message || error.message)
        }
    }

    useEffect(()=>{
        getUser()
    },[])

    return <>
        <UserAuthContext.Provider value={{userAuth}}>
            {children}
        </UserAuthContext.Provider>
    </>
}

export default UserContextComponent