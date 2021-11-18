import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '', redirect: '/coaches' },
    {
      path: '/coaches',
      componet: null,
      children: [{ path: '/contact', componet: null }],
    },
    {path:'/register',componet:null},
    {path:'/request',componet:null},
    {path:'/request',componet:null},
    {path:'/:notFound(.*)',componet:null},
  ],
});
