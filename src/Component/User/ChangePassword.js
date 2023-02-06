import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changepassword } from '../../Redux/Action/Authaction'

export default function ChangePassword() {
    let loading=useSelector((state)=>state.auth.loading)
    let auth=useSelector((state)=>state.auth)

    let dispatch=useDispatch()
    let navigate=useNavigate()
let [email,setemail]=useState()
let [password,setpassword]=useState()

    let handleback=()=>{
        navigate('/dashboard')
    }


    let handlelogin=async()=>{
        try {
            let option={
                oldpassword:email,newpassword:password
            }
            await dispatch(changepassword(option))
            navigate('/login')

        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='parent'>
        <div className='child'>
        {loading ? <Box><CircularProgress/></Box> :''}

            <Typography variant='h5' sx={{mb:3}}>Secure Your Password</Typography>
            <TextField sx={{mb:2, width:'80%'}} variant='outlined' label='Please Enter Your Email' type='password' onChange={(e)=>setemail(e.target.value)}/>
            <TextField sx={{mb:2, width:'80%'}} variant='outlined' label='Please Enter Your Password' type='password' onChange={(e)=>setpassword(e.target.value)}/>
            <Box >
            <Button sx={{mr:15}} variant='contained' onClick={handlelogin}>Change</Button>
            <Button  variant='contained' onClick={handleback}>Back</Button>
            </Box>

        </div>
    </div>
  )
}
