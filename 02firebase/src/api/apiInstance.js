import axios from "axios";


const apiInstance = axios.create({
    baseURL:"https://my-03firebase-default-rtdb.firebaseio.com/"
})

export default apiInstance;