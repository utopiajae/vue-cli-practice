<template>
  <div class="container">
    <p class="post-title">Post</p>
    <p
      class="post-content"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis eligendi rem ad quasi aut, voluptas dolorum. Fugit quae nulla distinctio deserunt repudiandae officiis. Reprehenderit velit consequatur non possimus neque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis eligendi rem ad quasi aut, voluptas dolorum. Fugit quae nulla distinctio deserunt repudiandae officiis. Reprehenderit velit consequatur non possimus neque?</p>
    <a class="more-button" href="/">Learn More</a>
  </div>
</template>


<script>
export default {
  name: "Post"
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

.more-button {
  font-size: 15px;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  background-color: white;
  color: black;
  display: inline-block;
}

.more-button:hover {
  background-color: cornsilk;
  transition: background-color 0.5s ease;
}
</style>