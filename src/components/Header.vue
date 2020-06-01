<template>
  <div class="header">
    <div class="container">
      <p class="project-name">Vue-Cli-Practice</p>
      <div class="input-container">
        <a-input class="input-item" placeholder="E-Mail" v-model="email"/>
        <a-input class="input-item" placeholder="Password" v-model="password"/>
        <a-button type="primary">Sign in</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: "Header",
  computed: {
    email: {
      get() {
        return this.$store.state.email;
      },
      set(param) {
        this.$store.dispatch('setEmail', param);
      }
    },
    password: {
      get() {
        return this.$store.state.password;
      },
      set(param) {
        this.$store.dispatch("setPassWord", param);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.header {
  background-color:black;
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
  width: 500px;
  right: 0px;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.input-item {
  width: 200px;
  height: 30px;
}
</style>