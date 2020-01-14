<template>
  <div class="home">
    <navBar />
    <postList />
  </div>
</template>

<script>
import navBar from "../components/navBar"
import postList from "../components/postList"
export default {
  name: 'home',
  components: {
    postList,
    navBar
  },
  mounted: {

  }
}
</script>
