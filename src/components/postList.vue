<template>
  <div id="post-list">
    <!-- 가져올 게시물의 갯수만큼(LIMIT) 반복 -->
    <div v-for="i in (postList.length)" :key="i" >
        <div v-if="i % 5 === 0" class="card">
            <div class="ad-title">
                <span>Sponsored</span>
            </div>
            <div class="row">
                <div class="col-12 col-sm-6">
                    <img :src="'https://cdn.comento.kr/assignment/' + adList[i/5 -1].img"
                         class="card-img-left ad-img" alt="">
                </div>
                <div class="card-body col-12 col-sm-6">
                    <h5 class="card-title">{{adList[i/5 -1].title}}</h5>
                    <p class="card-text">{{adList[i/5 -1].contents}}</p>
                </div>
            </div>
        </div>

        <div v-else class="card">
            <div id="card-header" class="card-header">
                <span>카테고리: {{allCategory[postList[i-1].category_id].name}}</span> <span>글번호: {{postList[i-1].id}}</span>
            </div>
            <div class="card-body">
                <p class="card-title">test@comment.kr | {{postList[i-1].created_at}}</p>
                <h5 class="card-title post-title">{{postList[i-1].title}}</h5>
                <p class="card-text post-body">{{postList[i-1].contents}}</p>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import {mapActions, mapGetters} from 'vuex'
const baseUrl = "https://1rcwozojf0.execute-api.ap-northeast-2.amazonaws.com/production"

export default {
  name: 'postList',
  data() {
      return {
          page: 1,
          limit: 10,
      }
  },
  methods: {
    ...mapActions(["setPosts"]),
    async getPostList(params) {
        const requestUrl = baseUrl + "/api/list"
        await axios.get(requestUrl, {
            params: {
              "page": this.page,
              "ord": this.order,
              "limit": this.limit,
              "category" : this.savedCategory
            }
        })
        .then(res => {
            this.setPosts(res.data.list.data)
            // console.log('200', this.posts)
        })
        .catch(err => console.log(err))
    },

  },
  mounted() {
      console.log(this.adList)
  },
  computed: {
    ...mapGetters(['order', 'savedCategory',
        'allCategory', 'postList', 'adList'])
  },
}
</script>

<style lang="less">
#post-list {
    margin: 30px;
}
.card {
    margin-bottom: 20px;
}
#card-header {
    display: flex;
    justify-content: space-between;
}
.card-body {
    text-align: left;
}
.post-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

}

.post-body {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    line-height: 1.2;
    height: 3.6em;

}
.ad-title {
    margin: 10px;
    text-align: left;
    font-size: 20px;
}
.ad-img {
    max-width: 100%;
    height: auto;
}
</style>
