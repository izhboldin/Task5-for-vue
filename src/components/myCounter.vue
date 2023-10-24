<template lang="">
    <div>
        <router-link :to="{name: 'home'}">На главную</router-link>
        <hr>
        <!-- task13 -->
        <label for=""></label>  
        <input type="number" v-model='num'>
        <br>
        <button @click="num++">Плюс</button>
        <button @click="num--">Минус</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            num: 0,
        }
    },
    
}
</script>
<style lang="">
    
</style>