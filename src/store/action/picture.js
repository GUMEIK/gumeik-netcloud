export let showPictureModalType = "show-picture";
export let hidePictureModalType = "hide-picture";
export let urlPictureSourceType = "change-picture-url"
export const pictureShowAction = {
        type:showPictureModalType
}
export const pictureHideAction = {
        type:hidePictureModalType
}

export function createPictureUrlSourceAction(url){
    return {
        type:urlPictureSourceType,
        payload:url
    }
}