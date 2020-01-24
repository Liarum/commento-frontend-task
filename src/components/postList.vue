
<template>
  <div id="post-list">

    <div v-for="i in (postList.length + adList.length)" :key="i">
        <div v-if="i % 4 === 0" class="card">
            <div class="ad-title">
                <span>Sponsored</span>
            </div>
            <div class="row">
                <div class="col-12 col-sm-6">
                    <img :src="'https://cdn.comento.kr/assignment/' + adList[i/4-1].img"
                         class="card-img-left ad-img" alt="">
                </div>
                <div class="card-body col-12 col-sm-6">
                    <h5 class="card-title">{{adList[i/4-1].title}}</h5>
                    <p class="card-text">{{adList[i/4-1].contents}}</p>
                </div>
            </div>
        </div>

        <div v-else class="card">
            <div id="card-header" class="card-header">
                <span>카테고리: {{allCategory[postList[i-1-parseInt(i/4)].category_id-1].name}}</span>
                <span>글번호: {{postList[i-1-parseInt(i/4)].id}}</span>
            </div>

            <div class="card-body">
                <p class="card-title">test@comment.kr | {{postList[i-1-parseInt(i/4)].created_at}}</p>
                <div id="detail-link" @click="toDetail(postList[i-1-parseInt(i/4)].id)">
                    <h5 class="card-title post-title">{{postList[i-1-parseInt(i/4)].title}}</h5>
                    <p class="card-text post-body">{{postList[i-1-parseInt(i/4)].contents}}</p>
                </div>
            </div>

        </div>
    </div>

    <observer @intersect="intersected"/>
  </div>
</template>

<script>
import observer from "../components/observer"
import { mapActions, mapGetters } from 'vuex'
import CommentoService from "../services/CommentoService"

export default {
  name: 'postList',
  components: {
    observer,
  },
  data() {
      return {
          category: [],
          page: 1,
      }
  },
  methods: {
    ...mapActions([
        "setPostList",
        "setAdList",
        "setPostDetail"
        ]),
    async toDetail(postId) {
      const detailInfo = await CommentoService.getPostDetail(postId)
      await this.setPostDetail(detailInfo)
      await this.$router.push("/detail")
    },
    async intersected() {
        this.page++;
        
        const postParam = {
              "page" : this.page,
              "ord" : this.order,
              "category": this.filteredCategory,
              "limit": this.limit
            }
        const posts = await CommentoService.getPosts(postParam)
        const newPosts = this.postList.concat(posts)

        const adParam = {
          "page" : this.page,
          "limit" : parseInt(this.limit / 3)
        }
        const ads = await CommentoService.getAds(adParam)
        const newAds = this.adList.concat(ads)
        await this.setAdList(newAds)
        await this.setPostList(newPosts)
    },
  },
  mounted() {
  },
  computed: {
    ...mapGetters([
        "postList",
        "adList",
        "allCategory",
        "order",
        "limit",
        "filteredCategory",
    ])
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
    a {
        color: #2c3e50;
        text-decoration: none;
        &.router-link-exact-active {
          color: #2c3e50;
        }
      }
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
#detail-link {
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #8ccccf;
  }
}
</style>
