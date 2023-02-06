import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import DeleteIcon from '@mui/icons-material/Delete';
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Box, Button,Typography } from "@material-ui/core";
import { deleteitemcart, qdec, qinc } from "../../Redux/Action/CartAction";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@mui/material";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Cart = () => {
  let dispatch=useDispatch()
    let cart=useSelector((state)=>state?.cart?.cart?.cartItems)
    let loading=useSelector((state)=>state?.cart?.loading)
    console.log(cart)
  const classes = useStyles();
  let handleinc=(id)=>{
    dispatch(qinc(id))
  }
  let handledec=(id)=>{
dispatch(qdec(id))
  }
  let subtotal=0
  let Shipping=0
  let totaldes=0
let handledel=(id)=>{
dispatch(deleteitemcart(id))
}
  let navigate=useNavigate()

  return (
<>
{loading ? (
  <Skeleton variant="circular">
    <Avatar />
  </Skeleton>
) : <>{cart ? <>
  <TableContainer component={Paper}>
      <Table size="large" className={classes.table} aria-label="cart table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Discount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart ? cart?.map((item) => (

//pricinf
item?.product ? subtotal=subtotal+(item?.product?.price * item?.quantity) : '',
item?.product ? Shipping=(Shipping + item?.product?.price )*item?.quantity * .01: '',
item?.product ? totaldes=totaldes + (item?.product?.discount * item?.quantity): '',




            <TableRow key={item.product}>








              <TableCell component="th" scope="row">
               <img src={item?.product?.images[0]} alt = 'Something Went Wrong' height={'100px'}/>
              </TableCell>
              <TableCell component="th" scope="row">
                {item?.product ? item?.product?.productTitle : 'Something Went Wrong'} 
              </TableCell>
              <TableCell align="right">
                {item?.product ? <Box sx={{display:'flex'}}>
<Box>
<Button endIcon={<DeleteIcon/>} variant='contained' onClick={()=>handledel(item?.product?._id)}>Delete</Button>
  </Box>                  
                  <Box>
                  <Button onClick={()=>handledec(item?.product?._id)} variant='contained'>-</Button>
                <input value={item?.quantity} style={{padding:'11px',marginTop:'2px',color:'#fff',cursor:'pointer', border:'none', width:'30px', background:'gray', textAlign:'center', borderRadius:'5px'}}/>
                <Button onClick={()=>handleinc(item?.product?._id)} variant='contained'>+</Button></Box></Box> : "Something Went Wrong"}
              </TableCell>
              <TableCell align="right">$ {item.product ? item?.product?.price :"Somthing Went Wrong"}</TableCell>
              <TableCell align="right">$ {item?.product ? item?.product?.discount : "Something went wrong"} /Item</TableCell>
            </TableRow>
          )) : ''}
        </TableBody>
      </Table>
      <Table size="small" sx={{mt:5}} className={classes.table} aria-label="Total Bill">
        
          <TableRow>
            <TableCell><Typography variant="h5">Fee Structure</Typography></TableCell>
            <TableCell><Typography variant="h5">Pricing</Typography></TableCell>
          </TableRow>
          <TableBody>
            <TableRow>
              <TableCell><Typography variant="h6">Sub Total:</Typography></TableCell>
              <TableCell><Typography variant="h6">$ {subtotal}</Typography></TableCell>

            </TableRow>
            <TableRow>
              <TableCell><Typography variant="h6">Shipping Fee*(WAT Inc):</Typography></TableCell>
              <TableCell><Typography variant="h6">$ {Shipping}</Typography></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><Typography variant="h6">Total Discount:</Typography></TableCell>
              <TableCell><Typography variant="h6">$ {totaldes}</Typography></TableCell>
            </TableRow>
            <TableRow>
              <TableCell color="red"><Typography variant="h6">Grand Total:</Typography></TableCell>
              <TableCell><Typography variant="h6">$ {subtotal + Shipping - totaldes}</Typography></TableCell>
            </TableRow>
          </TableBody>
            
          </Table>
    </TableContainer>


</> :  navigate('/products')}
   </>}
    </>
  );
};

export default Cart;
