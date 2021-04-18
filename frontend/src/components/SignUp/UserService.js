import axios from 'axios';

const REST_API_URL = 'http://locohost:8081/api/users';

class UserService {
    getUsers(){
        axios.get(REST_API_URL);
    }
}

export default new UserService();