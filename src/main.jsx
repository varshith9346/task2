
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Navbar.jsx'
import Signin from './Signin.jsx'
import Signup from './Signup.jsx'
import Product from './Product.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Signin />
    <Signup />
    <App />
    <Product />
  </StrictMode>,
)
