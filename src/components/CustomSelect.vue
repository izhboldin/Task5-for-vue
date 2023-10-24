<template lang="">
    <div>
        <select class="form-select" v-model="selectedOption">
            <option value="" disabled>Выберите:</option>
            <option v-for="option in options" :key="option">{{ option }}</option>
        </select>
    </div>
</template>
<script>
export default {
    props: {
        options: {
            type: Array,
            required: true
        },
        value: {
            type: String,
        }
    },
    data() {
        return {
            selectedOption: this.value
        };
    },
    watch: {
        selectedOption(newValue) {
            this.$emit('update:value', newValue);
        }
    }
}
</script>
<style>
    
</style>