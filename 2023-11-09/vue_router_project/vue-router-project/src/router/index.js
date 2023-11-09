// Vue Router를 사용하기 위한 모듈을 im,port...
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import UserProfile from "@/views/UserProfile.vue";

// createRouter 함수를 사용해서 라우터 인스턴스를 생성
const router = createRouter({
  // 브라우저단에서 어떤 경로로 이동할 때 1. 그 히스토리를 해쉬(#)로 남길지, 2. history API('/') 경로를 직접 남기겠는가, 메모리상에서만 진행하겠는가.
  history: createWebHistory(),
  // routes 배열에 경로와 컴포넌트를 맵핑하여 설정할 수 있다.
  // 각 경로에 해당하는 컴포넌트를 렌더링할 수 있도록 지정..
  routes: [
    {
      path: "/",
      name: "home", // 라우트에 이름을 지정
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("@/views/AdminView.vue"),
      beforeEnter: (to, from) => {
        console.log("해당 페이지는 어드민 유저만 접근할 수 있어요!");
      },
      meta: {
        loginRequired: true,
      },
    },
    {
      path: "/users/:id",
      name: "profile",
      // 페이지가 컴포넌트가 너무 큰 경우. 동적으로 불러올 수 있다!
      component: () => import("@/views/UserProfile.vue"),
      //   children: [
      //     // 중첩 라우팅
      //     {
      //       path: ":id",
      //       component: UserProfile,
      //     },
      //   ],
    },
  ],
});

// const isAdmin = () => true;
// const isLogined = () => false;
// // 각 라우트 전환 직전에 실행되는 가드
// // 보통의 경우에 로그인 정보를 확인하거나,
// // 관리자 정보 권한을 확인하는데 사용
// router.beforeEach((to, from) => {
//   // to : 내가 가려하는 위치(라우트 정보)
//   // from : 내가 왔던 위치(라우트 정보)
//   // 프로필 페이지로 접근하려고할 때, 이때 로그인이 되어 있지 않다면! 그러면 About 페이지로 이동!
//   if (to.name === "profile" && !isLogined()) {
//     return { name: "about" };
//   } else if (to.name === "admin" && !isAdmin()) {
//     return false; // 라우터 이동을 취소...!
//   }
// });

// // 각 라우트 전환 후에 컴포넌트가 완전히 로드되기 직전에 실행하는 가드
// router.beforeResolve((to, from, next) => {
//   // 데이터 로딩 등의 작업이 완료될 때까지 대기... <-
//   // (비동기 네트워크 작업이 완료되기 전까지 컴포넌트 렌더링이 지연 역할로 활용)
//   //   loadData().then(() => {
//   //     // next({name: '...'})
//   //   });
// });

// // 각 라우트 전환이 완료된 후에 실행되는 마지막 가드
// router.afterEach((to, from) => {
//   // 페이지가 전환된 후에 실행되는 로그 관련 작업을 주로 수행...
//   console.log(to.fullPath);
//   console.log(from.fullPath);
// });

// 생성한 라우터 인스턴스를 내보내서 다른 파일에서 사용할 수 있도록 한다.
export default router;
