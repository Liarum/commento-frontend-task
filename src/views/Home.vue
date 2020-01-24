<template>
  <div class="home">
    <navBar />
    <postList />
  </div>
</template>

<script>
import navBar from "../components/navBar"
import postList from "../components/postList"
import CommentoService from "../services/CommentoService"
import { mapGetters, mapActions } from "vuex"

export default {
  name: 'home',
  components: {
    postList,
    navBar,
  },
  data() {
    return {
    }
  },
  methods: {
    ...mapActions([
        "setAllCategory",
        "setFilteredCategory",
        "setPostList",
        "setAdList"
      ]),
      async initStore() {
        // init categories
        const categories = await CommentoService.getAllCategory()
        await this.setAllCategory(categories)
        let initFiltered = [];
        categories.forEach(c => {
          initFiltered.push(c.id)
        })
        await this.setFilteredCategory(initFiltered)

        // init postList
        const postParam = {
          "page" : 1,
          "ord" : this.order,
          "category": this.filteredCategory,
          "limit": 10
        }
        const postsInit = await CommentoService.getPosts(postParam)
        await this.setPostList(postsInit)

        // init adList
        const adParam = {
          "page" : 1,
          "limit" : 3
        }
        const adsInit = await CommentoService.getAds(adParam)
        await this.setAdList(adsInit)
      },
  },
  created() {
    if (this.postList.length===0){
      this.initStore()
    }
  },
  computed: {
    ...mapGetters(["order", "filteredCategory", "postList", "adList"])
  },
}
</script>
