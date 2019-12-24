import { IS_UPLOAD_UPLOADED_SUCCESSFULLY } from "../constant";

const initialState = {
    isUploadedSuccess: false
};


//this one is used for the loading all the registered applications
export default function (state = initialState, action) {
    
    switch (action.type) {
        case IS_UPLOAD_UPLOADED_SUCCESSFULLY:           
        return { 
            ...state,
            isUploadedSuccess:  action.payload
        }      
        default:
            return state;

    }
}