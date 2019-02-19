import $ from 'jquery';

import { API_URL } from '../../Constants/AppConstants';

function ajax_request(type='GET',additional_url,data){
    return $.ajax({
        type: type,
        url: API_URL + additional_url,
        data: data
    });
}

export function newPasswordResetRequest(userData) {
    return dispatch => {
        return ajax_request("POST","user/resetPassword",userData);
    }
}