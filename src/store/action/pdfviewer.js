export const pdfshowType = "pdfshow";
export const pdfhideType = "pdfhide";
export const pdfchangeurlType = "pdfchangeurl";

export const pdfShowAction = {
    type:pdfshowType
}
export const pdfhideAction = {
    type:pdfhideType
}
export function createPdfchangeurlAction(newurl){
    return {
        type:pdfchangeurlType,
        payload:newurl
    }
}