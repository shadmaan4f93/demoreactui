import { combineReducers } from "redux";
import uploadedVideos from "./reducer/uploadVideoReducer";
import isLoading from './reducer/loadingReducer';
import isUploadedSuccess from './reducer/loadingVideoSuccessMessageReducer'



export default combineReducers({
    uploadedVideos: uploadedVideos,
    isLoading:isLoading,
    isUploadedSuccess:isUploadedSuccess
});
