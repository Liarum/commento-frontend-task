<template>
  <div id="nav">
      <div class="filter-area">
        <button id="show-modal" @click="showModal = true">필터</button>
        <filterModal v-if="showModal" @close="showModal=false" />

        <div>
          <span :style=asc @click="toggleOrder('asc')">오름차순 </span>
          <span :style=desc @click="toggleOrder('desc')">내림차순</span>
        </div>
      </div>
  </div>
</template>

<script>
import CommentoService from '../services/CommentoService'
import filterModal from '../components/filterModal'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'navBar',
  data() {
      return {
        asc: 'color: #ed1b0c',
        desc: 'color: #1b1c1b',
        showModal: false
      }
  },
  components: {
    filterModal
  },
  methods: {
    ...mapActions([
        "setOrder",
        "setAllCategory",
        "setFilteredCategory",
        "setPostList"
    ]),
    async toggleOrder(payload) {
        if (payload==='asc') {
            this.setOrder('asc')
            this.asc = 'color: #ed1b0c';
            this.desc = 'color: #1b1c1b';

        } else {
            this.setOrder('desc')
            this.asc = 'color: #1b1c1b';
            this.desc = 'color: #ed1b0c';
        }
        const postParam = {
              "page" : 1,
              "ord" : payload,
              "category": this.filteredCategory,
              "limit": this.limit
            }
        const posts = await CommentoService.getPosts(postParam)
        await this.setPostList(posts)
    },

  },
  computed: {
    ...mapGetters(["filteredCategory", "limit"])
  },
  mounted() {
  },
}


</script>

<style lang="less">
#nav {
  padding: 30px;

  span {
    font-weight: bold;
    cursor: pointer;
  }
}

.filter-area {
    width: 95%;
    position: fixed;
    z-index: 10;
    display: flex;
    justify-content: space-between;
}


</style>