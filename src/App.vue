<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  name: "App",
  components: {
    RouterLink,
    RouterView,
  },
};
</script>

<template>
  <header class="wrapper">
    <div>
      <nav class="header">
        <!-- 😎 -->
        <RouterLink to="/" class="header-link">Counter App</RouterLink>
        <RouterLink to="/">
          Home
        </RouterLink>
        <RouterLink to="/counter">Counter</RouterLink>
        <RouterLink to="/*">Error Page</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.header {
  margin: 0;
  padding: 0;
}
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid black;
  box-shadow: 0 0 50px rgba(110, 109, 109, 0.5);
}
.header-link {
  margin-right: auto;
  font-size: 1.5rem;
  font-weight: 700;
}

@media screen and (max-width: 600px) {
  .header-link {
    font-size: 1rem;
  }
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 10px;

}
nav a:hover {
  background-color: #292829;
  color: #fff;
  transition: 0.3s;
}
</style>
