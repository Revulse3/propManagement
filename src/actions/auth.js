import axios from 'axios';

import {ROOT_URL} from '../config';

export funtion Signup(fields, success) {
    console.log(fields);
    return function(dispatch) {
        // axios.post(`${ROOT_URL}/signUp`, fields)
        //     .then(response => {
        //         //do something
        //     })
        //     .catch(err => {
        //         if(err) { console.log(err) }
        //     })
    }
}