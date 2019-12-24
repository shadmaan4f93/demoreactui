import { GET_UPLOADED_VIDEOS } from '../constant';

export const getUploadedVideos = () => dispatch => {
    dispatch({
        type: GET_UPLOADED_VIDEOS,
        payload: null
    })

}