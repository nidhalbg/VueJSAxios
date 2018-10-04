<template>
  <ul v-if="posts && posts.length">
    <li v-for="(post, index) in posts" :key="index">
      <p><strong>{{index}} - {{post.title}}</strong></p>
      <p>{{post.body}}</p>
    </li>
  </ul>

  <ul v-else-if="errors && errors.length">
    <li v-for="(error, index) in errors" :key="index">
      {{error.message}}
    </li>
  </ul>
  

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      errors: ['yo', 'hi']
    }
  },
  mounted () {
    console.dir(this.errors);
  },
  // Fetches posts when the component is created.
  async created() {
    // axios.get(`http://jsonplaceholder.typicode.com/posts`)
    // .then(response => {
    //   // JSON responses are automatically parsed.
    //   this.posts = response.data
    // })
    // .catch(e => {
    //   this.errors.push(e)
    // })

    // async / await version (created() becomes async created())
    //
    try {
      const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
      this.posts = response.data
    } catch (e) {
      this.errors.push(e)
    }
  }
}
</script>