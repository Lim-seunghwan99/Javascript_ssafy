<template>
    <div>
        {{ myString }}
        <button v-on:click="buttonClick">버튼 클릭</button>
    </div>
</template>

<script setup>
// import {defineProps} from 'Vue';
// defineProps({ // 1. 객체 형태로 props를 선언 (권장)
//     message: String,    
// })
import { computed } from 'vue'
const props = defineProps({
  message: String,
})
console.log(props)
console.log(props.message)
// const myString = '메시지 : ' + props.message

// computed, watch <----
const myString = computed(() => {
    return '메시지 : ' + props.message
})

// 전화번호 예시
// const myPhone = computed(() => {
//     return props.message.substring(0, 3) + '-' + props.message.substring(3, 7) + '-' + props.message.substring(7)
// })


// defineProps(['message']) // 2. 문자열 배열 형태로 props 선언
const emit = defineEmits(['myEvent'])
const buttonClick = function () {
    emit('myEvent')
}

</script>

<style scoped>

</style>