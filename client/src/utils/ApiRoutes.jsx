const ApiRoutes = {
    LOGIN : {
        path : '/users/login',
        authenticate : false
    },
    REGISTER : {
        path : '/users/register',
        authenticate : false
    },
    LOGOUT : {
        path : '/users/logout',
        authenticate : true
    },
    CONTACTUS : {
        path : '/users/contact ',
        authenticate : true
    },
    CURRENTUSER : {
        path : '/users/currentuser',
        authenticate : true
    },
    ALLUSERS : {
        path : '/users/allusers',
        authenticate : true
    },
    USERPROFILEUPDATE : {
        path : '/users/profileupdate',
        authenticate : true
    },
}

export default ApiRoutes