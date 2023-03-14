import { API } from "../utils/config";
import axios from 'axios';

export const loadAllJobAdvertise = (token) => {
    return axios.get(`${API}/user/worker/job/advertisement`, {
        headers: {
            'Authorization': `${token}` //it will go to authorize middle ware check and destructed to user from token which will later be used to check whether the user is admin or not.
        }
    })
}