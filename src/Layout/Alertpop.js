import React, { useState } from 'react'
import MuiAlert from '@mui/material/Alert'
import { useSelector } from 'react-redux'
import { Stack } from '@mui/system'
import { Snackbar } from '@mui/material'
export default function Alertpop() {
    let alert=useSelector((state)=>state.alert.alert)
    let Alert= React.forwardRef(function Alert(props,ref){
        return <MuiAlert elevation={6} ref={ref} variant='filled' {...props}/>
    })
    let [open,setopen]=useState(true)
    let handleClose=(event,reason)=>{
      if(reason==="clickaway"){
        return
      }
    }
  return (
        <Stack width={'100%'} spacing={2}>
            {
              alert.map((p)=>{
                return <Stack>
                    <Snackbar open={open} onClose={handleClose} width={'100%'} anchorOrigin={{vertical:'top', horizontal:'center'}}>
                        <Alert severity={p?.type} variant='filled'>
                            {p?.message}
                        </Alert>
                    </Snackbar>
                </Stack>
              })  
            }
            </Stack>
  )
}
