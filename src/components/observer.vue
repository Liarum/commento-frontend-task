<template>
  <div class="observer"/>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "observer",
  props: ['options'],
  data () {
      return {
        observer: null,
      }
  },
  mounted() {
    const options = this.options || {};
    this.observer = new IntersectionObserver(([entry]) => {
      if (this.postList.length > 0 && entry && entry.isIntersecting) {
        this.$emit("intersect");
      }
    }, options);

    this.observer.observe(this.$el);
  },
  computed: {
      ...mapGetters(["postList"])
  },
  destroyed() {
    this.observer.disconnect();
  },
};
</script>