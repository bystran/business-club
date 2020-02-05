import axios from 'axios'

const base_url = "http://localhost:3001/members"

const getAll = async () => {
    const res = await axios.get(base_url);
    return res.data
}

export default {
    getAll,
}