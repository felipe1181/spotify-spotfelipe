import Home from '../pages/home/Home.vue';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      allowAnonymous: false,
    },
  },
];
