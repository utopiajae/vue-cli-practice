<template>
  <div class="container">
    <p class="post-title">{{item.title}}</p>
    <p
      class="post-content"
    >{{item.content}}</p>
    <a-button type="primary">Learn More</a-button>
  </div>
</template>


<script>
export default {
  name: "Post",
  props: {
    item: Object
  }
};
</script>


<style scoped lang="scss">
.container {
  width: 380px;
  padding: 10px;
  margin: auto;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 0;
  background: slategray;
}

.post-title {
  display: inline-block;
  color: white;
  font-size: 30px;
}

.post-content {
  margin-top: 30px;
  display: inline-block;
  color: white;
  font-size: 15px;
  margin-bottom: 20px;
}
</style>