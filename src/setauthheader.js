import axios from "axios";

let headertoken=(token)=>{
   if(token){
    axios.defaults.headers["x_auth"]=token
   }
   else{
    delete axios.defaults.headers["x_auth"]
    localStorage.removeItem('x_auth')
   }
}
export default headertoken;