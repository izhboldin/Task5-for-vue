<template lang="">
  <div>
    <!-- task1 -->
    <router-link :to="{name: 'home'}">Home  </router-link> |
    <router-link :to="{name: 'about'}">About</router-link> 
    <br>  
    <!-- task2 -->
    <router-link :to="{name: component}">click</router-link>
    <br>
    <label for="">Routing: </label>
    <select v-model="component">
      <option value="home">Home</option>
      <option value="about">About</option>
    </select>    
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      component: '',
    }
  },
  methods: {
    log() {
      console.log(this.$route.meta.role);
    }
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
  margin-top: 60px;
}

button {
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border: 1px solid #ccc ;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}

button:active {
  background-color: #20729c;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

label {
  font-weight: bold;
}

h1 {
  font-size: 24px;
  color: #333;
}

p {
  font-size: 16px;
  color: #666;
}

a {
  color: #3498db;
  text-decoration: none;
}

select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  position: relative;
  z-index: 2;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  font-size: 16px;

}

select option {
  padding: 10px;
  background-color: #fff;
  color: #333;
}
</style>

<!-- <script setup>
import {
  useRoute
} from 'vue-router'
const route = useRoute()
</script> -->