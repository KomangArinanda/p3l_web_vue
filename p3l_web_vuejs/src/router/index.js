import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/AppHome'
import AppLogin from '@/components/AppLogin'
import AppSignUp from '@/components/AppSignUp'
import Forget from '@/components/forgetPassword/Forget'
import ResetPassword from '@/components/forgetPassword/ResetPassword'
import ShowRoomAvailable from '@/components/pages/reservation/ShowRoomAvailable'
import RoomDetails from '@/components/pages/reservation/RoomDetails'
import Booking from '@/components/pages/reservation/Booking'
import Review from '@/components/pages/reservation/Review'
import Payment from '@/components/pages/reservation/payment/Payment'
import Finish from '@/components/pages/reservation/payment/Finish'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/login',
      name: 'AppLogin',
      component: AppLogin
    },
    {
      path: '/forget-password',
      name: 'Forget',
      component: Forget
    },
    {
      path: '/reset-password',
      name: 'Reset',
      component: ResetPassword
    },
    {
      path: '/signup',
      name: 'AppSignUp',
      component: AppSignUp
    },
    {
      path: '/search',
      name: 'ShowRoomAvailable',
      component: ShowRoomAvailable
    },
    {
      path: '/detail/roomTypeName',
      name: 'RoomDetails',
      component: RoomDetails
    },
    {
      path: '/booking',
      name: 'Booking',
      component: Booking
    },
    {
      path: '/booking/review',
      name: 'Review',
      component: Review
    },
    {
      path: '/booking/payment',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/booking/finish',
      name: 'Finish',
      component: Finish
    }
  ]
})
