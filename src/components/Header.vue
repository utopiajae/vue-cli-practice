<template>
  <div class="header">
    <div class="container">
      <p class="project-name">Vue-Cli-Practice</p>
      <div class="input-container">
        <a-input class="input-item"/>
        <a-button type="primary">Search</a-button>
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
  top: 3px;
}

.input-container {
  position: absolute;
  right: 0px;
  top: 8px;
  display: flex;
  align-items: center;
}

.input-item {
  width: 200px;
  height: 30px;
  margin: 0px 5px;
}
</style>