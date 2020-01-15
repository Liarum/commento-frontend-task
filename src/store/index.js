import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allCategory: [], // [{id:1, name:"apple"},....{}]
    savedCategory: [],
    postList: [],
    adList: [],
    order: 'asc',
    detailPostId: null,
  },
  getters: {
    allCategory: state => { return state.allCategory },
    savedCategory: state => { return state.savedCategory },
    order: state => { return state.order },
    postList: state => { return state.postList },
    adList: state => { return state.adList }
  },
  mutations: {
    SET_CATEGORY(state, payload) {
      state.allCategory = payload;
    },
    SET_SAVED_CATEGORY(state, payload) {
      state.savedCategory = payload;
    },
    SET_ORDER(state, orderType) {
      state.order = orderType
    },
    SET_POSTS(state, payload) {
      state.postList = payload
    },
    SET_ADS(state, payload) {
      state.adList = payload
    }
  },
  actions: {
    setCategory({commit}, payload) {
      commit('SET_CATEGORY', payload)
    },
    setSavedCategory({commit}, payload) {
      commit('SET_SAVED_CATEGORY', payload)
    },
    setOrder({commit}, orderType) {
      commit('SET_ORDER', orderType)
    },
    setPosts({commit}, payload) {
      commit('SET_POSTS', payload)
    },
    setAds({commit}, payload) {
      commit('SET_ADS', payload)
    }

  },
  modules: {
  }
})
