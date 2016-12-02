import axios from 'axios'

const getAllContent = () => {
    return axios.get("/getAllContent")
        .then((response) => {
            const res = response.data.map((item, index) => {
                return item;
            console.log(res);
            });
            return res;
        })
        .catch((err) => {
            console.log(err);
        })
};

export default getAllContent;
