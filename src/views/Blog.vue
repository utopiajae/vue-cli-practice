<template>
  <div class="blog">
    <Post v-for="(item, index) in items" :key="index" :item="item" />
  </div>
</template>

<script>
import Post from "@/components/Post.vue";

export default {
  name: "Blog",
  data() {
    return {
      items: [
        {
          title: "Post",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis eligendi rem ad quasi aut, voluptas dolorum. Fugit quae nulla distinctio deserunt repudiandae officiis. Reprehenderit velit consequatur non possimus neque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis eligendi rem ad quasi aut, voluptas dolorum. Fugit quae nulla distinctio deserunt repudiandae officiis. Reprehenderit velit consequatur non possimus neque?"
        },
        {
          title: "Post",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis eligendi rem ad quasi aut, voluptas dolorum. Fugit quae nulla distinctio deserunt repudiandae officiis. Reprehenderit velit consequatur non possimus neque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis eligendi rem ad quasi aut, voluptas dolorum. Fugit quae nulla distinctio deserunt repudiandae officiis. Reprehenderit velit consequatur non possimus neque?"
        },
        {
          title: "Post",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis eligendi rem ad quasi aut, voluptas dolorum. Fugit quae nulla distinctio deserunt repudiandae officiis. Reprehenderit velit consequatur non possimus neque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis eligendi rem ad quasi aut, voluptas dolorum. Fugit quae nulla distinctio deserunt repudiandae officiis. Reprehenderit velit consequatur non possimus neque?"
        }
      ]
    };
  },
  components: {
    Post
  }
};
</script>

<style scoped lang="scss">
.blog {
  max-width: 1200px;
  margin: auto;
  display: flex;
}
</style>