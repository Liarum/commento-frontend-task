<template>
    <div id="top-btn">
        <a href="#" class="go-top" :style="displayBtn">
            <img src="../assets/logo.png" alt="">
        </a>
    </div>

</template>

<script>
export default {
    name: "topBtn",
    data() {
        return {
            // winHeight: document.querySelector('#app').clientHeight,
            winHeight:   window.innerHeight,
            displayBtn: "display: none",
        }
    },
    watch: {
        winHeight() {
            console.log(this.winHeight)
            if (this.winHeight > 100) {
                this.displayBtn = "display: inline"
            }
        }
    }
}
   
</script>

<style lang="less">
#top-btn {
    position: fixed;
    bottom: 45px;
    left: 50%;
    margin: 0 0 0 -25px;
    z-index: 99;
}
</style>