const url = `http://localhost:12306/getallfileinfo`;
export async function getFileInfo(){
    let resp =  await fetch(url)
    let result = await resp.json();
    return result;
}