import { Button, Typography } from '@mui/material'
import {  Stack } from '@mui/system'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../Redux/Action/Authaction'

export default function Dashboard() {
  let navigate=useNavigate()
  let dispatch=useDispatch()
  let auth=useSelector((state)=>state.auth)
  let handlelogout=()=>{
    dispatch(logout())
  }
  let handlepassword=()=>{
    navigate('changepassword')
  }
  if(!auth.isAuthenticated){
    return navigate('/login')
  }
  return (
    <Stack spacing={3} sx={{backgroundColor:'lightblue', color:'#1c1c1c', p:5}}>
      <Typography variant='h4'>Welcome <strong>{auth.user.username}</strong> To The Dashboard</Typography>
      <Typography>Your Name: <strong>{auth.user.username}</strong></Typography>
      <Typography>Your Email: <strong>{auth.user.email}</strong></Typography>
      <Typography>Account Date: <strong>{auth.user.createdat}</strong></Typography>
      <Typography>Your Password: <strong>{auth.user.password}</strong></Typography>
      <Stack direction='row' spacing={3}>
      <Button variant='contained' onClick={handlepassword}>Change Password</Button>
      </Stack>
      
      
    </Stack>
  )
}
