import { Change_Password, Load_User, User_Loading_Attempt, User_Loading_False, User_Loading_True, User_Login, User_Logout, User_Register } from "../Types"


let initialstate={
    isAuthenticated:false,
    user:null,
    token:null,
    loading:false
}

let AuthReducer=(state=initialstate, action)=>{
 switch (action.type) {
    case User_Login:
        return{
            ...state,
            isAuthenticated:true,
            user:action.payload,
            token:localStorage.getItem('token')
        }
    case User_Loading_Attempt:
        return{
            ...state,
            loading:true
        }
    case User_Loading_True:
        return{
            ...state,
            loading:false
        }
    case User_Loading_False:
        return{
            ...state,
            loading:false
        }
    case User_Register:
        return {
            ...state,
            user:action.payload
        }
    case Load_User:
        
            return {
                ...state,
                user:action.payload,
                isAuthenticated:true,
                token:action.payload.token
            }
    case User_Logout:
        return {
            ...state,
            user:null,
            isAuthenticated:false
        }
    case Change_Password:
        return {
            ...state,
            isAuthenticated:false,
            user:null,
        }
        









    default:
        return{ 
            ...state
        }

 }
}
export default AuthReducer
