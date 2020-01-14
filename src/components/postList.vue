<template>
  <div id="post-list">
    <div v-for="i in 10" :key="i" class="card">
        <div id="card-header" class="card-header">
            <span>카테고리명</span> <span>글번호</span>
        </div>
        <div class="card-body">
            <p class="card-title">이메일 | 작성일</p>
            <p>글 제목</p>
            <p class="card-text">글내용</p>

        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'postList',
  methods: {

  },
  computed: {

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
</style>
