import Vue from 'vue'
import Router from 'vue-router'
import musicHall from '../pages/musicHall'
import musicMine from '../pages/musicMine'
import musicFind from '../pages/musicFind'
import musicEnjoy from '../pages/musicEnjoy'
import musicSortList from '../pages/musicSortList'
import musicSinger from '../pages/musicSinger'
import musicRankList from '../pages/musicRankList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect:"musicHall"
    },
    {
      path: '/musicHall',
      name: 'musicHall',
      component: musicHall
    },
    {
      path: '/musicMine',
      name: 'musicMine',
      component: musicMine
    },
    {
      path: '/musicFind',
      name: 'musicFind',
      component: musicFind
    },
    {
      path: '/musicEnjoy',
      name: 'musicEnjoy',
      component: musicEnjoy
    },
    {
      path: '/musicSortList',
      name: 'musicSortList',
      component: musicSortList
    },
    {
      path: '/musicSinger',
      name: 'musicSinger',
      component: musicSinger
    },
    {
      path: '/musicRankList',
      name: 'musicRankList',
      component: musicRankList
    }
  ]
})
