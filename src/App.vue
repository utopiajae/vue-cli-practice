<template>
  <div id="app">
    <Header/>
    <Banner/>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/crud">CRUD</router-link>|
      <router-link to="/blog">Blog</router-link>
    </div>
    <router-view />
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Banner,
    Footer
  }
}
</script>

<style lang="scss">

* {
  padding: 0;
  margin: 0;
  // outline: 1px solid red;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
