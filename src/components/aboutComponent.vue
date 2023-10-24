<template lang="">
    <div>
        <router-link :to="{name: 'home'}">На главную</router-link>
        <!-- task4 -->
        <hr>
        <!-- task6 -->
        <section v-if="route.name === 'about'">
            <button @click="route.meta.myRole = 'admin'" >стать адмиом</button>⠀
            <button @click="route.meta.myRole = 'user'" >стать пользователем</button>
        </section>
        <br>
        <section v-if="route.name === 'about'">
            <button @click="router.push({ name: 'about-me' })">
                Страница доступная только админам
            </button>
        </section>
        <br>
        <section v-if="route.name === 'about'">
            <button @click="router.push({ name: 'is-auth' })">
                Страница доступная только авторизованым пользователям
            </button>
        </section>
        <!-- task3 -->
        <router-view></router-view>
        </div>
</template>
<script>
export default {

}
</script>
<style lang="">
    
</style>

<!-- task4 -->
<script setup>
import {
    useRouter,
    useRoute
} from 'vue-router'
const router = useRouter()
const route = useRoute()
</script>