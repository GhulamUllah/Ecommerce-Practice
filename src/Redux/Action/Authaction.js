import axios from 'axios'
import { Change_Password, Load_User, User_Loading_Attempt, User_Loading_False, User_Loading_True, User_Login, User_Logout, User_Register } from '../Types'
import {baselink} from '../../baseurl'
import { alertpop } from './AlertAction'
import headertoken from '../../setauthheader'



export let userlogin=(option)=>async(dispatch)=>{
    console.log(option)
    try {
        dispatch({type:User_Loading_Attempt})
        let userlog=await axios.post(`${baselink}/user/login`,option)
        localStorage.setItem('token', userlog.data.token)

        console.log(userlog)
        dispatch({type:User_Login, payload:userlog.data.user})
        dispatch(alertpop(userlog.data.message,"success"))
        dispatch({type:User_Loading_True})
    } catch (error) {
        console.log(error)
        dispatch({type:User_Loading_False})
        dispatch(alertpop(error.response.data.message,"error"))

    }
}




export let userregister=(option)=>async(dispatch)=>{
    try {
        dispatch({type:User_Loading_Attempt})
        let userreg=await axios.post(`${baselink}/user/register`,option)
        console.log(userreg)
        dispatch({type:User_Register, payload:userreg})

        dispatch(alertpop(userreg.data.message,"success"))
        dispatch({type:User_Loading_True})
    } catch (error) {
        console.log(error)
        dispatch({type:User_Loading_False})
        dispatch(alertpop(error.response.data.message,"error"))

    }
}


export let loaduser=()=>async(dispatch)=>{

    try {
        if(localStorage.token){
            headertoken(localStorage.token)
        }
        dispatch({type:User_Loading_Attempt})
        let userresponse=await axios.get(`${baselink}/user`)
        dispatch({type:Load_User, payload:userresponse.data.data})
        console.log(userresponse)
        dispatch(alertpop(userresponse.data.message,"success"))
        
        dispatch({type:User_Loading_True})
    } catch (error) {
        console.log(error)
        dispatch(alertpop("No User Logged In","info"))

        dispatch({type:User_Loading_False})

    }
}
export let logout=()=>async(dispatch)=>{
    dispatch({type:User_Loading_Attempt})
    localStorage.removeItem('token')
    dispatch({type:User_Logout})
    dispatch({type:User_Loading_True})
    dispatch(alertpop("Logout Successfully", "success"))
}

export let changepassword=(option)=>async(dispatch)=>{

    try {
    dispatch({type:User_Loading_Attempt})

    let change=await axios.post(`${baselink}/user/password-change`,option)
    console.log(change)
    localStorage.removeItem('token')
    dispatch({type:Change_Password,payload:change})
    dispatch({type:User_Loading_True})
    dispatch(alertpop(change.data.message,"success"))

    }
     catch (error) {
        console.log(error)
        dispatch({type:User_Loading_False})
        dispatch(alertpop(error.response.data.message,"error"))

    }
}