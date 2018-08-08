<template>
  <div v-if="posts && posts.length" class="post_list">
    <div v-for="(post, index) of posts" :key="index" class="item">
      <router-link :to="`/article/${ post.id }`">{{ post.title.rendered }}</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'List',
  data() {
    return {
      posts: []
    }
  },
  created() {
    axios
      .get('http://shimisu.net/wp-json/wp/v2/posts/')
      .then(response => {
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>
