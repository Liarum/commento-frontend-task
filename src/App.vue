<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import CommentoService from './services/CommentoService'
import { mapActions, mapGetters } from 'vuex'

const baseUrl = "https://1rcwozojf0.execute-api.ap-northeast-2.amazonaws.com/production"

// // before fix code
// export default {
//   name: 'App',
//   data() {
//     return {
//       categories: [],
//       posts: [],
//       ads: [],
//     }
//   },
//   methods: {
//     ...mapActions(['setCategory', 'setSavedCategory', 'setPosts', 'setAds']),
//     async getFilterCategory() {
//         await axios.get(baseUrl + "/api/category")
//             .then(res => {
//               this.categories = res.data.list
//             })
//             .catch(err => console.log(err))
//     },
//     async getPostList(cat) {
//         const requestUrl = baseUrl + "/api/list"
//         await axios.get(requestUrl, {
//             params: {
//               "page":1,
//               "ord": "asc",
//               "limit": 10,
//               "category" : cat
//             }
//         })
//         .then(res => {
//             this.posts = res.data.list.data
//         })
//         .catch(err => console.log(err))
//     },
//     getAdList(params) {
//         const requestUrl = baseUrl + "/api/ads"
//         axios.get(requestUrl, {
//             params: {
//               "page": 1,
//               "limit": 2
//             }
//         })
//         .then(res => {
//             this.ads = res.data.list.data
//         })
//         .catch(err => console.log(err))
//     },
//   },
//   mounted() {
//     this.getFilterCategory()
//   },
//   watch: {
//     categories() {
//       this.setCategory(this.categories)
//       let tmp = [];
//       this.categories.forEach(cat => {
//           tmp.push(cat.id)
//       })
//       this.setSavedCategory(tmp)
//       this.getPostList(tmp)
//       this.getAdList()
//     },
//     posts() {
//       this.setPosts(this.posts)
//     },
//     ads() {
//       this.setAds(this.ads)
//     }
//   }
//
// }



// after fix code
export default {
  name: 'App',
  data() {
    return {
    }
  },
  methods: {
    ...mapActions([
      ]),
  },
  created() {
  },

}


</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
