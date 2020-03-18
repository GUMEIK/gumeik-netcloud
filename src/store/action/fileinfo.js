import {baseurl} from '../../api/baseurl'
// 增加
export const fileAddType = "add";
export const fileRduceType = "reduce";
export const fileDataType = "data";

// [{}{}{}]
function createAddFileAction(fileinfo) {
    return {
        type: fileAddType,
        payload: fileinfo
    }
}

function createDeleteFIleAction(key) {
    return {
        type: fileRduceType,
        payload: key
    }
}

export function deleteFIle(key,path) {
    console.log(key,path)
    return   function (dispatch) {
        fetch(`${baseurl}/deletefile?path=${path}&key=${key}`);
        dispatch(createDeleteFIleAction(key));
    }
}




function createGetFileInfoAction(fileinfoArr) {
    return {
        type: fileDataType,
        payload: fileinfoArr
    }
}
// 副作用函数


export function getFileInfo() {
    console.log(-1)
    return async (dispatch, getState) => {
        const url = `${baseurl}/getallfileinfo`;
        let resp = await fetch(url)
        let result = await resp.json();
        let data = result.data;
        data = data.map(el=>{
            return {...el,key:el.filekey}
        })
        console.log(0)
        dispatch(createGetFileInfoAction(data));
        console.log(1)
    }
}