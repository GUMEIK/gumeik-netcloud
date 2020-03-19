import {fileinfoReduce} from './fileinfo';
import {pdfviererReduce} from './pdfviewer'
export default function(store = {},action){
    const newState = {
        fileinfo:fileinfoReduce(store.fileinfo,action),
        pdfcontrol:pdfviererReduce(store.pdfcontrol,action)
    }
    return newState;
}