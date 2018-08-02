import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/store'

import List from '@/components/list'
import Article from '@/components/article'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'list',
      component: List,
      beforeEnter: (to, from, next) => {
        Store.dispatch('posts/fetchPosts')
          .then(() => { next() })
      }
    },
    {
      path: '/article/:id',
      name: 'article',
      component: Article,
      beforeEnter: (to, from, next) => {
        const id = to.params['id']
        Store.dispatch('posts/fetchPosts', id)
          .then(() => { next() })
      }
    }
  ]
})
