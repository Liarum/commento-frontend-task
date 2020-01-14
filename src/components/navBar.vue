<template>
  <div id="nav">
      <div id="filter-area">
        <button>필터</button>
        <div>
          <span :style=asc @click="toggleOrder('asc')">오름차순 </span>
          <span :style=desc @click="toggleOrder('desc')">내림차순</span>
        </div>
      </div>
  </div>
</template>S

<script>
export default {
  name: 'navBar',
  data() {
      return {
        asc: 'color: #ed1b0c',
        desc: 'color: #1b1c1b'
      }
  },
  methods: {
    toggleOrder(payload) {
        if (payload==='asc') {
            this.asc = 'color: #ed1b0c';
            this.desc = 'color: #1b1c1b';
            // 오름차순 정렬 구현 => 스토어를 통해서
        } else {
            this.asc = 'color: #1b1c1b';
            this.desc = 'color: #ed1b0c';
            // 내림차순 정렬 구현 => 스토어를 통해서
        }
    },

  },
  computed: {

  }
}
</script>

<style lang="less">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#filter-area {
    display: flex;
    justify-content: space-between;
}
</style>