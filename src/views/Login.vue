<template>
  <div class="container">
    <h5>VueX-Login</h5>
    <a-input class="input-item" placeholder="E-Mail" v-model="email" />
    <a-input class="input-item" placeholder="Password" v-model="password" />
  </div>
</template>


<script>
export default {
  name: "Login",
  computed: {
    email: {
      get() {
        return this.$store.state.email.email;
      },
      set(param) {
        this.$store.dispatch("email/setEmail", param);
      }
    },
    password: {
      get() {
        return this.$store.state.password.password;
      },
      set(param) {
        this.$store.dispatch("password/setPassWord", param);
      }
    }
  }
};
</script>


<style scoped lang="scss">
.container {
  width: 300px;
  margin: auto;
  border: 1px solid black;
}
.input-item {
  width: calc(100% - 20px);
  margin: 10px;
}

h5 {
  display: inline-block;
  font-size: 15px;
  position: relative;
  background-color: white;
  top: -10px;
  left: 20px;
  margin: 0;
}
</style>