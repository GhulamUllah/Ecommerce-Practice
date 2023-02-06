import { Alert_Off, Alert_On } from "../Types"

let initialstate={
    alert:[]
}
export let AlertReducer=(state=initialstate,action)=>{
    switch (action.type) {
        case Alert_On:
            return {
                ...state,
                alert:[...state.alert,action.payload]
            }
        case Alert_Off:
            return {
                ...state,
                alert:[...state.alert.filter((curnt)=>curnt.id !== action.payload)]
            }
        default:
            return{
                ...state
            }
    }
}