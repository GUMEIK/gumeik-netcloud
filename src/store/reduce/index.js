import {fileinfoReduce} from './fileinfo';
export default function(store = {},action){
    const newState = {
        fileinfo:fileinfoReduce(store.fileinfo,action)
    }
    return newState;
}