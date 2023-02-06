import { useSelector } from 'react-redux'
import React from 'react'
import Authheader from './authheader'
import Nonauthheader from './nonauthheader'
import { CircularProgress } from '@mui/material'
import { Box, Typography } from '@material-ui/core'

export default function Dicideheader() {
    let auth=useSelector((state)=>state.auth.isAuthenticated)
    let loading=useSelector((state)=>state.auth.loading)
    console.log(auth)
  return (
    <div>
        {
          loading? ''  : auth ? <Authheader/> : <Nonauthheader/>
        }
    </div>
  )
}
