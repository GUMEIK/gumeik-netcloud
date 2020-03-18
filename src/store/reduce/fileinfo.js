// [{}{}{}]
import {fileAddType,fileRduceType,fileDataType} from '../action/fileinfo'

export function fileinfoReduce(state = [],action){
    if(action.type === fileAddType ){
        return [...state,action.payload]
    }else if(action.type === fileRduceType){
        return state.filter(el=>{
            if(el.key !== action.payload){
                return true;
            }
            return false;
        })
    }else if(action.type === fileDataType){
        return action.payload;
    }
    return state;
}