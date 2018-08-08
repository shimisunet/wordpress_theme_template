import axios from 'axios'

const api = axios.create({
  baseURL: 'http://shimisu.net/wp-json/wp/v2'
})

const stateObject = {
  posts: []
}

const getters = {
  posts(state) {
    return state.posts
  }
}

const mutations = {
  SAVE_POSTS(state, posts) {
    state.posts = posts
  }
}

const actions = {
  fetchPosts: ({ commit }, id) => {
    const _id = id ? `/${id}` : ''

    return api.get(`/posts${_id}`).then(res => {
      commit('SAVE_POSTS', res.data)
    })
  }
}

export default {
  namespaced: true,
  state: stateObject,
  getters,
  mutations,
  actions
}
