import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './Css/style.css';
import { CartProvider } from './Components/CartContext.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
    <App />
    </CartProvider>
  </StrictMode>,
)
