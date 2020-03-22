import {showModalType,hideModalType,urlSourceType} from '../action/videoplayer'

export function videoReducer(state = {
    isShowModal:false,
    url:""
},action){
    if(action.type === showModalType){
        return {...state,isShowModal:true};
    }else if(action.type === hideModalType){
        return {...state,isShowModal:false}
    }else if(action.type === urlSourceType){
        return {isShowModal:true,url:action.payload}
    }
    return state;
}