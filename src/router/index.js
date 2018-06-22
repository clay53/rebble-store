import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AppList from '@/components/pages/AppList'
import Featured from '@/components/pages/Featured'
import Category from '@/components/pages/Category'
import AppView from '@/components/pages/AppView'
import AppDetails from '@/components/pages/AppDetails'
import AppVersions from '@/components/pages/AppVersions'
import Author from '@/components/pages/Author'
import Search from '@/components/pages/Search'
import Collection from '@/components/pages/Collection'
import Settings from '@/components/pages/Settings'
import Error from '@/components/pages/Error'

Vue.use(Router)

const routes = [
  {path: '/', component: Home},
  {path: '/apps', component: AppList},
  {path: '/featured', component: Featured},
  {
    path: '/category/:id/:sort/:page',
    component: Category
  },
  {
    path: '/category/:id',
    redirect: '/category/:id/hearts/1'
  },
  {
    path: '/category/:id/:sort',
    redirect: '/category/:id/:sort/1'
  },
  {
    path: '/app/:id',
    component: AppView,
    children: [
      {
        path: '',
        component: AppDetails
      },
      {
        path: 'versions',
        component: AppVersions
      }
    ]
  },
  {path: '/author/:id', component: Author},
  {path: '/search', component: Search},
  {path: '/collection/:id', component: Collection},
  {path: '/settings', component: Settings},
  {path: '*', component: Error}
]

export default new Router({
  routes: routes,
  mode: 'history'
})
