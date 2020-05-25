<template>
  <div class="banner">
    <div class="container">
      <p class="banner-title">Hello Vue</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis eligendi rem ad quasi aut, voluptas dolorum. Fugit quae nulla distinctio deserunt repudiandae officiis. Reprehenderit velit consequatur non possimus neque?</p>
      <a class="more-button" href="/">Learn More</a>
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
  background-color: lightslategrey;
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

.more-button {
  width: 90px;
  height: 20px;
  display: inline-block;
  border-radius: 5px;
  padding: 10px;
  background-color: steelblue;
  color: white;
  text-decoration: none;
  line-height: 20px;
  text-align: center;
}

.more-button:hover {
  background-color:skyblue;
  transition: background-color .5s ease;
}
</style>