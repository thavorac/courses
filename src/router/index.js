import { createWebHistory, createRouter } from 'vue-router'
import Page1 from "../components/Page1"
import Page2 from "../components/Page2"
import Page3 from "../components/Page3"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Page1
  },
  {
    path: "/page1/:hello",
    name: "Page1",
    component: Page1,
    props: true
  },
  {
    path: "/page2",
    name: "Page2",
    component: Page2
  },
  {
    path: "/page3",
    name: "Page3",
    component: Page3
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router