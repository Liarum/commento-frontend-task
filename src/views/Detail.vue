<template>
  <div id="post-detail">
      <div class="div-space back-btn">
        <button type="button" class="btn btn-warning" 
            @click="$router.push('/')">
          뒤로가기
        </button>
      </div>
      <div class="detail-header div-space">
        <p>{{postDetail.title}}</p>
        <hr>
        <section class="detail-info">
          <small>
            글번호: {{postDetail.id}} | 카테고리: {{allCategory[postDetail.category_id-1].name}}
            <br>작성일: {{postDetail.created_at}}
          </small>
        </section>
      </div>

      <div class="detail-body div-space">
        {{postDetail.contents}}
      </div>

      <div>
        <h4>Comments</h4>
        <div v-if="postDetail.reply" class="comment-area div-space" 
              >
          <!-- {{postDetail.reply}} -->
          <div class="card">
          <div v-for="comm in postDetail.reply" :key="comm.id" class="card-body">
              <small>{{comm.created_at}}</small>
              <p class="comment-author-info">작성자: {{comm.user.name}} | 이메일: {{comm.user.email}}</p>
              <p class="comment-contents">{{comm.contents}}</p>
          </div>
          </div>
        </div>
        <div v-else>
          남겨진 댓글이 아직 없습니다.
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: 'detail',
  props: {
  },
  computed: {
      ...mapGetters(["postDetail", "allCategory"])
  },
}
</script>

<style lang="less">
#post-detail {
  margin: 30px;
  div {
    text-align: left;
  }
  section {
    text-align: right;
  }
}
.div-space {
  margin-bottom: 50px;
}
.back-btn {
  text-align: left;
}
.detail-header {
  background-color: rgba(245, 242, 215, 0.2);
  font-size: 18px;
  padding: 20px;
}
.detail-body {
  padding: 0 20px;
}
.comment-contents {
  background-color : rgba(240, 255, 237, 0.3);
  padding: 20px;
}

</style>