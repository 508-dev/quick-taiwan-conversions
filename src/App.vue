<template>
  <Body msg="Welcome to Caleb and Morgan's .js App" />
</template>

<script>
import Body from "./components/Body.vue";

export default {
  name: "App",
  components: {
    Body,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  background-image: url("assets/quick-taiwan-conversions-background.jpg");
  background-size: cover;
  filter: grayscale(40%);
  min-height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  margin: 0;
  box-sizing: border-box;
}

[data-theme="dark"] #app {
  filter: grayscale(40%) brightness(0.7);
  color: #fff;
}
</style>
