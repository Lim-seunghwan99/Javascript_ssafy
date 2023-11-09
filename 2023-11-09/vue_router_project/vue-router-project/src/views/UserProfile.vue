<template>
  <h1>UserProfile</h1>
  <!-- $route.params 라는 값을 통해서 접근... -->
  <p>{{ $route.params.id }}</p>
  <p>유저 ID : {{ userId }}</p>
</template>

<script setup>
import { ref } from "vue";
import {
  useRoute,
  onBeforeRouteEnter,
  onBeforeRouteUpdate,
  onBeforeRouteLeave,
} from "vue-router";
const route = useRoute();
const userId = ref(null);
userId.value = route.params.id;
// 컴포넌트에 대한 라우트 매개변수가 변화하면 업데이트가 진행되도록 네비게이션 가드!
onBeforeRouteUpdate((to, from) => {
  userId.value = to.params.id;
});

//
// onBeforeRouteEnter()
onBeforeRouteLeave((to, from) => {
  console.log("컴포넌트 바깥으로 빠져나갑니다!");
});
</script>

<style scoped></style>
