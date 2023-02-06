import { Box, Button, Card, CircularProgress, Grid, Link, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dataedit, deleteproduct, loadproduct } from '../../Redux/Action/productaction'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useNavigate} from 'react-router-dom'
import EditProduct from './EditProduct'
import { addtocart } from '../../Redux/Action/CartAction'

export default function Products() {
    let [open,setopen]=useState(false)
    let products=useSelector((state)=>state.product.products)
    let auth=useSelector((state)=>state.auth)
    let loading=useSelector((state)=>state.product.loading)

    let dispatch=useDispatch()
    let navigate=useNavigate()
    let handlelogin=()=>{
        navigate('/login')
    }
    let handledel=(id)=>{
        console.log(id)
        dispatch(deleteproduct(id))
    }
    let handleendit=(prod)=>{
        setopen(true)
        dispatch(dataedit(prod))
    }
   let handlethis=(id)=>{
    return navigate(`${id}`)
   }
   let handleaddtocart=(id)=>{
   dispatch(addtocart(id))
   }
 

console.log(products)

    useEffect(()=>{
        dispatch(loadproduct())
    },[])
  return (
    <>
    <EditProduct open={open} setopen={setopen}/>
    {loading ? <Box sx={{width:'100%', height:'100vh', display:'flex',justifyContent:'center',alignItems:'center'}}><CircularProgress/></Box> :''}
   {
    auth.isAuthenticated ?  <Grid  container rowSpacing={2} sx={{justifyContent:'center', mt:2}}>
    {
        products && products.map((e)=>{
           
return     <Card variant='outlined' sx={{p:1,bgcolor:'ButtonFace', m:'2px'}}>
    <img src={e.images[0]} alt='No Internet Connection' height='300px' width ='250px'/>
    <Typography>Product Name: {e.productTitle}</Typography>
    <Typography>Discription: {e.productDescription}</Typography>
    <Typography>Product Price: {e.price}</Typography>
    <Box display={'flex'} justifyContent={'space-between'}>
        
    <Link onClick={()=>handleaddtocart(e._id)} sx={{cursor:'pointer'}} underline='hover' mb={1}>Buy Now</Link>
    <Link href={`http://localhost:3000/products/${e._id}`}  underline='hover' mb={1}>Details</Link>
    </Box>
    <Button sx={{mr:6}} variant='contained' onClick={()=>handledel(e._id)} endIcon={<DeleteIcon/>}>Delete</Button>
    <Button variant='contained' onClick={()=>handleendit(e)} endIcon={<EditIcon/>}>Edit</Button>
    
</Card>
        

        })
    }

</Grid> :  <Grid container rowSpacing={2} sx={{justifyContent:'center', mt:2}}>
            {
                products && products.map((e)=>{
                   
       return     <Card variant='outlined' sx={{p:1,bgcolor:'ButtonFace', m:1}}>
            <img src={e.images[0]} alt='No Internet Connection' height='300px' width ='250px'/>
            <Typography>Product Name: {e.productTitle}</Typography>
            <Typography>Discription: {e.productDescription}</Typography>
            <Typography>Product Price: {e.price}</Typography>
            <Link href={`http://localhost:3000/products/${e._id}`} underline='hover' textAlign={'right'}>View Product</Link>
        </Card>
                

                })
            }
        
    </Grid>
   }
   </>
  )
}
