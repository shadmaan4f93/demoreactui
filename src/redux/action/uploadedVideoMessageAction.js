import { IS_UPLOAD_UPLOADED_SUCCESSFULLY } from '../constant';

export const clearUploadedMessage = (recObj) => dispatch => {    
    dispatch({
        type: IS_UPLOAD_UPLOADED_SUCCESSFULLY,
        payload: recObj
    })   
}