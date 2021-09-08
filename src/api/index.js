import axios from "@/service/axios";

export const getWangYiNews = (data) => {
    return axios({
        url: '/api/comments.163',
        method: 'get',
        data
    })
}