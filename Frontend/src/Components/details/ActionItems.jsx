import React from 'react'
import { useState } from 'react'
import { Box ,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions/cartActions'
import { payUsingPaytm } from '../../Services/api'
import { post } from '../../utils/paytm'

const ActionItems = ({product}) => {

  const navigate = useNavigate();
  const dispatch= useDispatch();
  const [quantity, setQuantity]=useState(1);
  const {id}= product;

  const buyNow = async () => {
    let response = await payUsingPaytm({ amount: 500, email: 'codeforinterview01@gmail.com'});
    var information = {
        action: 'https://securegw-stage.paytm.in/order/process',
        params: response    
    }
    post(information);
}

  const addItemToCart=()=>{ 
      dispatch(addToCart(id,quantity))
      navigate('/cart');
  }
  return (
   <Box>
    <Box padding={'15px 20px' }width={"95"}>
    <img src={product.detailUrl} alt="" />
    </Box >
    <Button style={{marginLeft: 10, marginTop: 30}} onClick={addItemToCart} variant='contained'>Add to Cart</Button>
    <Button style={{marginLeft: 10 ,marginTop:30}} onClick={buyNow} variant='contained'> Buy Now  </Button>
    
   </Box>
  )
}

export default ActionItems