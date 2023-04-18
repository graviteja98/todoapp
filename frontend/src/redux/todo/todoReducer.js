import { UPDATE_LIST } from "./todoTypes";

const initialState = {
    list : [{todo:"walk",when:"2023 Apr 13"}]
}
export default function todoReducer (state = initialState,action){
    if(action.type === UPDATE_LIST){
        return {
            ...state,
            list : action.list//getby('hello')
        }
    }
    else {
        return state
    }
}