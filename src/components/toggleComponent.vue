<template lang="">
    <div>
        <!-- task14 -->
        <input type="checkbox" v-model="bool">
        <button @click="bool = !bool">изменить значение</button>
        <p v-if="bool">Hello!</p>
        <p v-else>Bye!</p>
        <hr>
        <!-- task15 -->
        <p :class='classM'> текст</p>
        <input type="text" v-model='classM' placeholder="blue or red">

    </div>
</template>
<script>
export default {
    data() {
        return {
            bool: false,
            classM: ''
        }
    },
    
}
</script>
<style>
    .blue{color: blue;}
    .red{color: red;}
</style>