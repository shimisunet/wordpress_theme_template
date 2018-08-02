import Vue from 'vue'
import Vuex from 'vuex'

import modulePosts from './modules/posts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    posts: modulePosts
  }
})
