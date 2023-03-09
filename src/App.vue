<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  name: "App",
  components: {
    RouterLink,
    RouterView, 
  },
  
}
</script>

<template>
 <header class="wrapper">
    <div >
      <nav class="header">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/counter">Counter</RouterLink>
      </nav>
    </div>
  </header>
  
  <RouterView />
  
</template>

<style scoped>
 .header {
  max-width: 1200px;
  margin: 0 ;
  padding: 0;
}
nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 600px){
  nav a {
    margin-bottom: 50px;
  }
}
nav a {
  color: white;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 100px;
}
nav a:hover {
  background-color: #4e0255;
  color: #fff;
}
</style>
