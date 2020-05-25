<template>
  <div class="footer">
    <div class="container">
      <hr />
      <p>© 2020 Company, Inc.</p>
    </div>
  </div>
</template>


<script>
export default {
  name: "Footer"
};
</script>


<style scoped lang="scss">

.container {
  padding-top: 10px;
  max-width: 1200px;
  box-sizing: border-box;
  margin: auto;
}

hr {
  border: 0;
  border-top: 1px solid #eee;
}

p {
  margin: 10px;
}
</style>