import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    allCategory: [], // [{id:1, name:"apple"},....{}]
    filteredCategory: [],
    postList: [],
    adList: [],
    order: 'asc',
    limit: 10,
    postDetail: null,
  },
  getters: {
    allCategory: state => { return state.allCategory },
    filteredCategory: state => { return state.filteredCategory },
    order: state => { return state.order },
    limit: state => { return state.limit },
    postList: state => { return state.postList },
    adList: state => { return state.adList },
    postDetail: state => { return state.postDetail }
  },
  mutations: {
    SET_ALL_CATEGORY(state, payload) {
      state.allCategory = payload;
      // console.log("setAllCategory ok", state.allCategory)
    },
    SET_FILTERED_CATEGORY(state, payload) {
      state.filteredCategory = payload;
      // console.log("setFilteredCategory ok", state.filteredCategory)
    },
    SET_ORDER(state, orderType) {
      state.order = orderType
    },
    SET_LIMIT(state, num) {
      state.limit = num
    },
    SET_POST_LIST(state, payload) {
      state.postList = payload
    },
    SET_AD_LIST(state, payload) {
      state.adList = payload
    },
    SET_POST_DETAIL(state, info) {
      state.postDetail = info
    }
  },
  actions: {
    setAllCategory({commit}, payload) {
      commit('SET_ALL_CATEGORY', payload)
    },
    setFilteredCategory({commit}, payload) {
      commit('SET_FILTERED_CATEGORY', payload)
    },
    setOrder({commit}, orderType) {
      commit('SET_ORDER', orderType)
    },
    setLimit({commit}, num) {
      commit('SET_LIMIT', num)
    },
    setPostList({commit}, payload) {
      commit('SET_POST_LIST', payload)
    },
    setAdList({commit}, payload) {
      commit('SET_AD_LIST', payload)
    },
    setPostDetail({commit}, info) {
      commit('SET_POST_DETAIL', info)
    }
  },
  plugins: [vuexLocal.plugin],
  modules: {
  }
})
