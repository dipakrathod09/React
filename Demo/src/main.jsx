import {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import ProductCard from './ProductCard'
import App from './App'
import Comp3 from './Comp3'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Comp3 />
  </StrictMode>
)