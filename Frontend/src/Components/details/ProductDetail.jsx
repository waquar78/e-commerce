import React from 'react'
import { Typography,Box,Table, TableBody, TableRow, TableCell } from '@mui/material'
import { LocalOffer as Badge } from '@mui/icons-material';
const ProductDetail = ({product}) => {
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));
  return (
   <>
   <Typography style={{marginTop: 44 ,marginLeft:10}}>{product.title.longTitle}</Typography> 
           <Typography style={{marginTop: 5, color: '#878787', fontSize: 14,marginLeft:10 }}>
                            8 Ratings & 1 Reviews
                            
                        </Typography>

                        <Typography>
                            <span style={{ fontSize: 28 ,marginLeft:10}}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                            <span style={{ color: '#878787',marginLeft:5 }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
                        </Typography>
                        <Typography>Avilable Offers</Typography>

                        <Box style={{marginTop: 16}}>
                        <Typography><Badge className='mr-3 ' style={{color:'green'}}/>Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
                     <Typography><Badge className='mr-3 mt-3'  style={{color:'green'}} />Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</Typography>
                    <Typography><Badge className='mr-3 mt-3 '  style={{color:'green'}} />Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs</Typography>
                <     Typography><Badge className='mr-3 mt-3'  style={{color:'green'}} />Partner OfferExtra 10% off upto ₹500 on next furniture purchase</Typography>
                        </Box>

                        <Table className='ml-3'>
                <TableBody>
                    <TableRow style={{fontSize:14}}>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </TableRow>

                    <TableRow style={{fontSize:14}}>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </TableRow>

                    <TableRow style={{fontSize:14}}>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <span style={{ color: '#2874f0' }}>SuperComNet</span>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹329</Typography>
                        </TableCell>
                    </TableRow>
                   

                    <TableRow style={{fontSize:14}}>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
                        
  
   </>
  )
}

export default ProductDetail