<template lang="">
    <div>
        Главная
        <hr>
        <section v-if="route.name === 'home'">
            <button @click="router.push({ name: 'vModel' })">
                компонент, який використовує v-model
            </button>
        </section>
        <section v-if="route.name === 'home'">
            <button @click="router.push({ name: 'counter' })">
                счетчик
            </button>
            <button @click="router.push({ name: 'toggle' })">
                переключатель
            </button>
        </section>
        <section v-if="route.name === 'home'">
            <button @click="router.push({ name: 'select' })">
                компонент "Select Component" з використанням v-model
            </button>
        </section>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>

<script setup>
import {
    useRouter,
    useRoute
} from 'vue-router'
const router = useRouter()
const route = useRoute()
</script>
