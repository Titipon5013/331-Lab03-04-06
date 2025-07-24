import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PassengerDetails from '../views/PassengerDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/passenger/:id',
    component: PassengerDetails,
    children: [
      {
        path: '',
        name: 'PassengerInfo',
        component: () => import('../views/PassengerInfo.vue')
      },
      {
        path: 'airline',
        name: 'PassengerAirline',
        component: () => import('../views/AirlineInfo.vue')
      }
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
