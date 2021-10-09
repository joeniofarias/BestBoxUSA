import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import Landing from './pages/Landing.vue';
import Login from './pages/Login.vue';
import Profile from './pages/Profile.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';
import Main from './pages/Main.vue';
import MainNavbarSecured from './layout/MainNavbarSecured.vue';
import NewUser from './pages/NewUser.vue';
import { auth } from './firebase';


Vue.use(Router);

const router = new Router({
  linkExactActiveClass: 'active',
  routes: [
    // {
    //   path: '*',
    //   redirect: '/login'
    // },
    {
      path: '/',
      name: 'index',
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/landing',
      name: 'landing',
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/secured',
      name: 'main',
      components: { default: Main, Landing, header: MainNavbarSecured, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },

    {
      path: '/login',
      name: 'login',
      component: Login,
      props: {
        header: { colorOnScroll: 400 }
      }
    },


    {
      path: '/new-user',
      name: 'new-user',
      component: NewUser,
      props: {
        header: { colorOnScroll: 400 }
      }
    },

    {
      path: '/profile',
      name: 'profile',
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});


//TODO: revisitar e implementar login condicional
// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
//   console.log(`requiresAuth : ${requiresAuth}`);
//   const loggedInUser = auth.currentUser;

//   if (requiresAuth && !loggedInUser) {
//     console.log(`[UNAUTHORIZED] route: ${to.path}`);
//     next('/login')
//   } else {
//     console.log(`[OK] route: ${to.path}`);
//     next()
//   }
// })

export default router;
