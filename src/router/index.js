import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import AdminLayout from "../layout/AdminLayout"
import store from '../store/index'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    beforeEnter: guard,
    redirect: 'users',
    component: AdminLayout,
    children: [
      {
        path: '/users',
        name: 'usersList',

        component: () => import(/* webpackChunkName: "demo" */ '../views/users/UsersList.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    beforeEnter: guardAuth,
    component: Login
  }
];

const router = new VueRouter({
  linkExactActiveClass: 'active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

function guard(to, from, next) {
  if (store.state.authentication.token) {
    next(); // allow to enter route
  } else {
    next('/login'); // go to '/login';
  }
}

function guardAuth(to, from, next) {
  if (store.state.authentication.token) {
    next('/'); // go to '/login';
  } else {
    next()
  }
}

export default router
