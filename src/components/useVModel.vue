<template lang="">
    <div>
        <router-link :to="{name: 'home'}">На главную</router-link>
        <hr>
        <!-- task10, 11 -->
        <label for="inputNameValue">Имя: </label>
        <input type="text" v-model="inputNameValue">
        <br>
        <label for="inputAgeValue">Возраст: </label>
        <input type="number" min="1" max="150" v-model="inputAgeValue">
        <br>
        <label for="inputPhoneValue">Телефон: +380</label>
        <input type="text" v-model="inputPhoneValue">
        <br>
        <button @click="examination()">Отправить</button>
        <br>
        <p>{{problem}}</p>
        <hr>
        <!-- task12 -->
        <label for="inputTextValue">текст:</label>
        <input type="text" v-model="inputTextValue">
        <br>
        <label for="inputTextValue">число:</label>
        <input type="number" v-model="inputNumValue">
        <br>
        <label for="inputTextValue">чекбокс:</label>
        <input type="checkbox" v-model="inputBoolValue">
        <p v-if="inputBoolValue">текст: {{inputTextValue}}</p>

    </div>
</template>
<script>
export default {
    data() {
        return {
            inputNameValue: '',
            inputAgeValue: '',
            inputPhoneValue: '',
            problem: '',
            inputTextValue: '',
            inputNumValue: 246,
            inputBoolValue: true,
        }
    },
    methods: {
        examination() {
            if (this.inputNameValue.trim() == '' || this.inputAgeValue == '' || this.inputPhoneValue.trim() == '') {
                this.problem = 'Поля не должны быть пустыми'
            }
            else if (this.inputAgeValue <= 0 || this.inputAgeValue > 150){
                this.problem = 'Возрасть должен быть в диапозе 1...150'
            }
            else if (this.inputPhoneValue.trim().length != 9 || isNaN(+this.inputPhoneValue)) {
                this.problem = 'номер должен сосотоять из 9 чисел, например: 950965231'
            }
            else {
                this.problem = 'Форма отправлена'
            }
        }
    },

}
</script>
<style lang="">
    
</style>