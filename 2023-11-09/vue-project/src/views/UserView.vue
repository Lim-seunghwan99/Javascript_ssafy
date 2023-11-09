<template>
    <div>
        <h1>UserView</h1>
        <h2>{{ $route.params.id }} 유저의 페이지입니다.</h2>
        <h2>{{ userId }} 유저의 페이지입니다.</h2>
        <button @click="goHome">홈으로!</button>
        <button @click="goAnotherUser">100번 유저 페이지로!</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
// import router from '../router';

const route = useRoute()
const userId = ref(route.params.id)
// 자바스크립트에서 반응형 변수로 넣고 template에서 처리

// 프로그래밍 방식 네비게이션
const router = useRouter()

const goHome = function () {
    // router.push({ name: 'home' })
    router.replace({name: 'home'}) // 위와 같은 방식
}

// In-component Guard
// 1.
onBeforeRouteLeave((to, from) => {
    const answer = window.confirm("정말 떠나실 건가요?")
    if (answer === false) {
        return false
    }
})

// 2.onBeforeRouteUpdate
const goAnotherUser = function () {
    router.push({name: 'user', params: {id: 100}})
}

onBeforeRouteUpdate((to, from) => {
    userId.value = to.params.id
})

</script>

<style scoped>

</style>