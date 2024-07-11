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
}

export default ApiRoutes