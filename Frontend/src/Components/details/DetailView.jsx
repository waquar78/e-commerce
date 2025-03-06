import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../redux/actions/productActions';
import { Box, Typography,Grid } from '@mui/material';
import ActionItems from './ActionItems';
import ProductDetail from './ProductDetail';
const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();  // Correct extraction
  
  const {loading,product} = useSelector(state=>state.getProductDetails)

  useEffect(() => {
    if(product && id !== product.id)
    dispatch(getProductDetails(id));
    
  }, [dispatch, id,product,loading]);

  return (
    <Box style={{marginTop: 55}}>
      {
         product && Object.keys(product).length &&
        <Grid container>
        <Grid style={{marginTop: 44, padding:20}} item lg={4} md={4} sm={8} xs={12}> <ActionItems product={product} /> 
        
          </Grid>

        <Grid item lg={8} md={8} sm={8} xs={8} style={{}}>
         
         <ProductDetail product={product}/>
                        
  
        </Grid>
        </Grid>
      }
    </Box>
  )
};

export default DetailView;
