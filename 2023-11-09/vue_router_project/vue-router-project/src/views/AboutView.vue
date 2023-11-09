<template>
  <h1>AboutView</h1>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

// route 객체를 인스턴스화 : 현재 라우트 정보에 접근할 수 있는 객체
const route = useRoute();

console.log(route.name); // 라우트 이름값
console.log(route.path); // 라우트 경로

console.log(route.query); // 쿼리 파라미터

console.log(route.meta); // 라우트의 메타 정보

console.log(route.fullPath); // 라우트의 전체 경로

console.log(route.params); // 전달한 동적 라우팅 정보

// router 객체를 인스터스화 : 라우터 인스턴스를 호출해서 다른 페이지 이동(전환)을 JS단에서 진행할 수 있게 해줌
const router = useRouter();

// 프로그래밍적인 방식으로 라우트 이동을 수행...
router.push("/");
router.push({ name: "profile", params: { id: 1 } });

// 현재 위치만 바꾸고, 히스토리는 남기지 않는다.
router.replace("/");

// 히스토리를 중심으로 한단계 앞으로 간다
router.go(1); // router.forward();

// 히스토리를 중심으로 한단계 뒤로간다.
router.go(-1); // router.back();

// 현재 라우트를 리로드합니다.
router.go(0);
</script>

<style scoped></style>
