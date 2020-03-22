import {fileinfoReduce} from './fileinfo';
import {pdfviererReduce} from './pdfviewer'
import {videoReducer} from './videoplayer'
import {pictureReducer} from './picture'
export default function(store = {},action){
    const newState = {
        fileinfo:fileinfoReduce(store.fileinfo,action),
        pdfcontrol:pdfviererReduce(store.pdfcontrol,action),
        videoControl:videoReducer(store.videoControl,action),
        pictureControl:pictureReducer(store.pictureControl,action)
    }
    return newState;
}