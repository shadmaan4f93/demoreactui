import { UPLOAD_VIDEOS,GET_UPLOADED_VIDEOS } from "../constant";

const initialState = {
    uploadedVideos: []
};


//this one is used for the loading all the registered applications
export default function (state = initialState, action) {
    
    switch (action.type) {
        case UPLOAD_VIDEOS:           
        return { 
            ...state,
            uploadedVideos: [...state.uploadedVideos, action.payload]
        }

        case GET_UPLOADED_VIDEOS:
            
            return state;

        default:
            return state;

    }
}