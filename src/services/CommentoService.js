import axios from 'axios'

const baseUrl = "https://1rcwozojf0.execute-api.ap-northeast-2.amazonaws.com/production"

const qs = require('qs');

export default {
    getPosts(params) {
        
        // console.log("getPosts", params)

        /*
           params:
           - page: int
           - ord: string ("asc" or "desc")
           - category: array
           - limit: int (perPage)
        */
        const requestUrl = baseUrl + "/api/list"
        return axios.get(requestUrl, {
            'params' : params,
            'paramsSerializer': (params) => {return qs.stringify(params) }
        })
            .then(res => {
                // console.log(res.data.list.data)
                return res.data.list.data
            })
            .catch(err => console.log(err))
    },

    getAllCategory() {
        return axios.get(baseUrl + "/api/category")
            .then(res => {
                return res.data.list
            })
            .catch(err => console.log(err))
    },

    getAds(params) {
        // console.log("getAds", params)
        /*
           params:
           - page: int
           - limit: int
        */
        const requestUrl = baseUrl + "/api/ads"
        return axios.get(requestUrl, {
            params: params
        })
            .then(res => {
                // console.log(res.data.list.data)
                return res.data.list.data
            })
            .catch(err => console.log(err))

    },

    getPostDetail(postId) {
        /*
           params:
           - id: int
        */
        const requestUrl = baseUrl + "/api/view"
        return axios.get(requestUrl, {
            params: {
                "id" : postId
            }
        })
            .then(res => {
                // console.log(res.data.info)
                return res.data.info
            })
            .catch(err => console.log(err))

    },
}