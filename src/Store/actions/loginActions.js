import CryptoJS from 'crypto-js';
import $ from 'jquery';
import setAuthorizationToken from '../../Utils/setAuthorizationToken';

import { API_URL, SET_STORAGE, USER, GET_STORAGE, REMOVE_STORAGE, ENCRYPT_SECRET_KEY } from '../../Constants/AppConstants';
import history from '../../history';

import { SET_CURRENT_USER } from './actionTypes';

const config = {
    headers: {'Access-Control-Allow-Origin': '*'}
};

function ajax_request(type='GET',additional_url,data){
    return $.ajax({
        type: type,
        url: API_URL + additional_url,
        data: data
    });
}

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export function logout(){
    return dispatch => {
        REMOVE_STORAGE(USER);
        // setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
        history.push('/login');
    }
}

export function serviceLogout(){
    return dispatch => {
        REMOVE_STORAGE(USER);
        // setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    }
}

export function userLoginRequest(userData) {
    return dispatch => {
        // return axios.post(API_URL+'user/registration', userData, config);
        const request_result = ajax_request("POST","user/login",userData);
        request_result.then(results => {
                if(results.response.code===1000) {
                    const user_data = results.response.data;
                    user_data.remember = false;
                    if(userData.remember === 'checked'){
                        user_data.user_login = window.btoa(CryptoJS.AES.encrypt(userData.user_login, ENCRYPT_SECRET_KEY));
                        user_data.password = window.btoa(CryptoJS.AES.encrypt(userData.password, ENCRYPT_SECRET_KEY));
                        user_data.remember = true;
                    }

                    SET_STORAGE(USER,JSON.stringify(user_data));
                    // setAuthorizationToken(results.response.data.token);
                    const cur_storage2 = GET_STORAGE(USER);
                    const cur_storage = JSON.parse(cur_storage2);
                    dispatch(setCurrentUser(cur_storage));

                    // Decrypt
                    // console.log(cur_storage);
                    // const bytes  = CryptoJS.AES.decrypt(window.atob(cur_storage.password).toString(), ENCRYPT_SECRET_KEY);
                    // const plaintext = bytes.toString(CryptoJS.enc.Utf8);
                    // console.log(plaintext);
                } else {
                    // console.log(results);
                    // history.push('/');
                }            
            }
        );
        return request_result;
    }
}