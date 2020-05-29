import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Crud from '../views/CRUD.vue'
import Blog from '../views/Blog.vue'
import Todo from '../views/Todo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/blog',
    children: [{
      path: 'crud',
      name: 'Crud',
      component: Crud
    },
    {
      path: 'blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: 'todo',
      name: 'Todo',
      component: Todo
    }]
  },
  // {
  //   path: '/crud',
  //   name: 'Crud',
  //   component: Crud
  // },
  // {
  //   path: '/blog',
  //   name: 'Blog',
  //   component: Blog
  // },
  // {
  //   path: '/todo',
  //   name: 'Todo',
  //   component: Todo
  // }
]

const router = new VueRouter({
  routes
})

export default router
