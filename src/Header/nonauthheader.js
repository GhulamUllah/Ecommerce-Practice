import { Link, Typography } from '@mui/material'
import React from 'react'

export default function Nonauthheader() {
  return (
    <div className='header'>
        <div className='logo'>
            <Typography variant='h4'>Shop</Typography>
        </div>
        <div className='contents'>
            <Typography><Link href='http://localhost:3000/products' underline='hover' sx={{color:'#fff'}}>Products</Link></Typography>
            <Typography><Link href='#' color={'#fff'} underline='hover'>Services</Link></Typography>
            <Typography><Link href='#' color={'#fff'} underline='hover'>About</Link></Typography>
            <Typography><Link color={'#fff'} href='http://localhost:3000/login' underline='hover'>Login</Link></Typography>
            <Typography><Link color={'#fff'} href='http://localhost:3000/register' underline='hover'>Register</Link></Typography>
        </div>
    </div>
  )
}
