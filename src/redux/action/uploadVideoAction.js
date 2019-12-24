import { UPLOAD_VIDEOS, IS_LOADING } from '../constant';

export const uploadVideo = (uploadedVideos) => dispatch => {    
    dispatch({
        type: UPLOAD_VIDEOS,
        payload: uploadedVideos
    });
    dispatch({
        type: IS_LOADING,
        payload: false
    })
}