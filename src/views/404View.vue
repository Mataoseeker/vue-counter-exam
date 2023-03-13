<template>
    <div class="error">
        <h1>Oops!</h1>
        <p>404 - Page not found</p>
        <p>The page you are looking for might have been removed, <br />
        had its name changed or is temporarily unavailable. </p>
        <div class="home-button">
          <a href="/" >Go back home</a>
        </div>
        
    </div>
</template>

<style scoped>
.error{
  margin: 0 auto;
}
h1{
    text-align: center;
  color: rgb(185, 6, 6);
  font-size: 120px;
}
p{
    text-align: center;
  font-size: 25px;
  color: white;
}
.home-button{
  margin-top: 50px;
  text-align: center;
}
a{
    text-decoration: none;
    font-size: 20px;
  border-radius: 20px;
  color: white;
  background-color: rgb(185, 6, 6);
  padding: 10px 20px;
  box-shadow: 0 0 50px rgba(110, 109, 109, 0.5);
}
a:hover{
  background-color: rgb(8, 8, 8);
  color: rgb(185, 6, 6);
}

@media screen and (max-width: 600px) {
  h1{
    font-size: 80px;
  }
  p{
    font-size: 20px;
    margin: 10px;
  }
  a{
    font-size: 15px;
    padding: 5px 10px;
  }
}
</style>