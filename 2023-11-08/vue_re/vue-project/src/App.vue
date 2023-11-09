<template>
  <div>
    <!-- 정적인 방식의 props 데이터 전달 -->
    <ChildComponent message="안녕하세요!" v-on:myEvent="emitButtonClick"/>
    <!-- 동적인 방식의 props 데이터 전달 -->
    <ChildComponent v-bind:message="myMsg" 
      v-on:myEvent="emitButtonClick"/>
    <input type="text" v-model="myMsg">
  </div>
</template>

<script setup>
import {ref} from "vue"
import ChildComponent from './components/ChildComponent.vue'

const myMsg = ref("누구세요?")
const emitButtonClick = function() {
  alert("클릭되었어요!")
}
</script>

<style scoped>

</style>