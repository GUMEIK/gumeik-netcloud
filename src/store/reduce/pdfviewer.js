import {pdfchangeurlType,pdfhideType,pdfshowType} from '../action/pdfviewer'

export function pdfviererReduce(state = {
    show:false,
    url:''
},action){
    if(action.type === pdfshowType){
        return {...state,show:true}
    }else if(action.type == pdfhideType){
        return {...state,show:false}
    }else if(action.type === pdfchangeurlType){
        return {...state,url:action.payload,show:true}
    }
    return state;
}