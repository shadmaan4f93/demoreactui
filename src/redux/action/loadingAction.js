import { IS_LOADING,IS_UPLOAD_UPLOADED_SUCCESSFULLY } from '../constant';

export const setIsloadingTrue = () => dispatch => {
    dispatch({
        type: IS_LOADING,
        payload: true
    });
    dispatch({
        type: IS_UPLOAD_UPLOADED_SUCCESSFULLY,
        payload: true
    })   


}