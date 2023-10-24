import { createRouter, createWebHistory } from "vue-router";
import Home from '@/components/homeComponent.vue'
import About from '@/components/aboutComponent.vue'
import AboutMe from '@/components/aboutMeComponent.vue'
import isAuth from '@/components/isAuthComponent.vue'
import NotFoundView from '@/components/NotFoundView.vue'
import UserView from '@/components/UserView.vue'
import useVModel from '@/components/useVModel.vue'
import MyCounter from '@/components/myCounter.vue'
import Toggle from '@/components/toggleComponent.vue'
import SelectComp from '@/components/SelectComponent.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,

  },
  {
    path: "/about",
    name: "about",
    component: About,
    children: [{
      path: 'me',
      name: "about-me",
      component: AboutMe,
      meta: { role: 'admin', myRole: '' }
    },
    {
      path: 'isAuth',
      name: "is-auth",
      component: isAuth,
      meta: { role: 'user', myRole: '' }
    }]
  },
  {
    path: "/notFound",
    name: "404",
    component: NotFoundView,
  },
  {
    path: '/user/:id',
    name: 'user',
    component: UserView,
    props: true,
  },
  {
    path: '/useV-model',
    name: 'vModel',
    component: useVModel,
  },
  {
    path: '/counter',
    name: 'counter',
    component: MyCounter,
  },
  {
    path: '/toggle',
    name: 'toggle',
    component: Toggle,
  },
  {
    path: '/select',
    name: 'select',
    component: SelectComp,
  },
];


const router = createRouter({
  routes,
  history: createWebHistory(),
});

// task4
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.role)) {
    const requiredRole = to.meta.role;
    const userRole = from.meta.myRole
    if (userRole !== requiredRole) {
      next('/notFound');
      console.log(1);
    } else {
      console.log(2);
      next();
    }
  } else {
    console.log(3);
    next();
  }
});


export default router;

