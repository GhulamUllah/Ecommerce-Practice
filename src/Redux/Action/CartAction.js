import axios from "axios"
import { baselink } from "../../baseurl"
import { Add_To_Cart, Cart_Loading_Attempt, Cart_Loading_False, Cart_Loading_True, Decrement_In_Quantity, Delete_Item_From_Cart, Increment_In_Quantity, Load_Cart } from "../Types"




export let loadcart=()=>async(dispatch)=>{
    try {
        dispatch({type:Cart_Loading_Attempt})
        let cartdata=await axios.get(`${baselink}/cart`)
        console.log(cartdata)
        dispatch({type:Load_Cart,payload:cartdata.data})
        dispatch({type:Cart_Loading_True})
    } catch (error) {
        console.log(error)
        dispatch({type:Cart_Loading_False})
    }
}


export let addtocart=(id)=>async(dispatch)=>{
    try {
        dispatch({type:Cart_Loading_Attempt})
        let add=await axios.post(`${baselink}/cart/additemtocart/${id}`)
        console.log(add)
        dispatch({type:Add_To_Cart,payload:add.data})
        dispatch({type:Cart_Loading_True})
    } catch (error) {
        console.log(error)
        dispatch({type:Cart_Loading_False})
    }
}



export let qinc=(id)=>async(dispatch)=>{
        try {
            let inc=await axios.post(`${baselink}/cart/cartitemincreament/${id}`)
            console.log(inc)
            dispatch({type:Increment_In_Quantity,payload:inc.data.cart})
        } catch (error) {
            console.log(error)
        }
}


export let qdec=(id)=>async(dispatch)=>{
    try {
        let inc=await axios.post(`${baselink}/cart/cartitemdecreament/${id}`)
        dispatch({type:Decrement_In_Quantity,payload:inc.data.cart})
        console.log(inc)
    } catch (error) {
        console.log(error)
    }
}
export let deleteitemcart=(id)=>async(dispatch)=>{
    try {
        dispatch({type:Cart_Loading_Attempt})
        
        let del=await axios.post(`${baselink}/cart/removeitemfromcart/${id}`)
        console.log(del)
        dispatch({type:Delete_Item_From_Cart,payload:del.data})
        dispatch({type:Cart_Loading_True})
    } catch (error) {
        console.log(error)
        dispatch({type:Cart_Loading_False})

    }
}