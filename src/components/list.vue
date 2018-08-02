<template>
  <div>
    <h1>記事一覧</h1>
    <div v-for="post in posts" :key="post.id">
      <router-link :to="`/article/${ post.id }`">{{ post.title.rendered }}</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'list',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      'posts': 'posts/posts'
    })
  },
  methods: {
  }
}
</script>
