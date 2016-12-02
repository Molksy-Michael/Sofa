import axios from 'axios'

const getAllContent = () => {
    return axios.get("/getAllContent")
        .then((response) => {
            return response;
        });
};

export default getAllContent;
