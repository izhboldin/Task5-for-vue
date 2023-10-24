<!-- task7 -->
<template>
      <h1>Пользователь ID {{ id }}</h1>
      <section>
        <router-link :to="{ name: 'home' }">На главную</router-link>
      </section>
  </template>

<script>
export default {
  data() {
    return {
        props: ['id'], 
    }
  },
  methods: {
  },
}
</script>
  
  <script setup>
    import {
      computed
    } from 'vue'
    import {
      useRoute
    } from 'vue-router'
    const route = useRoute()
    const id = computed(() => route.params.id)
  </script>