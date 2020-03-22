export let showModalType = "show-video";
export let hideModalType = "hide-video";
export let urlSourceType = "change-video-url"
export const videoShowAction = {
        type:showModalType
}
export const videoHideAction = {
        type:hideModalType
}

export function createVideoUrlSourceAction(url){
    return {
        type:urlSourceType,
        payload:url
    }
}