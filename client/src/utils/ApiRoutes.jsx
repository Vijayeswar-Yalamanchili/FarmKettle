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
    ADDADDRESS : {
        path : '/users/addaddress',
        authenticate : true
    },
    GETADDRESS : {
        path : '/users/getaddress',
        authenticate : true
    },
    EDITADDRESS : {
        path : '/users/editaddress',
        authenticate : true
    },
    DELETEADDRESS : {
        path : '/users/deleteaddress',
        authenticate : true
    },

    // ADMIN
    ADMINLOGIN : {
        path : 'admin/login',
        authenticate : true
    },
    ADMINREGISTER : {
        path : 'admin/register',
        authenticate : true
    },
    ADMINLOGOUT : {
        path : '/admin/logout',
        authenticate : true
    },
    ADMINALLUSERS : {
        path : '/admin/allusers',
        authenticate : true
    },
    ADMINCURRENTUSER : {
        path : '/admin/currentuser',
        authenticate : true
    },
    ADMINEDITUSER : {
        path : '/admin/edituser',
        authenticate : true
    },
    ADMINDELETEUSER : {
        path : '/admin/deleteuser',
        authenticate : true
    },
}

export default ApiRoutes