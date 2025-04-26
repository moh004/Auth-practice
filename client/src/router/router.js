import { createRouter, createWebHistory } from "vue-router";
import Axios from "@/api/axios";
import login from "@/view/loginPage.vue";
import register from "@/view/registerPage.vue";
import homePage from "@/view/homePage.vue";
import profilePage from "@/view/profilePage.vue";
import NotFound from "@/view/404page.vue"


const router = createRouter({
<<<<<<< HEAD
  history: createWebHistory("/"), // <=== i have no idea what's happening here
=======
    history: createWebHistory("/"), // <=== i have no idea what's happening here
>>>>>>> 7082119afeea85c2c4f318b60717604173ea05cd
    routes:[
        { path: "/", component: homePage },
        { path: "/login", component: login, meta: { guest: true } },
        { path: "/register", component: register, meta: { guest: true } },
        { path: "/profile", component: profilePage, meta: { requiresAuth: true } },
        { path: "/:pathMatch(.*)*", component: NotFound }
        
    ]
})



<<<<<<< HEAD
 const isAuth = async () => {
  
  try {
    const response = await Axios.get("/check-auth", { withCredentials: true })
    
    return response.data.isAuthenticated;
  } catch (error) {
    console.error("Auth check failed:", error);
    return false;
}
};
=======
const checkAuth = () => {
  const token = localStorage.getItem('authToken');
  if (!token) return false;
  else return true; 
};


>>>>>>> 7082119afeea85c2c4f318b60717604173ea05cd
  

   // // i have no idea what is going on in router.beforeEach() 👇 and CHAT GPT told me to 🤖 do it
  // Navigation guard for authentication
<<<<<<< HEAD
  router.beforeEach( async (to, from, next) => {
    const isAuthenticated = await isAuth();
=======
  router.beforeEach( (to, from, next) => {
    const isAuthenticated = checkAuth();
>>>>>>> 7082119afeea85c2c4f318b60717604173ea05cd
  
    if (to.meta.requiresAuth && !isAuthenticated) {
      next("/login"); // Redirect to login if not authenticated
    } else if (to.meta.guest && isAuthenticated) {
      next("/profile"); // Redirect logged-in users away from login/register
    } else {
      next()
    }
  });

export default router
