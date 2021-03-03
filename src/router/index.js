import vue from "vue"
import vueRouter from "vue-router"

import routes from "./routes"

vue.use(vueRouter)

const router = new vueRouter({
    routes,
    mode:"history"
})

export default router