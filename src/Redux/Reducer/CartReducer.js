import { Add_Product, Add_To_Cart, Cart_Loading_Attempt, Cart_Loading_False, Cart_Loading_True, Decrement_In_Quantity, Delete_Item_From_Cart, Increment_In_Quantity, Load_Cart } from "../Types"

let initialstate={
    cart:null,
    loading:false,
    totalprice:0,
}


export let UserCart=(state=initialstate,action)=>{
    switch (action.type) {
        case Load_Cart:
        return{
            ...state,
            cart:action.payload.cart
        }
        case Cart_Loading_Attempt:
            return{
                ...state,
                loading:true
            }
        case Cart_Loading_True:
            return{
                ...state,
                loading:false
            }
        case Cart_Loading_False:
            return{
                ...state,
                loading:false
            }
        case Increment_In_Quantity:
            return{
                ...state,
                cart:action.payload
            }
     case Decrement_In_Quantity:
                return{
                    ...state,
                    cart:action.payload
                }
    case Delete_Item_From_Cart:
                    return{
                        ...state,
                        cart:action.payload
                    }
    case Add_To_Cart:
        return{
            ...state,
            cart:action.payload
        }




        
        default:
        return{
            ...state
        }
    }
}