import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addproduct } from '../../Redux/Action/productaction'
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import {storage} from '../../firebase'
import {getDownloadURL,uploadBytesResumable,ref} from 'firebase/storage'
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
export default function AddProduct({Open,setOpen}) {
    //state getting
    let loading=useSelector((state)=>state.product.loading)
    let dispatch=useDispatch()
    let navigate=useNavigate()


    //states
    let [name,setname]=useState()
    let [discription,setdiscription]=useState()
    let [price,setprice]=useState()
    let [category,setcategory]=useState()
    let [brand,setbrand]=useState()
    let [stock,setstock]=useState()
    let [discount,setdiscount]=useState()
    let [imagepreview,setimagepreview]=useState()


    //function
    const handleClose = () => {
        setOpen(false);
      };
    let handleupload=(e)=>{
        let file=e.target.files[0]
        console.log(e.target)
        let upref=ref(storage, "Myphotos" + "/" + file.name)
        let uplink=uploadBytesResumable(upref,file)
        uplink.on(
            "state-changed",
            (snapshot)=>{
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                let percent="Upload " + progress + "% Done"
                console.log(percent)
            },
            (Error)=>{
                console.log(Error)
            },
            async()=>{
                let durl = await getDownloadURL(upref)
                setimagepreview(durl)
            }

        )
    }
    let handleproduct=async(e)=>{
        e.preventDefault()
        let option={
            productTitle:name,
            productDescription:discription,
            price,
            images:imagepreview,
            catagery:category,
            brand,
            instock:stock,
            discount
        }
        dispatch(addproduct(option,setOpen))
    }

  return (
    <Dialog
        open={Open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {loading ? <CircularProgress sx={{display:'flex',justifyContent:'center',alignItems:'center'}}/> 
       : <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
              <DialogTitle>{"Add Product Form"}</DialogTitle>
        <DialogContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <DialogContentText id="alert-dialog-slide-description">

<Box sx={{display:'flex', justifyContent:'center', alignItems:'center',border:'1px dashed black', height:'250px', width:'350px'}}>
{  imagepreview ? <img src={imagepreview} alt='No Internet Connection' height='250px' width ='350px'/>
      :  <Typography>Image Preview</Typography>}
</Box>
<Button sx={{m:'10px 0'}} variant="contained" component="label" endIcon={<PhotoCamera/>}>
Upload
<input hidden accept="image/*" multiple type="file" onChange={handleupload}/>

</Button>

<TextField sx={{mb:2, width:'80%'}} variant='outlined' label='Product Name' type='text' onChange={(e)=>setname(e.target.value)}/>
<TextField sx={{mb:2, width:'80%'}} variant='outlined' label='Product Category' type='text' onChange={(e)=>setcategory(e.target.value)}/>
<TextField sx={{mb:2, width:'80%'}} variant='outlined' label='Price' type='number' onChange={(e)=>setprice(e.target.value)}/>
<TextField sx={{mb:2, width:'80%'}} variant='outlined' label='Product Description' type='text' onChange={(e)=>setdiscription(e.target.value)}/>
<TextField sx={{mb:2, width:'80%'}} variant='outlined' label='Please Enter Stock' type='number' onChange={(e)=>setstock(e.target.value)}/>
<TextField sx={{mb:2, width:'80%'}} variant='outlined' label='Discount' type='number' onChange={(e)=>setdiscount(e.target.value)}/>
<TextField sx={{mb:2, width:'80%'}} variant='outlined' label='Brand Name' type='text' onChange={(e)=>setbrand(e.target.value)}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleproduct}>Add Product</Button>
        </DialogActions>
      </Box>}
  
      </Dialog>


  )
  
}
