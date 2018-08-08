<template>
  <div class="post_list" v-if="posts && posts.length">
    <div class="item" v-for="(post, index) of posts" :key="index">
      <div v-if="post._embedded['wp:featuredmedia']">
        <img :src="post._embedded['wp:featuredmedia'][0].source_url" alt="" class="">
      </div>
      <router-link :to="`/article/${ post.id }`">{{ post.title.rendered }}</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'list',
  data () {
    return {
      posts: []
    }
  },
  created () {
    axios.get('http://shimisu.net/wp-json/wp/v2/posts?_embed&per_page=100')
      .then(response => {
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>
