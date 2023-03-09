<template>
    <div class="counter-container">
      <h1>Counter App</h1>
      <p>{{ counter }}</p>
      <div class="button-container">
        <button class="increase" @click="increment">Increment</button>
      <button class="reset" @click="reset">Reset Value</button>
      <button class="decrease" @click="decrement">Decrement</button>
      </div>
      
      <br />
      <div class="setvalue-container">
        <input type="number" v-model="value" />
    <button class="set-value" @click="setValue(value)">Set Value</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import useCounter from "../composables/useCounter"
  export default {
    name: 'CounterView',
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
    
  }
  </script>

  <style scoped>
.counter-container{
  border: 10px solid white;
  /* border-radius: 5px; */
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  padding: 10px;
  max-width: 500px;
  margin: 0 auto;
}
h1{
  text-align: center;
  color: white;
}
p{
  text-align: center;
  font-size: 40px;
  padding: 10px;
  color: white;
  margin-bottom: 20px;
}

.button-container{
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 600px) {
  .button-container{
    flex-direction: column;
  }
  .increase{
    margin-bottom: 10px;
  }
  .decrease{
    margin-top: 10px;
  }
}
  

.increase{
  background-color: rgb(2, 83, 2);
  color: white;
  border: 2px solid black;
  padding: 7px 16px;
  font-size: 15px;
  margin: 10px;
  border-radius: 8px;
  cursor: pointer;
}

.increase:hover{
  background-color: rgb(5, 177, 5);
}
.decrease{
  background-color: rgb(182, 141, 5);
  color: white;
  border: 2px solid black;
  padding: 7px 16px;
  border-radius: 8px;
  font-size: 15px;
  margin: 10px;
  cursor: pointer;
}

.decrease:hover{
  background-color: rgb(238, 184, 5);
}
.reset{
  background-color: rgb(185, 6, 6);
  color: white;
  border: 2px solid black;
  padding: 7px 16px;
  border-radius: 8px;
  font-size: 15px;
  margin: 10px;
  cursor: pointer;
}

.reset:hover{
  background-color: rgb(255, 14, 14);
}

.setvalue-container{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

@media screen and (max-width: 600px) {
  .setvalue-container{
    flex-direction: column;
  }
  .set-value{
    margin-top: 10px;
   
  }
  
}

input{
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  margin-top: 7px;
  display: inline-block;
  margin-bottom: 10px;
}

.set-value{
  background-color: rgb(7, 7, 7);
  color: white;
  border: 2px solid white;
  padding: 8px 25px;
  font-size: 15px;
  margin: 10px;
  border-radius: 8px;
  cursor: pointer;
}

.set-value:hover{
  background-color: white;
  color: black;
  border: 2px solid black;
}
  </style>
  