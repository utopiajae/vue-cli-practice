<template>
    <div class="blog">
        <Post/>
        <Post/>
        <Post/>
    </div>
</template>

<script>
import Post from '@/components/Post.vue'

export default {
  name: 'Blog',
  components: {
    Post
  }
}
</script>

<style scoped lang="scss">
    .blog {
        max-width: 1200px;
        margin: auto;
        display: flex;
    }
</style>