import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f99d72b2 = () => interopDefault(import('..\\pages\\my-pokemon-list.vue' /* webpackChunkName: "pages/my-pokemon-list" */))
const _0825702d = () => interopDefault(import('..\\pages\\pokemon-detail.vue' /* webpackChunkName: "pages/pokemon-detail" */))
const _4439bafa = () => interopDefault(import('..\\pages\\pokemon-list.vue' /* webpackChunkName: "pages/pokemon-list" */))
const _eabb72c0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/my-pokemon-list",
    component: _f99d72b2,
    name: "my-pokemon-list"
  }, {
    path: "/pokemon-detail",
    component: _0825702d,
    name: "pokemon-detail"
  }, {
    path: "/pokemon-list",
    component: _4439bafa,
    name: "pokemon-list"
  }, {
    path: "/",
    component: _eabb72c0,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
