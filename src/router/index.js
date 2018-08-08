import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/store'

import List from '@/components/List'
import Single from '@/components/Single'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'list',
      component: List
    },
    {
      path: '/article/:id',
      name: 'Single',
      component: Single,
      beforeEnter: (to, from, next) => {
        const id = to.params['id']
        Store.dispatch('posts/fetchPosts', id).then(() => {
          next()
        })
      }
    }
  ]
})
