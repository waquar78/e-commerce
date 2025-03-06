
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import { Box } from '@mui/material'
import DataProvider from './context/DataProvider'
import DetailView from './Components/details/DetailView'
import { Routes,Route } from "react-router-dom"
import { BrowserRouter } from 'react-router-dom'
import Cart from './Components/cart/Cart'
function App() {
  
 return(
  <DataProvider>
    <BrowserRouter>
    <Header/>
    <Box style={{marginTop:54}}>
      <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/product/:id' element={<DetailView/>}></Route>
     <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
    </Box>
    </BrowserRouter>
  </DataProvider>
  
  
 )
}
export default App
