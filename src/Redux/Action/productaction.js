import axios from "axios"
import { baselink } from "../../baseurl"
import { Add_Product, Data_To_Edit, Delete_Product, Get_Single_Product, Load_Products, Product_Loading_Attempt, Product_Loading_False, Product_Loading_True, Update_Product } from "../Types"
import { alertpop } from "./AlertAction"



export let loadproduct=()=>async(dispatch)=>{
    try {
        dispatch({type:Product_Loading_Attempt})
        let prod=await axios.get(`${baselink}/product`)
    console.log(prod)
    dispatch({type:Load_Products,payload:prod.data.data})
    dispatch({type:Product_Loading_True})

    } catch (error) {
        console.log(error)
        dispatch({type:Product_Loading_False})
    }
}



export let addproduct=(option,s)=>async(dispatch)=>{
    try {
        dispatch({type:Product_Loading_Attempt})
        let add=await axios.post(`${baselink}/product/add-product`,option)
    console.log(add)
    dispatch({type:Add_Product,payload:add.data.data})
    dispatch({type:Product_Loading_True})
    dispatch(alertpop(add.data.message,"success"))
s(false)
    } catch (error) {
        console.log(error)
        dispatch({type:Product_Loading_False})
        dispatch(alertpop(error.response.data.message,"error"))

    }
}




export let deleteproduct=(id)=>async(dispatch)=>{
    dispatch({type:Product_Loading_Attempt})

    try {
        let del=await axios.delete(`${baselink}/product/delete-product/${id}`)
        console.log(del)
        dispatch({type:Delete_Product,payload:id})


    dispatch({type:Product_Loading_True})
    dispatch(alertpop(del.data.message,"success"))


    } catch (error) {
        console.log(error)
        dispatch({type:Product_Loading_False})
        dispatch(alertpop(error.response.data.message,"error"))
        
    }
}


export let dataedit=(prod)=>(dispatch)=>{
    dispatch({type:Data_To_Edit,payload:prod})
}



export let updateproduct=(option,id,setopen)=>async(dispatch)=>{
    try {
        dispatch({type:Product_Loading_Attempt})
        let update=await axios.put(`${baselink}/product/update-product/${id}`,option)
        console.log(update)
        dispatch({type:Update_Product,payload:update.data.data})
        dispatch(alertpop("Product Updated Successfully","success"))
        setopen(false)

    } catch (error) {
        dispatch(alertpop(error.response.data.message,"error"))
        
    }
}




export let singleprod=(id)=>async(dispatch)=>{
    try {
        dispatch({type:Product_Loading_Attempt})
        let product=await axios.get(`${baselink}/product/${id}`)
        console.log(product.data.data)
        dispatch({type:Get_Single_Product,payload:product.data.data})
    } catch (error) {
        
    }
}