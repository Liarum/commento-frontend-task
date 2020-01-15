import axios from 'axios'

const baseUrl = "https://1rcwozojf0.execute-api.ap-northeast-2.amazonaws.com/production"

export default {
    getPostList(params) {
        const requestUrl = baseUrl + "/api/list"
        axios.get(requestUrl, {
            params : params
        })
            .then(res => {
                console.log(res.data.list.data)
            })
            .catch(err => console.log(err))
    },

    getFilterCategory() {
        axios.get(baseUrl + "/api/category")
            .then(res => {
                console.log("service", res.data.list)
                return res.data.list
            })
            .catch(err => console.log(err))
    },

    getAdList(params) {
        const requestUrl = baseUrl + "/api/ads"
        axios.get(requestUrl, {
            params: params
        })
            .then(res => {
                console.log(res.data.list.data)
            })
            .catch(err => console.log(err))

    },

    getPostDetail(params) {
        const requestUrl = baseUrl + "/api/view"
        axios.get(requestUrl, {
            params: params
        })
            .then(res => {
                console.log(res.data.info)
            })
            .catch(err => console.log(err))

    },
}