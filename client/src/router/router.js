import { createRouter, createWebHistory } from "vue-router";
import Axios from "@/api/axios";
import login from "@/view/loginPage.vue";
import register from "@/view/registerPage.vue";
import homePage from "@/view/homePage.vue";
import profilePage from "@/view/profilePage.vue";
import NotFound from "@/view/404page.vue"


const router = createRouter({
    history: createWebHistory(), // <=== i have no idea what's happening here
    routes:[
        { path: "/", component: homePage },
        { path: "/login", component: login, meta: { guest: true } },
        { path: "/register", component: register, meta: { guest: true } },
        { path: "/profile", component: profilePage, meta: { requiresAuth: true } },
        { path: "/:pathMatch(.*)*", component: NotFound }
        
    ]
})



const checkAuth = () => {
  const token = localStorage.getItem('authToken');
  if (!token) return false;
  else return true; 
};


  

   // // i have no idea what is going on in router.beforeEach() 👇 and CHAT GPT told me to 🤖 do it
  // Navigation guard for authentication
  router.beforeEach( (to, from, next) => {
    const isAuthenticated = checkAuth();
  
    if (to.meta.requiresAuth && !isAuthenticated) {
      next("/login"); // Redirect to login if not authenticated
    } else if (to.meta.guest && isAuthenticated) {
      next("/profile"); // Redirect logged-in users away from login/register
    } else {
      next()
    }
  });

export default router
