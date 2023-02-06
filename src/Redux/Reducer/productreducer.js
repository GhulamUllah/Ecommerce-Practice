import { Add_Product, Data_To_Edit, Delete_Product, Get_Single_Product, Load_Products, Product_Loading_Attempt, Product_Loading_False, Product_Loading_True, Update_Product } from "../Types";


let initialstate={
    products:[],
    product:{},
    loading:false
}

export let product=(state=initialstate,action)=>{
    switch (action.type) {
        case Load_Products:
            return {
                ...state,
                products:action.payload
            }
        case Product_Loading_Attempt:
            return{
                ...state,
                loading:true
            }
        case Product_Loading_True:
            return {
                ...state,
                loading:false
            }
        case Product_Loading_False:
            return{
                ...state,
                loading:false
            }
        case Add_Product:
            return {
                ...state,
                products:[action.payload,...state.products]
            }
        case Delete_Product:
            return {
                ...state,
                products:[...state.products.filter((e)=>e._id !== action.payload)]
            }
        case Data_To_Edit:
            return{
                ...state,
                product:action.payload
            }
            case Update_Product:
                return{
                    ...state,
                    products:[...state.products.map((e)=>e._id == action.payload._id ? action.payload : e)]
                }
            case Get_Single_Product:
                return{
                    ...state,
                    product:action.payload
                }
        default:
        return {...state}
    }
}