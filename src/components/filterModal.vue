<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              <h5 class="modal-title">필터</h5>
              <button type="button" class="close" @click="$emit('close')">
                <span aria-hidden="true">&times;</span>
              </button>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
                <span v-for="cat in this.allCategory">
                    <input class="filter-checkbox" type="checkbox"
                           :name="cat.name" :value="cat.id" v-model="filterdCategory">
                    <label :for="cat.name">{{cat.name}}</label>
                </span>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="saveFilter(filterdCategory)">
                저장
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "filterModal",
    data() {
      return {
          filterdCategory: []
      }
    },
    methods: {
        ...mapActions(['setSavedCategory']),
        saveFilter(arg) {
            this.setSavedCategory(arg)
            this.$emit('close')
        }
    },
    watch: {
    },
    computed: {
        ...mapGetters(['allCategory', 'savedCategory']),
    },
    mounted() {
        if (this.savedCategory.length===0) {
            this.allCategory.forEach(
                cat => {this.filterdCategory.push(cat.id)}
            )
        } else {
            this.filterdCategory = this.savedCategory
        }
    }
}
</script>

<style lang="less">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .7);
  /*background-color: #000;*/
  /*opacity: 0.7;*/
  display: table;
  transition: opacity .3s ease;

  input {
      height: 18px;
      width: 18px;
  }
  span {
      padding-right: 10px;
  }
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  max-width: 400px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>