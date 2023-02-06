import { Avatar, Button, Typography } from '@mui/material'
import * as React from 'react'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Box } from '@mui/system';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import {logout} from '../Redux/Action/Authaction'
import { Link, useNavigate } from 'react-router-dom';
import AddProduct from '../Component/Products/AddProduct';
import { loadcart } from '../Redux/Action/CartAction';


export default function Authheader() {
    let navigate=useNavigate()
    let name=useSelector((state)=>state?.auth?.user?.username)
    console.log(name.charAt(0))
    let nome=name.charAt(0)
    let [Open,setOpen]=React.useState(false)
    let [preview,setpreview]=React.useState()
    let dispatch=useDispatch()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    let handleprofile=()=>{
      return navigate('/profile')
    }
    const handleClose = () => {
      setAnchorEl(null);
    };
    let handleadd=()=>{
      setOpen(true)
    }
    let handlelogout=()=>{
        dispatch(logout())
    }
   
    let handlecart=()=>{
       navigate('cart')
       dispatch(loadcart())
    }
  
  return (
    <div className='header'>
        <div className='logo'>
          <AddProduct Open={Open} setOpen={setOpen}/>
            <Typography variant='h4'>Shop</Typography>
        </div>
        <div className='contents'>
            <Typography><Link style={{color:'#f8f9fa', '&:hover':{color:'black'}, textDecoration:'none'}} to='/products'>Products</Link></Typography>
            <Typography><Link style={{color:'#f8f9fa', '&:hover':{color:'#fff'}, textDecoration:'none'}} to='/products'>Services</Link></Typography>
            <Typography><Link style={{color:'#f8f9fa', '&:hover':{color:'#fff'}, textDecoration:'none'}} to='/products'>About</Link></Typography>
            <Typography><Link style={{color:'#f8f9fa', '&:hover':{color:'#fff'},  textDecoration:'none'}} onClick={handleadd} to='/products'>Add Product</Link></Typography>
            <Box style={{p:1,cursor:'pointer',color:'#f8f9fa', '&:hover':{color:'#fff'}}} onClick={handlecart}><ShoppingCartCheckoutIcon/></Box>
            <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 40, height: 40 }}>{preview ? preview : nome}</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleprofile}>
        <Avatar/>
          Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handlelogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>


            </Box>
        </div>
    </div>
  )
}
