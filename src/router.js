import { createRouter, createWebHistory } from 'vue-router';
import CoachDetails from './pages/coaches/CoachDetails.vue';
import CoachList from './pages/coaches/CoachList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/request/ContactCoach.vue';
import RequestRecived from './pages/request/RequestRecived.vue';
import NotFound from './pages/NotFound.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '', redirect: '/coaches' },
    {
      path: '/coaches',
      component: CoachList,

      children: [{ path: '/contact', component: ContactCoach }],
    },
    { path: '/coaches/:id', component: CoachDetails },
    { path: '/register', component: CoachRegistration },
    { path: '/request', component: RequestRecived },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});
