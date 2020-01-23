import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allCategory: [], // [{id:1, name:"apple"},....{}]
    filteredCategory: [],
    postList: [],
    adList: [],
    order: 'asc',
    detailPostId: null,
  },
  getters: {
    allCategory: state => { return state.allCategory },
    filteredCategory: state => { return state.filteredCategory },
    order: state => { return state.order },
    postList: state => { return state.postList },
    adList: state => { return state.adList }
  },
  mutations: {
    SET_CATEGORY(state, payload) {
      state.allCategory = payload;
    },
    SET_FILTERED_CATEGORY(state, payload) {
      state.filteredCategory = payload;
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
    setFilteredCategory({commit}, payload) {
      commit('SET_FILTERED_CATEGORY', payload)
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
