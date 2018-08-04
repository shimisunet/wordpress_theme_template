<template>
  <div>
    <article id="article">
      <h2>{{ posts.title.rendered }}</h2>
      <div v-html="posts.content.rendered"></div>
    </article>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Single',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      'posts': 'posts/posts'
    })
  }
}
</script>
