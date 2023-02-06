import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button } from '@material-ui/core';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { storage } from '../../firebase';
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';

export default function Profile() {
    let loading=useSelector((state)=>state.auth.loading)
    let dispatch=useDispatch()
    let [image,setimage]=React.useState()
    console.log(loading)
    let handleupload=(e)=>{
        let file=e.target.files[0]
        console.log(file)
        let location=ref(storage, "Profile" + "/" + file.name)
        let process=uploadBytesResumable(location,file)
        process.on(
            "state_changed",
            (snapshot)=>{
                let progress= (snapshot.bytesTransferred / snapshot.totalBytes )* 100
                console.log(progress)
            },
            (error)=>{
                console.log(error)
            },
            async()=>{
                let link= await getDownloadURL(location)
                console.log(link)
                setimage(link)
            }
            
        )

    }
    

  return (
    loading ? <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={100} height={100} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack> :<Stack>
        <Box>
        <Button variant='contained' component='label' endIcon={<PhotoCamera/>}>
            Upload Profile
            <input hidden accept='images/*' multiple type='file' onChange={(e)=>handleupload(e)}/>
        </Button>
        </Box>
    </Stack>
  );
}