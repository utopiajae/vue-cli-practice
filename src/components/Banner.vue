<template>
  <div class="banner">
    <div class="container">
      <p class="banner-title">Hello Vue</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis eligendi rem ad quasi aut, voluptas dolorum. Fugit quae nulla distinctio deserunt repudiandae officiis. Reprehenderit velit consequatur non possimus neque?</p>
      <!-- <a-button type="primary">Learn More</a-button> -->
      <router-link class="ant-btn ant-btn-primary" to="/crud">crud</router-link>
      <router-link class="switch-btn ant-btn ant-btn-primary" to="/blog">blog</router-link>
      <router-link class="switch-btn ant-btn ant-btn-primary" to="/todo">todo</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner"
};
</script>

<style scoped lang="scss">
.banner {
  background-color:gray;
}

.container {
  max-width: 1200px;
  box-sizing: border-box;
  margin: auto;
  padding: 50px 0;
}

.banner-title {
  top: 130px;
  left: 360px;
  font-size: 40px;
  color: white;
}

p {
  color: white;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 25px;
  text-align: left;
  max-width: 1200px;
}

.switch-btn {
  margin-left: 10px;
}
</style>