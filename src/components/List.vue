<template>
  <div v-if="posts && posts.length" class="post_list">
    <div v-for="(post, index) of posts" :key="index" class="item">
      <div v-if="post._embedded['wp:featuredmedia']">
        <img :src="post._embedded['wp:featuredmedia'][0].source_url" alt="" class="thumbnail">
      </div>
      <router-link :to="`/article/${ post.id }`">{{ post.title.rendered }}</router-link>
      <time>{{ post.date }}</time>
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
      .get('http://shimisu.net/wp-json/wp/v2/posts?_embed&per_page=20')
      .then(response => {
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style lang="scss" scoped>
.item {
  border: 1px solid #ccc;
  margin: 10px 0;
}

.thumbnail {
  width: 100%;
  max-width: 400px;
  height: 300px;
  object-fit: cover;
}
</style>
