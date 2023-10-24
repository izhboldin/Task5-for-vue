<template lang="">
    <div>
        <CustomSelect :options="['Option 1', 'Option 2', 'Option 3']" v-model:value="selectedOption"/>       
         <p v-if='selectedOption != ""'>Значение: {{selectedOption}}</p>
        
    </div>
</template>
<script>
import CustomSelect from '@/components/CustomSelect.vue'
export default {
    components: {
        CustomSelect
  },
  data() {
    return {
        selectedOption: ''
    }
  },
    
}
</script>
<style lang="">
    
</style>