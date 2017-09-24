import axios from "axios";
import _ from 'lodash';

export class User {

    static async register(userData){
        return (await axios.post('http://localhost:5000/register', userData));
    }

    static async login(userData){
        return _.values((await axios.post('http://localhost:5000/login', userData)).data);
    }

    static async logout(){
        await axios.post('http://localhost:5000/logout');
    }

    static async getUsernames() {
        return _.values((await axios.get('http://localhost:5000/usernames')).data);
    }

    static async getProfileByID(id) {
        return _.values((await axios.get(`http://localhost:5000/profile/${id}`)).data);
    }

}