import React, { useEffect, useState } from 'react'
import {Box, Button, CircularProgress, TextField, Typography} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import { userlogin } from '../../Redux/Action/Authaction'
import {useNavigate} from 'react-router-dom'

export default function Login() {
    let loading=useSelector((state)=>state.auth.loading)
    let auth=useSelector((state)=>state.auth)

    let dispatch=useDispatch()
    let navigate=useNavigate()
let [email,setemail]=useState()
let [password,setpassword]=useState()




    let handlelogin=()=>{
        try {
            let option={
                email,password
            }
            dispatch(userlogin(option))
        } catch (error) {
            console.log(error)
        }
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
            <TextField sx={{mb:2, width:'80%'}} variant='outlined' label='Please Enter Your Email' type='email' onChange={(e)=>setemail(e.target.value)}/>
            <TextField sx={{mb:2, width:'80%'}} variant='outlined' label='Please Enter Your Password' type='password' onChange={(e)=>setpassword(e.target.value)}/>
            <Button  variant='contained' onClick={handlelogin}>Login</Button>

        </div>
    </div>
  )
}
