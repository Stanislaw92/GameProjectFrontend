<template>
  <div class="appContainer">
    
    <NavbarComponent/>

    <router-view/>
  </div>

</template>

<script>

import NavbarComponent from "@/components/NavbarComponent.vue";
export default {
    components: {
        NavbarComponent
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.appContainer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.home {
  /* margin: auto; */
  padding: 10px;
  height: 90vh;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 50px;
  box-shadow: 0px 0px 10px rgb(3, 0, 91);
}

</style>
