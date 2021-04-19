import Vue from 'vue'
import Router from 'vue-router'
import store from '../store.js'

Vue.use(Router);



let router=  new Router({



    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    //mode: 'history',
    routes: [

        // Dashboards
        {   //login
            path: '/',
            name: 'Login', 
            meta: {layout: 'userpages'},
            component: () => import('../Modulos/Auth/Login.vue'),
        },
        {   //login
            //path: '/via40onlineexpress/dist/Login',
            path: '/Login',
            name: 'Login', 
            meta: {layout: 'userpages'},
            component: () => import('../Modulos/Auth/Login.vue'),
        },
        //recuados
        {
            //path: '/via40onlineexpress/dist/RecaudosChinauta',
            path: '/RecaudosChinauta',
            name: 'RecaudosChinauta',
            meta: { requiresAuth: true},
            component: () => import('../DemoPages/Dashboards/Chinauta.vue'),
            
        },
        {
            //path: '/via40onlineexpress/dist/RecaudosChinauta',
            path: '/PerfilSalud',
            name: 'PerfilSalud',
            meta: { requiresAuth: true},
            component: () => import('../DemoPages/Dashboards/PerfilSalud-vue.vue'),
            
        },


        
        {
            path: '/via40onlineexpress/dist/Login2',
            name: 'Recaurdos2',
            component: () => import('../DemoPages/Dashboards/Analytics.vue'),
            
        },
        
        {
            path: '/con',
            name: 'analytics',
            component: () => import('../DemoPages/Dashboards/Analytics.vue'),
            meta: { 
                requiresAuth: true
            }
        },

        // Pages
        {
            path: '/SST',
            name: 'SST',
            meta: { 
                requiresAuth: true
            },
            component: () => import('../DemoPages/Dashboards/SST.vue'),
        },
        {
            path: '/MenuPrincipal',
            name: 'MenuPrincipal',
            meta: { 
                requiresAuth: true
            },
            component: () => import('../DemoPages/Dashboards/MenuPrincipal.vue'),
        },

        
        {
            path: '/Recaudo-Chinauta',
            name: 'Recaudo-Chinauta',
            meta: { 
                requiresAuth: true
            },
            component: () => import('../DemoPages/Dashboards/Recaudo-chinauta.vue'),
        },
        {
            path: '/Recaudo-Chusaca',
            name: 'Recaudo-Chusaca',
            meta: { 
                requiresAuth: true
            },
            component: () => import('../DemoPages/Dashboards/RecaudoChusaca.vue'),
        },
        {
            path: '/RecaudoDataChinauta',
            name: 'RecaudoDataChinauta',
            meta: { 
                requiresAuth: true
            },
            component: () => import('../DemoPages/Dashboards/RecaudoDataChinauta.vue'),
        },
        {
            path: '/OperacionesDashboard',
            name: 'OperacionesDashboard',
            meta: { 
                requiresAuth: true
            },
            component: () => import('../DemoPages/Dashboards/OperacionesDashboard.vue'),
        },
        {
            path: '/via40reporta',
            name: 'via40reporta',
            meta: { 
                requiresAuth: true
            },
            component: () => import('../DemoPages/Dashboards/Via40reporta.vue'),
        },
        {
            path: '/MercanciasPeligrosa',
            name: 'MercanciasPeligrosa',
            meta: { 
                requiresAuth: true
            },
            component: () => import('../DemoPages/Dashboards/MercanciasPeligrosa.vue'),
        },
        {
            path: '/ITS',
            name: 'ITS',
            meta: { 
                requiresAuth: true
            },
            component: () => import('../DemoPages/Dashboards/ITS.vue'),
        },
        {
            path: '/KPI',
            name: 'KPI',
            meta: { 
                requiresAuth: true
            },
            component: () => import('../DemoPages/Dashboards/KPI.vue'),
        },
        {
            path: '/PuenteVehiculares',
            name: 'PuenteVehiculares',
            meta: { 
                requiresAuth: true
            },
            component: () => import('../DemoPages/Dashboards/PuenteVehiculares.vue'),
        },
        {
            path: '/PuentePeatonales',
            name: 'PuentePeatonales',
            meta: { 
                requiresAuth: true
            },
            component: () => import('../DemoPages/Dashboards/PuentePeatonales.vue'),
        },
        /*
        {
            path: '/pages/login-boxed',
            name: 'login-boxed',
            meta: {layout: 'userpages'},
            component: () => import('../DemoPages/UserPages/LoginBoxed.vue'),
        },
        */
        {
            path: '/pages/register-boxed',
            name: 'register-boxed',
            meta: {layout: 'userpages'},
            component: () => import('../DemoPages/UserPages/RegisterBoxed.vue'),
        },
        {
            path: '/pages/forgot-password-boxed',
            name: 'forgot-password-boxed',
            meta: {layout: 'userpages'},
            component: () => import('../DemoPages/UserPages/ForgotPasswordBoxed.vue'),
        },

        // Elements

        {
            path: '/elements/buttons-standard',
            name: 'buttons-standard',
            component: () => import('../DemoPages/Elements/Buttons/Standard.vue'),
        },
        {
            path: '/elements/dropdowns',
            name: 'dropdowns',
            component: () => import('../DemoPages/Elements/Dropdowns.vue'),
        },
        {
            path: '/elements/icons',
            name: 'icons',
            component: () => import('../DemoPages/Elements/Icons.vue'),
        },
        {
            path: '/elements/badges-labels',
            name: 'badges',
            component: () => import('../DemoPages/Elements/Badges.vue'),
        },
        {
            path: '/elements/cards',
            name: 'cards',
            component: () => import('../DemoPages/Elements/Cards.vue'),
        },
        {
            path: '/elements/list-group',
            name: 'list-group',
            component: () => import('../DemoPages/Elements/ListGroups.vue'),
        },
        {
            path: '/elements/timelines',
            name: 'timeline',
            component: () => import('../DemoPages/Elements/Timeline.vue'),
        },
        {
            path: '/elements/utilities',
            name: 'utilities',
            component: () => import('../DemoPages/Elements/Utilities.vue'),
        },

        // Components

        {
            path: '/components/tabs',
            name: 'tabs',
            component: () => import('../DemoPages/Components/Tabs.vue'),
        },
        {
            path: '/components/accordions',
            name: 'accordions',
            component: () => import('../DemoPages/Components/Accordions.vue'),
        },
        {
            path: '/components/modals',
            name: 'modals',
            component: () => import('../DemoPages/Components/Modals.vue'),
        },
        {
            path: '/components/progress-bar',
            name: 'progress-bar',
            component: () => import('../DemoPages/Components/ProgressBar.vue'),
        },
        {
            path: '/components/tooltips-popovers',
            name: 'tooltips-popovers',
            component: () => import('../DemoPages/Components/TooltipsPopovers.vue'),
        },
        {
            path: '/components/carousel',
            name: 'carousel',
            component: () => import('../DemoPages/Components/Carousel.vue'),
        },
        {
            path: '/components/pagination',
            name: 'pagination',
            component: () => import('../DemoPages/Components/Pagination.vue'),
        },
        {
            path: '/components/maps',
            name: 'maps',
            component: () => import('../DemoPages/Components/Maps.vue'),
        },

        // Tables

        {
            path: '/tables/regular-tables',
            name: 'regular-tables',
            component: () => import('../DemoPages/Tables/RegularTables.vue'),
        },

        // Dashboard Widgets

        {
            path: '/widgets/chart-boxes-3',
            name: 'chart-boxes-3',
            component: () => import('../DemoPages/Widgets/ChartBoxes3.vue'),
        },

        // Forms

        {
            path: '/forms/controls',
            name: 'controls',
            component: () => import('../DemoPages/Forms/Elements/Controls.vue'),
        },
        {
            path: '/forms/layouts',
            name: 'layouts',
            component: () => import('../DemoPages/Forms/Elements/Layouts.vue'),
        },
        // Charts

        {
            path: '/charts/chartjs',
            name: 'chartjs',
            component: () => import('../DemoPages/Charts/Chartjs.vue'),
        },
    ],
    
})
router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters.isLoggedIn) {
        next()
        return
      }
      next('/via40onlineexpress/dist/Login') 
    } else {
      next() 
    }
  })
  
export default router

