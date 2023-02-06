
import {v4 as uuidv4} from 'uuid'
import { Alert_Off, Alert_On } from '../Types';



export let removealert=(id)=>(dispatch)=>{
    dispatch({type:Alert_Off,payload:id})
}

export let alertpop=(message, type, id=uuidv4(), time=2000)=>(dispatch)=>{
        try {
            dispatch({type:Alert_On,payload:{message,type,id}})

    setTimeout(() => {
        dispatch(removealert(id))  
    }, time);
        } catch (error) {
            console.log(error)
        }
}