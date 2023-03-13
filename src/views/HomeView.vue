<template>
  <div id="home-container">
    <div class="container">
      <div>
        <h1>Hello There 👋🏾</h1>
        <p>
          This is a simple counter App that increments,<br />
          decrements, resets and you can also set a value <br />for the counter.
        </p>
        <div>
          <router-link to="/counter" class="counter-button">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              width="16px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
            Go to Counter
          </router-link>
        </div>
      </div>
      <div>
        <h3>Vue Counter Exam || &copy; 2023</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.counter-button{
    background-color: #000;
    color: #fff;
    border: 1px solid #fff;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
}
.counter-button svg{
    margin-right: 10px;
}
.counter-button:hover{
    background-color: #fff;
    color: #000;
}
h3 {
  margin-top: 90px;
  text-align: center;
  color: white;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
}
#home-container {
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  font-size: 80px;
  margin-top: 100px;
}
p {
  font-size: 30px;
  margin-top: 20px;
}
@media screen and (max-width: 600px) {
  #home-container {
    margin: 25px;
  }
  h1 {
    font-size: 40px;
    margin-top: 50px;
  }
  p {
    font-size: 18px;
    /* text-align: justify; */
  }
}
</style>
