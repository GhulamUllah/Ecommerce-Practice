import React, { useEffect, useState } from 'react'
import {Button, CircularProgress, TextField, Typography} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import { userregister } from '../../Redux/Action/Authaction'
import { Box } from '@mui/system'
import { useNavigate } from 'react-router-dom'


export default function Register() {
    let navigate=useNavigate()
    let dispatch=useDispatch()
    let loading=useSelector((state)=>state.auth.loading)
    let auth=useSelector((state)=>state.auth)
let [email,setemail]=useState()
let [username,setusername]=useState()
let [password,setpassword]=useState()




    let handleregister=()=>{
        let option={
            email,password,username
        }
        dispatch(userregister(option))
    }
    useEffect(()=>{
        if(auth.isAuthenticated){
            return navigate('/dashboard')
        }
    },[auth])

  return (
    <div className='parent'>
        <div className='child'>
            {loading ? <Box><CircularProgress/></Box> :''}
            <Typography variant='h4' sx={{mb:3}}>Welcome Back</Typography>
            <TextField sx={{mb:2, width:'80%'}} variant='outlined' label='Please Enter Your Username' type='text' onChange={(e)=>setusername(e.target.value)}/>
            <TextField sx={{mb:2, width:'80%'}} variant='outlined' label='Please Enter Your Email' type='email' onChange={(e)=>setemail(e.target.value)}/>
            <TextField sx={{mb:2, width:'80%'}} variant='outlined' label='Please Enter Your Password' type='password' onChange={(e)=>setpassword(e.target.value)}/>
            <Button  variant='contained' onClick={handleregister}>Login</Button>

        </div>
    </div>
  )
}
