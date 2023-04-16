//  imports always go at the top
import LogInPage from './components/TheLoginComponents.js';
// import UsersComponent from './components/TheUsersComponents.js';
import AllUsersPage from './components/TheAllUsersComponent.js';
import DefaultHome from './components/TheHomePage.js';
import KidsHome from './components/TheKidsHomePage.js';

const { createApp } = Vue;
// import the createApp method from the Vue library

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes: [
        // the vue router will try to match these routes
        // this is what you put in the location bar in the browser
        // when you get a match, vue will render the specified component
        {
            path: '/', //browser location bar looks like this
            name: 'login', // for programmatic navigation
            component: LogInPage // the component to render
        },

        // this is a temp route for testing component to render

        {
            path: '/users', //browser location bar looks like this
            name: 'allusers', // for programmatic navigation
            component: AllUsersPage // the component to render
        },

        {
            path: '/home', // this would be adult homepage
            name: 'home',
            component: DefaultHome
        },

        {
            path: '/kidshome', // this would be kids homepage
            name: 'kidshome',
            component: KidsHome
        },
        

        // { 
        //     path: '/users', //browser location bar looks like this
        //     name: 'users', // for programmatic navigation
        //     component: UsersComponent // the component to render
        // },
        // put a catch-all for broken routes at the very bottom of your routes stack
        // if vue router can't match a given route, it'll display a generic error component

        // { 
        //     path: '/:pathMatch(.*)*', //browser location bar looks like this
        //     name: 'error', // for programmatic navigation
        //     component: ErrorPage // the component to render
        // }

    ], // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app = Vue.createApp({
    // methods: {
    //     tryRouterPush() {
    //         this.$router.push({
    //             name: 'home'
    //         })
    //     }

    // }

    mounted() {
        // check for a previous login in local storage
        if(window.localStorage.getItem('user')) {
            this.authenticated = true ;
            this.$router.push({name: 'allusers'});
        }
    },

    data() {
        return {
            authenticated: false
        }
    },

    methods: {
        logUserOut() {
            this.authenticated = false;

            window.localStorage.removeItem('user');
            this.$router.push({ name: 'login' });
        },

        loggedIn() {
            this.authenticated = true;
        }
    }
})
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app');

