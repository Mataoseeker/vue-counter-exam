<template>
    <div class="error">
        <h1>404</h1>
        <p>Page not found</p>
        <a href="/" >Go back home</a>
    </div>
</template>

<style scoped>
.error{
  border: 2px solid black;
  border-radius: 10px;
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
  /* margin-top: 20px; */
}
h1{
    text-align: center;
  color: white;
  font-size: 80px;
}
p{
    text-align: center;
  font-size: 30px;
  color: white;
}
a{
    text-decoration: none;
    font-size: 20px;
    border: 2px solid black;
    padding: 7px 16px;
  border-radius: 8px;
  color: white;
  margin-left: 180px;
}
</style>