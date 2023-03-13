<template>
  <div class="counter-container">
    <h1>Counter App</h1>
    <p>{{ counter }}</p>
    <div class="button-container">
      <button class="increase" @click="increment">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          width="15px"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v12m6-6H6"
          ></path>
        </svg>
        INCREMENT
      </button>
      <button class="reset" @click="reset">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          width="15px"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          ></path>
        </svg>
        RESET
      </button>
      <button class="decrease" @click="decrement">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          width="15px"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M18 12H6"
          ></path>
        </svg>
        DECREMENT
      </button>
    </div>

    <br />
    <div class="setvalue-container">
      <input type="number" v-model="value" />
      <button class="set-value" @click="setValue(value)">SET VALUE</button>
    </div>
    <div>
     <h3>Vue Counter Exam || &copy; 2023</h3>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import useCounter from "../composables/useCounter";
export default {
  name: "CounterView",
  setup() {
    const { counter, increment, decrement, reset, setValue } = useCounter();
    const value = ref(1);

    return {
      counter,
      increment,
      decrement,
      reset,
      setValue,
      value,
    };
  },
};
</script>

<style scoped>
h3{
  margin-top: 100px;
  text-align: center;
  color: white;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
}
.counter-container {
  padding: 10px;
  max-width: 500px;
  margin: 0 auto;
}
h1 {
  margin-top: 70px;
  text-align: center;
  color: white;
  font-size: 50px;
}
p {
  text-align: center;
  font-size: 40px;
  color: white;
  margin-bottom: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 600px) {
  h1{
    font-size: 40px;
  }
  .button-container {
    flex-direction: column;
  }
  .increase {
    margin-bottom: 10px;
  }
  .decrease {
    margin-top: 10px;
  }
}

.increase {
  background-color: black;
  color: rgb(2, 83, 2);
  border: 2px solid rgb(2, 83, 2);
  padding: 7px 16px;
  font-size: 17px;
  margin: 10px;
  border-radius: 8px;
  cursor: pointer;
}

.increase:hover {
  background-color: rgb(2, 83, 2);
  color: white;
}
.decrease {
  background-color: black;
  color: rgb(182, 141, 5);
  border: 2px solid rgb(182, 141, 5);
  padding: 7px 16px;
  border-radius: 8px;
  font-size: 17px;
  margin: 10px;
  cursor: pointer;
}

.decrease:hover {
  background-color: rgb(182, 141, 5);
  color: white;
}
.reset {
  background-color: black;
  color: rgb(185, 6, 6);
  border: 2px solid rgb(185, 6, 6);
  padding: 7px 16px;
  border-radius: 8px;
  font-size: 17px;
  margin: 10px;
  cursor: pointer;
}

.reset:hover {
  background-color: rgb(185, 6, 6);
  color: white;
}

.setvalue-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

@media screen and (max-width: 600px) {
  .setvalue-container {
    flex-direction: column;
  }
  .set-value {
    margin-top: 10px;
  }
}

input {
  padding: 10px 20px;
  /* border-radius: 10px; */
  color: white;
  border: none;
  border-bottom: 1px solid rgb(231, 227, 227);
  margin-top: 10px;
  display: inline-block;
  margin-bottom: 20px;
  background-color: black;
}

.set-value {
  background-color: rgb(7, 7, 7);
  color: white;
  border: 2px solid white;
  padding: 8px 25px;
  font-size: 15px;
  margin: 20px;
  border-radius: 8px;
  cursor: pointer;
}

.set-value:hover {
  background-color: white;
  color: black;
  border: 2px solid black;
}
</style>
