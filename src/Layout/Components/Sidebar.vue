<template>
    <div class="app-sidebar sidebar-shadow" @mouseover="toggleSidebarHover('add','closed-sidebar-open')" @mouseleave="toggleSidebarHover('remove','closed-sidebar-open')">
        <div class="app-header__logo">
            <div class="logo-src"/>
            <div class="header__pane ml-auto">
                <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" v-bind:class="{ 'is-active' : isOpen }" @click="toggleBodyClass('closed-sidebar')">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>
        <div class="app-sidebar-content">
            <VuePerfectScrollbar class="app-sidebar-scroll" v-once>
                <sidebar-menu showOneChild :menu="menu"/>
            </VuePerfectScrollbar>
        </div>

    </div>
</template>

<script>
    import {SidebarMenu} from 'vue-sidebar-menu'
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    export default {
        components: {
            SidebarMenu,
            VuePerfectScrollbar
        },
        data() {
            return {
                isOpen: false,
                sidebarActive: false,

                menu: [
                    
                    {
                        header: true,
                        title: 'Menu',
                    },
                    {
                        icon: 'pe-7s-light',
                        title: 'Menu Principal',
                        href:'/MenuPrincipal',
                        
                    },
                    {
                        title: 'Recaudos',
                        icon: 'pe-7s-rocket',
                        disabled: !this.$can('Menu_Recaudos'),
                        //hidden: this.$can('Menu_Recaudos'),
                        //hidden: false,
                        child: [
                            {
                                //href: '/via40onlineexpress/dist/RecaudosChinauta',
                                //href: '/RecaudosChinauta',
                                title: 'Chinauta',
                                child: [
                                    {
                                        title: 'Trafico',
                                        href: '/RecaudoDataChinauta',
                                    },
                                    {
                                        title: 'Estadisticas',
                                        href: '/Recaudo-Chinauta',
                                    },
                                    {
                                        title: 'Informen',
                                        href: '/elements/buttons-standard',
                                    },
                                ]
                            },
                            {
                                //href: '/via40onlineexpress/dist/RecaudosChinauta',
                                //href: '/RecaudosChinauta',
                                title: 'Chusaca',
                                child: [
                                    {
                                        title: 'Trafico',
                                        href: '/elements/buttons-standard',
                                    },
                                    {
                                        title: 'Estadisticas',
                                        href: '/Recaudo-Chusaca',
                                    },
                                    {
                                        title: 'Informen',
                                        href: '/elements/buttons-standard',
                                    },
                                ]
                            },
                            /*
                            {
                                href: '/Login',
                                //href: '/via40onlineexpress/dist/Login',
                                title: 'Login',
                            },
                            */
                        ]
                    },
                    {
                        title: 'Operaciones',
                        icon: 'pe-7s-browser',
                        child: [
                            {
                                href: '/OperacionesDashboard',
                                title: 'Dashboard',
                            },
                            {
                                href: '/via40reporta',
                                title: 'Via 40 reporta',
                            },
                            {
                                //href: '/pages/forgot-password-boxed',
                                title: 'Mercacias Peligrosa',
                                child: [
                                    {
                                        title: 'Merc. Peli. Grafica',
                                        href: '/MercanciasPeligrosa',
                                    },
                                    {
                                        title: 'Merc. Peli. Formulario',
                                        href: '/MercanciasPeligrosa',
                                    },
                                    
                                ]
                            },
                            {
                                //href: '/pages/forgot-password-boxed',
                                title: 'Inspecciones viales',
                                child: [
                                    {
                                        title: 'Ins. Viales. Grafica',
                                        href: '/elements/buttons-standard',
                                    },
                                    {
                                        title: 'Ins. Viales. Formulario',
                                        href: '/elements/buttons-standard',
                                    },
                                    
                                ]
                            },
                            {
                                //href: '/pages/forgot-password-boxed',
                                title: 'Inspecciones viales',
                                child: [
                                    {
                                        title: 'Ins. Viales. Grafica',
                                        href: '/elements/buttons-standard',
                                    },
                                    {
                                        title: 'Ins. Viales. Formulario',
                                        href: '/elements/buttons-standard',
                                    },
                                    
                                ]
                            },
                            
                        ]
                    },
                  
                    {
                        icon: 'pe-7s-diamond',
                        title: 'ITS',
                        child: [
                            {
                                title: 'ITS',
                                href: '/ITS',
                            },
                            /*
                            {
                                title: 'Buttons',
                                child: [
                                    {
                                        title: 'Standard',
                                        href: '/elements/buttons-standard',
                                    },
                                ]
                            },
                            {
                                title: 'Dropdowns',
                                href: '/elements/dropdowns',
                            },
                            {
                                title: 'Icons',
                                href: '/elements/icons',
                            },
                            {
                                title: 'Badges',
                                href: '/elements/badges-labels',
                            },
                            {
                                title: 'Cards',
                                href: '/elements/cards',
                            },
                            {
                                title: 'List Groups',
                                href: '/elements/list-group',
                            },
                            {
                                title: 'Timeline',
                                href: '/elements/timelines',
                            },
                            {
                                title: 'Utilities',
                                href: '/elements/utilities',
                            },
                            */
                        ],
                    },
                    {
                        icon: 'pe-7s-car',
                        title: 'SST',
                        child: [
                            {
                                title: 'Salud',
                                href: '/PerfilSalud',
                            },
                            /*
                            {
                                title: 'Accordions',
                                href: '/components/accordions',
                            },
                            {
                                title: 'Modals',
                                href: '/components/modals',
                            },
                            {
                                title: 'Progress Bar',
                                href: '/components/progress-bar',
                            },
                            {
                                title: 'Tooltips & Popovers',
                                href: '/components/tooltips-popovers',
                            },
                            {
                                title: 'Carousel',
                                href: '/components/carousel',
                            },
                            {
                                title: 'Pagination',
                                href: '/components/pagination',
                            },
                            {
                                title: 'Maps',
                                href: '/components/maps',
                            },
                            */
                        ],
                    },
                    {
                        icon: 'pe-7s-display2',
                        title: 'Obras',
                        child: [
                            {
                                title: 'KPI',
                                href: '/KPI',
                            },
                            {
                                title: 'SCADA',
                                href: '/tables/regular-tables',
                            },
                            {
                                title: 'ITL',
                                href: '/tables/regular-tables',
                            },
                            {
                                title: 'Separado',
                                href: '/tables/regular-tables',
                            },
                            {
                                title: 'BITUBO',
                                href: '/tables/regular-tables',
                            },
                        ]
                    },
                    {
                        icon: 'pe-7s-display2',
                        title: 'Puente',
                        child: [
                            {
                                title: 'Puentes Vehicuares',
                                href: '/PuenteVehiculares',
                            },
                            {
                                title: 'Puentes Peatonales',
                                href: '/PuentePeatonales',
                            },
                        ]
                    },

                    /////////////////////////////////////
                    /////////////////////////////////////
                    /////////////////////////////////////
                    /*
                    {
                        header: true,
                        title: 'Dashboard Boxes',
                    },
                    {
                        icon: 'pe-7s-graph2',
                        title: 'Chart Boxes',
                        href: '/widgets/chart-boxes-3',
                    },
                    {
                        icon: 'pe-7s-graph2',
                        title: 'Login',
                        href: '/Login',
                    },
                    {
                        header: true,
                        title: 'Forms',
                    },
                    {
                        icon: 'pe-7s-light',
                        title: 'Elements',
                        child: [
                            {
                                title: 'Controls',
                                href: '/forms/controls',
                            },
                            {
                                title: 'Layouts',
                                href: '/forms/layouts',
                            },
                        ],
                    },
                    {
                        header: true,
                        title: 'Charts',
                    },
                    {
                        icon: 'pe-7s-graph2',
                        title: 'ChartJS',
                        href: '/charts/chartjs',
                    },
                    */
                ],
                collapsed: true,

                windowWidth: 0,

            }
        },
        props: {
            sidebarbg: String,
        },
        methods: {
            $can(permissionName) {
                var permiso= localStorage.getItem("permisos")
                return permiso.indexOf(permissionName) !== -1;
            },
            toggleBodyClass(className) {
                const el = document.body;
                this.isOpen = !this.isOpen;

                if (this.isOpen) {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
            toggleSidebarHover(add, className) {
                const el = document.body;
                this.sidebarActive = !this.sidebarActive;

                this.windowWidth = document.documentElement.clientWidth;

                if (this.windowWidth > '992') {
                    if (add === 'add') {
                        el.classList.add(className);
                    } else {
                        el.classList.remove(className);
                    }
                }
            },
            getWindowWidth() {
                const el = document.body;

                this.windowWidth = document.documentElement.clientWidth;

                if (this.windowWidth < '1350') {
                    el.classList.add('closed-sidebar', 'closed-sidebar-md');
                } else {
                    el.classList.remove('closed-sidebar', 'closed-sidebar-md');
                }
            },
        },
        mounted() {
            this.$nextTick(function () {
                window.addEventListener('resize', this.getWindowWidth);

                //Init
                this.getWindowWidth()
            })
        },

        beforeDestroy() {
            window.removeEventListener('resize', this.getWindowWidth);
        }
    }
</script>
