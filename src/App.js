import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Component/Cart/cart';
import AddProduct from './Component/Products/AddProduct';
import Products from './Component/Products/Products';
import SingleProduct from './Component/Products/SingleProduct';
import ChangePassword from './Component/User/ChangePassword';
import Dashboard from './Component/User/Dashboard';
import Login from './Component/User/Login';
import Register from './Component/User/Register';
import Dicideheader from './Header/decideheader';
import Alertpop from './Layout/Alertpop';
import { loaduser } from './Redux/Action/Authaction';
import { loadcart } from './Redux/Action/CartAction';
import headertoken from './setauthheader';
if(localStorage.token){
  headertoken(localStorage.token)
}
function App() {

  let dispatch=useDispatch()
  useEffect(()=>{
    dispatch(loaduser())
    dispatch(loadcart())
  },[])
  return (
    <BrowserRouter>
    <div className="App">
      <Dicideheader/>
      <Alertpop/>
<Routes>
  <Route path='/Cart' element={<Cart/>}/>
  <Route path='/dashboard' element={<Dashboard/>}/>
  <Route path='/products/:id' element={<SingleProduct/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/products' element={<Products/>}/>
  <Route path='/products/addproduct' element={<AddProduct/>}/>
  <Route path='/dashboard/changepassword' element={<ChangePassword/>}/>
</Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
