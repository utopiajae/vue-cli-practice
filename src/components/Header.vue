<template>
  <div class="header">
    <div class="container">
      <p class="project-name">Vue-Cli-Practice</p>
      <div class="input-item">
        <p>搜尋</p>
        <input type="text" />
        <button>click</button>
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

p {
  color: white;
  font-size: 20px;
}

input {
  width: 200px;
  height: 30px;
  margin: 0px 10px;
}

button {
  width: 50px;
  height: 25px;
}
</style>