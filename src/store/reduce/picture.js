import {showPictureModalType,hidePictureModalType,urlPictureSourceType} from '../action/picture'

export function pictureReducer(state = {
    isShowModal:false,
    url:""
},action){
    if(action.type === showPictureModalType){
        return {...state,isShowModal:true};
    }else if(action.type === hidePictureModalType){
        return {...state,isShowModal:false}
    }else if(action.type === urlPictureSourceType){
        return {isShowModal:true,url:action.payload}
    }
    return state;
}