import { UPDATE_LIST } from "./todoTypes"
import { API } from "../../api"
export default  function  todoType(){
    return {
        type : UPDATE_LIST,
        list :  ""
    }
}

export const allList = ()=>{
    return async (dispatch) => {
        const data = await fetch('http://'+API+'/api/todo/get').then(response => response.json()).then(r=> r).catch(error=>console.log(error))
        dispatch({type:UPDATE_LIST,list:data})
    }
}
export const deleteIt = (s)=>{
    return async (dispatch) => {
    const x = await fetch('http://'+API+`/api/todo/delete/:${s}`,{
        method : 'DELETE'
     }).then(response => response.json()).then(r=> r).catch(error=>console.log(error))
        dispatch(allList())
    }
}

export const updateIt = (s,Body)=>{
    return async (dispatch) => {

      //  console.log(JSON.stringify(Body))
    await fetch('http://'+API+`/api/todo/update/:${s}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Body)
      }).then(response => response.json()).then(r=> r).catch(error=>console.log(error))
        dispatch(allList())
    }
}