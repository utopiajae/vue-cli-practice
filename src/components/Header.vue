<template>
  <div class="header">
    <div class="container">
      <p class="project-name">Vue-Cli-Practice</p>
      <div class="input-item">
        <input type="text" />
        <input type="text" />
        <a class="search-button">Search</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="scss">
.header {
  background-color:dimgray;
}

.container {
  max-width: 1200px;
  height: 50px;
  box-sizing: border-box;
  margin: auto;
  position: relative;
}

.project-name {
  font-size: 30px;
  color: white;
  display: inline-block;
  position: absolute;
  left: 0px;
  top: 8px;
}

.input-item {
  position: absolute;
  right: 0px;
  top: 8px;
  display: inline-block;
  display: flex;
  align-items: center;
}

input {
  width: 200px;
  height: 30px;
  margin: 0px 5px;
}

.search-button {
  width: 80px;
  height: 35px;
  background-color:teal;
  display: inline-block;
  border-radius: 5px;
  text-decoration: none;
  color:white;
  text-align: center;
  line-height: 35px;
}

.search-button:hover {
  background-color:turquoise;
  transition: background-color .5s ease;
}
</style>