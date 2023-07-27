import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "@/views/HomePage";
import About from "@/views/About";
import ProductsName from "@/views/ProductsName";
import ProductsDetail from "@/views/ProductsDetail"
import Login from "@/views/Login";
import Profile from "@/views/Profile"


Vue.use(VueRouter)

const routes = [
  {
    path : "/",
    name: "HomePage",
    component : HomePage,
  },
  {
    path : "/about",
    name: "About",
    component : About,
  },
  {
    path : "/product",
    name : "Products",
    component : ProductsName,
  },
  {
    path : "/product/:id",
    name : "ProductsDetail",
    component : ProductsDetail,
  },
  {
    path : "/login",
    name : "Login",
    component : Login
  },
  {
    path :"/profile",
    name : "Profile",
    component : Profile,
    // beforeEnter: (to, from,next) => {
    //   let auth = localStorage.getItem("auth")
    //   if(auth){
    //     next()
    //   }else{
    //     next("/login")
    //   }

    // },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from,next) => {
  if(to.path === "/profile" || to.path === "/product"){
    let auth = localStorage.getItem("auth")
      if(auth){
        next()
      }else{
        next("/login")
      }
  }else{
    next()
  }
})


export default router
