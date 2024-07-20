import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import CartDataComponent from './contextApi/CartDataComponent.jsx'
import UserContextComponent from './contextApi/UserContextComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <UserContextComponent>
        <CartDataComponent>
          <App/>
        </CartDataComponent>
      </UserContextComponent>
    <ToastContainer autoClose={2000}/>
  </React.StrictMode>,
)
