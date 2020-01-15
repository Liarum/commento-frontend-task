<template>
  <div>
      <h1>this is detail page</h1>
      {{postId}}
  </div>
</template>

<script>
export default {
  name: 'detail',
  props: {
    postId : {type: Number, required: true}
  },
  components: {
  },
}
</script>
