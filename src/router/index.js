import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import PassengerDetails from '../views/PassengerDetails.vue'
import NotFound from '../views/NotFound.vue'
import EditPassenger from '../views/EditPassenger.vue'
import axios from 'axios'


const routes = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/passenger/:id',
    component: PassengerDetails,
    children: [
      {
        path: '',
        name: 'PassengerInfo',
        component: () => import('../views/PassengerInfo.vue'),
        props: true,
        beforeEnter: async (to, from, next) => {
          try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${to.params.id}`)
            to.params.user = res.data
            next()
          } catch (e) {
            to.params.user = { error: 'User not found' }
            next()
          }
        }
      },
      {
        path: 'airline',
        name: 'PassengerAirline',
        component: () => import('../views/AirlineInfo.vue'),
        props: true,
        beforeEnter: async (to, from, next) => {
          try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${to.params.id}`)
            to.params.user = res.data
            next()
          } catch (e) {
            to.params.user = { error: 'Company info not found' }
            next()
          }
        }
      },
      {
        path: 'edit',
        name: 'EditPassenger',
        component: EditPassenger,
        props: true
      }
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})
