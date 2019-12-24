import { IS_LOADING } from '../constant';

export const setIsloadingTrue = () => dispatch => {
    dispatch({
        type: IS_LOADING,
        payload: true
    })

}