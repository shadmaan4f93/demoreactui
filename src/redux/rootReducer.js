import { combineReducers } from "redux";
import uploadedVideos from "./reducer/uploadVideoReducer";
import isLoading from './reducer/loadingReducer'



export default combineReducers({
    uploadedVideos: uploadedVideos,
    isLoading:isLoading
});
