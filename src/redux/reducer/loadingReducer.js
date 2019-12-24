import { IS_LOADING } from "../constant";

const initialState = {
    isLoading: false
};


//this one is used for the loading all the registered applications
export default function (state = initialState, action) {
    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        default:
            return state;

    }
}