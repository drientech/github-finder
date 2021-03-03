import React ,{useReducer} from 'react';
import alertReducer from './alertReducer';
import alertContext from './alertContext';
import {
    SET_ALERT,
    REMOVE_ALERT
} from "../types";


const AlertState = props =>{
 
const initialState = null;


const [state,dispatch] = useReducer(alertReducer,initialState);



// set alert

const setAlert =(msg,type) =>{
      
    dispatch({
        type:SET_ALERT,
        payload:{msg,type}
    })
       setTimeout(()=> dispatch({type:REMOVE_ALERT}),5000)
  }





  return ( <alertContext.Provider 

    value={{
        alert:state,
        setAlert
       
    }}

    >
   {props.children}
</alertContext.Provider>

  )
}

export default AlertState;