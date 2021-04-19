<template>
<div class="tab-content">

    <div class="row">
        <div v-if="$can(data.permiso)"  v-for="data in  menu"  v-bind:key='data.nombre' class="col-md-6 col-sm-12">

            <b-card  :style="'filter:brightness(1.0);background-image: url('+data.background+');'"  bg-variant="dark" text-variant="white">

                <b-card-text v-b-toggle="data.id">
                    <h3>
                        <b-badge pill variant="light">{{ data.menu }}.</b-badge>
                    </h3>
                </b-card-text>
                <b-collapse :id="data.id">
                <div v-for="sub  in data.submenu" v-bind:key="sub.id" >
                    <router-link :to="{ name:  sub.router_name  }">
                        <b-badge pill variant="primary">{{  sub.sub_menu_nombre}}</b-badge>
                    </router-link>

                      <div v-for="sub_sub_menu in  sub.subsubmenu" v-bind:key="sub_sub_menu.id">
                        <router-link :to="{ name:  sub_sub_menu.router_name  }">
                            <b-badge pill variant="info">{{  sub_sub_menu.Sub_Sub_Nombre}}</b-badge>
                        </router-link>
                      </div>
                </div>
                </b-collapse>

            </b-card>
<!--
            <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
                <template #header>BootstrapVue</template>
                <b-list-group>
                    <b-list-group-item>Cras justo odio</b-list-group-item>
                    <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                    <b-list-group-item>Vestibulum at eros</b-list-group-item>
                </b-list-group>
            </b-jumbotron>
-->
        </div>
<!--
        <div class="col-md-6 col-sm-12">
            <b-card overlay :img-src="this.$url+'/img/fondo2.png'" img-alt="Card Image" text-variant="white">
                <b-card-text class="menu_principal">
                    Recaudos.
                </b-card-text>
                <div class="col-12 row">
                    <div class="col-4">
                        <router-link :to="{ name: 'RecaudoChinauta'}">
                            <button type="button" class="btn btn-light">Chinauta</button>
                        </router-link>

                    </div>
                    <div class="col-4">
                        <router-link :to="{ name: 'RecaudoChinautaEstadisticas'}">

                            <button type="button" class="btn btn-light">Chi. Estadisticas</button>
                        </router-link>

                    </div>
                    <div class="col-4">
                        <router-link :to="{ name: 'RecaudoChinautaEstadisticas'}">

                            <button type="button" class="btn btn-light">Chi. Trafico</button>
                        </router-link>

                    </div>
                    <br>

                </div>

            </b-card>
        </div>
        <div class="col-md-6 col-sm-12">
            <b-card overlay :img-src="this.$url+'/img/fondo2.png'" img-alt="Card Image" text-variant="white">
                <b-card-text class="menu_principal">
                    Operaciones.
                </b-card-text>
                <div class="col-12 row">
                    <div class="col-4">
                        <router-link :to="{ name: 'Operaciones'}">

                            <button type="button" class="btn btn-light">Operaciones</button>
                        </router-link>

                    </div>
                </div>

            </b-card>

        </div>

        <div class="col-md-6 col-sm-12">
            <b-card overlay :img-src="this.$url+'/img/fondo2.png'" img-alt="Card Image" text-variant="white">
                <b-card-text class="menu_principal">
                    ITS.
                </b-card-text>
                <div class="col-12 row">
                    <div class="col-4">
                        <router-link :to="{ name: 'ITS'}">

                            <button type="button" class="btn btn-light">ITS</button>
                        </router-link>

                    </div>

                    <br>

                </div>
            </b-card>

        </div>
        <div class="col-md-6 col-sm-12">
            <b-card overlay :img-src="this.$url+'/img/fondo2.png'" img-alt="Card Image" text-variant="white">
                <b-card-text class="menu_principal">
                    Mantenimiento.
                </b-card-text>
                <div class="col-12 row">
                    <div class="col-4">
                        <router-link :to="{ name: 'mantenimiento-grafica'}">

                            <button type="button" class="btn btn-light">Grafica</button>
                        </router-link>

                    </div>
                    <div class="col-4">
                        <router-link :to="{ name: 'mantenimiento'}">

                            <button type="button" class="btn btn-light">Rutinario</button>
                        </router-link>

                    </div>
                    <div class="col-4">
                        <button type="button" class="btn btn-light">Criticos</button>

                    </div>
                    <br>

                </div>
            </b-card>

        </div>
        <div class="col-md-6 col-sm-12">
            <b-card overlay :img-src="this.$url+'/img/fondo2.png'" img-alt="Card Image" text-variant="white">
                <b-card-text class="menu_principal">
                    STT.
                </b-card-text>
                <div class="col-12 row">
                    <div class="col-4">
                        <router-link :to="{ name: 'SST'}">

                            <button type="button" class="btn btn-light">SST</button>
                        </router-link>

                    </div>
                    <div class="col-4">
                        <router-link :to="{ name: 'perfilsalud'}" v-if="$can('menu salud')">
                            <button type="button" class="btn btn-light">Salud</button>
                        </router-link>

                    </div>
                    <div class="col-4">
                        <router-link :to="{ name: 'vehiculosGrafica'}">
                            <button type="button" class="btn btn-light">Vehiculos</button>
                        </router-link>

                    </div>
                    <div class="col-4">
                        <a target="_blank" href="https://sites.google.com/via40express.com/operadoresdeconsolaycallcenter/operadores-de-consola-y-call-center">
                            <button type="button" class="btn btn-light">Vehiculos</button>
                        </a>

                    </div>

                    <br>

                </div>
            </b-card>

        </div>
        <div class="col-md-6 col-sm-12">
            <b-card overlay :img-src="this.$url+'/img/fondo2.png'" img-alt="Card Image" text-variant="white">
                <b-card-text class="menu_principal">
                    Obras
                </b-card-text>
                <div class="col-12 row">
                    <div class="col-4">
                        <b-dropdown class="btn btn-light" right text="Seguimientos">

                            <router-link :to="{ name: 'concreto'}" v-if="$can('concreto')">
                                <b-dropdown-item>Concreto</b-dropdown-item>
                            </router-link>
                            <router-link :to="{ name: 'acero'}" v-if="$can('menu acero')">
                                <b-dropdown-item>Acero</b-dropdown-item>
                            </router-link>
                            <router-link :to="{ name: 'fresado'}" v-if="$can('menu fresado')">
                                <b-dropdown-item>Fresado</b-dropdown-item>
                            </router-link>
                            <router-link :to="{ name: 'granulares'}" v-if="$can('menu granulares')">
                                <b-dropdown-item>Granulares</b-dropdown-item>
                            </router-link>

                        </b-dropdown>


                    </div>
                    <div class="col-4">
                        <router-link :to="{ name: 'KPI'}">

                            <button type="button" class="btn btn-light">KPI</button>
                        </router-link>

                    </div>
                    <div class="col-4">
                        <button type="button" class="btn btn-light">SCADA</button>

                    </div>
                    <div class="col-4">
                        <button type="button" class="btn btn-light">LTM</button>

                    </div>
                    <div class="col-4">
                        <button type="button" class="btn btn-light">Separado</button>

                    </div>
                    <div class="col-4">
                        <button type="button" class="btn btn-light">BITUBO</button>

                    </div>
                    <br>

                </div>
            </b-card>

        </div>
        <div class="col-md-6 col-sm-12">
            <b-card overlay :img-src="this.$url+'/img/fondo2.png'" img-alt="Card Image" text-variant="white">
                <b-card-text class="menu_principal">
                    Puentes.
                </b-card-text>
                <div class="col-12 row">
                    <div class="col-4">
                        <button type="button" class="btn btn-light">Vehiculares</button>
                    </div>
                    <div class="col-4">
                        <button type="button" class="btn btn-light">Peatonales</button>
                    </div>

                    <br>

                </div>
            </b-card>

        </div>
        -->
    </div>

    <br>
    <br>

</div>
</template>

<script>



import PageTitle from "../../Layout/Components/PageTitle.vue";
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'


    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faTrashAlt,
        faCheck,
        faCalendarAlt,
        faAngleDown,
        faAngleUp,
        faTh,
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faTrashAlt,
        faCheck,
        faAngleDown,
        faAngleUp,
        faTh,
        faCalendarAlt,
    );

    export default {
        components: {
            PageTitle,
            VuePerfectScrollbar,
            'font-awesome-icon': FontAwesomeIcon,

        },
        data: () => ({
            heading: 'Recaudos Chinauta',
            subheading: 'Lista de recaudos del peaje de chinauta.',
            icon: 'pe-7s-plane icon-gradient bg-tempting-azure',
            menu:[
                {
                menu:'Recaudo',
                router_name:'',
                id:'menu_recaudos',
                background:'/img/aaa.jpg',
                permiso:'Menu_Recaudos',
                submenu:[
                        {
                        sub_menu_nombre:'Chinauta',
                        router_name:'',
                        permiso:'',
                        subsubmenu:[
                                {

                                permiso:'',
                                router_name:'ChinautaTrafico',
                                Sub_Sub_Nombre:'Trafico'
                                },
                                {
                                permiso:'',
                                router_name:'ChinautaInformen',
                                Sub_Sub_Nombre:'Estadisticas',
                                },
                                {
                                permiso:'',
                                router_name:'RecaudoChinautaEstadisticas',
                                Sub_Sub_Nombre:'Informen',
                                }

                                ]
                        },
                        {
                        sub_menu_nombre:'Chusaca',
                        router_name:'',
                        permiso:'',
                        subsubmenu:[
                                {
                                permiso:'',
                                router_name:'ChusacaTrafico',
                                Sub_Sub_Nombre:'Trafico'
                                },
                                {
                                permiso:'',
                                router_name:'ChusacaInformen',
                                Sub_Sub_Nombre:'Estadisticas',
                                },
                                {
                                permiso:'',
                                router_name:'ChusacaInformen',
                                Sub_Sub_Nombre:'Informen',
                                }

                                ]
                        },
                        /*
                        {
                        sub_menu_nombre:'Chinauta',
                        permiso:'',
                        router_name:'RecaudoChinauta'
                        },
                        {
                        sub_menu_nombre:'Gráfica',
                        permiso:'',
                        router_name:'RecaudoChinauta'
                        },
                        {
                        sub_menu_nombre:'Recaudos por categoría',
                        permiso:'',
                        router_name:'RecaudoChinautaEstadisticas'
                        },
                        */

                        ]
                },
                {
                menu:'Operaciones',
                router_name:'',
                id:'menu_Operaciones',
                background:'/img/aaa.jpg',
                permiso:'Menu_Operaciones',
                submenu:
                    [
                        {

                        permiso:'',
                        router_name:'OperacionesDashboard',
                        sub_menu_nombre:'Dashboard'
                        },
                        {
                        permiso:'',
                        router_name:'via40reporta',
                        sub_menu_nombre:'Via 40 reporta',
                        },
                        {
                        sub_menu_nombre:'Chinauta Tráfico',
                        permiso:'',
                        router_name:'RecaudoChinautaEstadisticas'
                        },
                        {
                        sub_menu_nombre:'Mercancia Peligrosa',
                        permiso:'',
                        router_name:'',
                        subsubmenu:[
                            {
                                Sub_Sub_Nombre:'Merc. Peligrosas Grafica',
                                permiso:'',
                                router_name:'MercanciasPeligrosa',
                            },
                            {
                                Sub_Sub_Nombre:'Merc. Peligrosas Formulario',
                                permiso:'',
                                router_name:'MercanciasPeligrosa',
                            }
                        ]
                        },
                        {
                        sub_menu_nombre:'Inspecciones Viales',
                        router_name:'',
                        permiso:'',
                        subsubmenu:[
                                {

                                permiso:'',
                                router_name:'MercanciasPeligrosa',
                                Sub_Sub_Nombre:'Inspecciones Viales Gráfica'
                                },
                                {
                                permiso:'',
                                router_name:'MercanciasPeligrosa',
                                Sub_Sub_Nombre:'Inspecciones Viales Formulario',
                                }

                                ]
                        },
                        {
                        sub_menu_nombre:'Inspeccionel vehiculos',
                        router_name:'',
                        permiso:'',
                        subsubmenu:[
                                {

                                permiso:'',
                                router_name:'MercanciasPeligrosa',
                                Sub_Sub_Nombre:'Insp. veh. Grafica'
                                },
                                {
                                permiso:'',
                                router_name:'MercanciasPeligrosa',
                                Sub_Sub_Nombre:'Insp. veh. Formulario',
                                }

                                ]
                        },
                        {
                        sub_menu_nombre:'Sistemas Tunel',
                        router_name:'',
                        permiso:'',
                        subsubmenu:[
                                {

                                permiso:'',
                                router_name:'MercanciasPeligrosa',
                                Sub_Sub_Nombre:'Inspecciones Viales Grafica'
                                },
                                {
                                permiso:'',
                                router_name:'MercanciasPeligrosa',
                                Sub_Sub_Nombre:'Inspecciones Viales Formulario',
                                }

                                ]
                        },


///

                    ]
                },
                {
                menu:'ITS',
                router_name:'',
                permiso:'Menu_ITS',
                id:'menu_its',
                background:'/img/aaa.jpg',

                submenu:
                    [
                    {
                    permiso:'',
                    router_name:'ITS',
                    sub_menu_nombre:'Dashboard'
                    },

                ]
                },
                {

                menu:'Mantenimiento',
                router_name:'',
                id:'menu_mantenimiento',
                background:'/img/aaa.jpg',

                permiso:'Menu_Mantenimiento',
                submenu:
                    [
                    {
                    permiso:'',
                    router_name:'mantenimiento-grafica',
                    sub_menu_nombre:'Mantenimiento Gráfica'
                    },
                    {
                    permiso:'',
                    router_name:'mantenimiento',
                    sub_menu_nombre:'Mantenimiento Rutinario'
                    },
                    {
                    permiso:'',
                    router_name:'mantenimiento-grafica',
                    sub_menu_nombre:'Mantenimiento Criticos'
                    },

                    ]

                },
                {

                menu:'SST',
                router_name:'',
                id:'menu_sst',
                background:'/img/aaa.jpg',

                permiso:'Menu_SST',
                submenu:
                    [
                    {
                    permiso:'menu salud',
                    router_name:'perfilsalud',
                    sub_menu_nombre:'Salud'
                    },
                    {
                    permiso:'',
                    router_name:'vehiculosGrafica',
                    sub_menu_nombre:'Vehiculo Gráfica'
                    },
                    {
                    permiso:'menu_capacitaciones_de_competencia',
                    router_name:'vehiculosGrafica',
                    sub_menu_nombre:'Capacitaciones de competercia'
                    },

                    ]

                },
                {
                menu:'Obras',
                router_name:'',
                id:'menu_Obras',
                background:'/img/aaa.jpg',

                permiso:'Menu_Obras',
                submenu:
                    [
                    {

                    sub_menu_nombre:'Seguimiento',
                    router_name:'',
                    permiso:'',
                    subsubmenu:[
                                {
                                Sub_Sub_Nombre:'Concreto',
                                permiso:'',
                                router_name:'concreto',
                            },
                            {
                                Sub_Sub_Nombre:'Acero',
                                permiso:'',
                                router_name:'acero',
                            },
                            {
                                Sub_Sub_Nombre:'Fresado',
                                permiso:'',
                                router_name:'fresado',
                            },
                            {
                                Sub_Sub_Nombre:'Granulares',
                                permiso:'',
                                router_name:'granulares',
                            }
                        ]



                        },
                    {
                    permiso:'',
                    router_name:'home',
                    sub_menu_nombre:'KPI'
                    },
                    {
                    permiso:'',
                    router_name:'home',
                    sub_menu_nombre:'SCADA'
                    },
                    {
                    permiso:'',
                    router_name:'home',
                    sub_menu_nombre:'LTM'
                    },
                    {
                    permiso:'',
                    router_name:'home',
                    sub_menu_nombre:'Separado'
                    }
                    ,
                    {
                    permiso:'',
                    router_name:'home',
                    sub_menu_nombre:'BITUBO'
                    }

                    ]

                },
                {
                menu:'Puente',
                router_name:'',
                id:'menu_puente',
                background:'/img/aaa.jpg',

                permiso:'Menu_Mantenimiento',
                submenu:
                    [
                    {
                    permiso:'menu salud',
                    router_name:'https://www.google.com/maps/d/viewer?mid=18Xf0Bbl1-MZPDF3UVaSiYD7pgcj0ZAlx&ll=4.400280787945496%2C-74.5044&z=10',
                    sub_menu_nombre:'Vehiculares'
                    },
                    {
                    permiso:'',
                    router_name:'https://www.google.com/maps/d/viewer?mid=1fU22rW7z1XzUtV9HrxkVwwU3Yn2rFYNs&ll=4.400280787945496%2C-74.5044&z=10',
                    sub_menu_nombre:'Peatonales'
                    },


                    ]

                },
                /*
                {
                menu:'Mercancia Peligrosa',
                router_name:'',
                permiso:'Menu_Recaudos',
                submenu:[
                        {

                        permiso:'',
                        router_name:'MercanciasPeligrosa',
                        sub_menu_nombre:'Merc. Peligrosas Grafica'
                        },
                        {
                        permiso:'',
                        router_name:'MercanciasPeligrosa',
                        sub_menu_nombre:'Merc. Peligrosas Formulario',
                        }

                        ]
                },
                */






            ],

        }),

        methods: {
            $can(permissionName) {
                var permiso= localStorage.getItem("permisos")
                return permiso.indexOf(permissionName) !== -1;
            },
        },

    }
    




/*
export default {
    data() {
        return {
            menu:[
                {
                menu:'Recaudo',
                router_name:'',
                id:'menu_recaudos',
                background:'/img/aaa.jpg',
                permiso:'Menu_Recaudos',
                submenu:[
                        {
                        sub_menu_nombre:'Chinauta',
                        router_name:'',
                        permiso:'',
                        subsubmenu:[
                                {

                                permiso:'',
                                router_name:'ChinautaTrafico',
                                Sub_Sub_Nombre:'Trafico'
                                },
                                {
                                permiso:'',
                                router_name:'ChinautaInformen',
                                Sub_Sub_Nombre:'Estadisticas',
                                },
                                {
                                permiso:'',
                                router_name:'RecaudoChinautaEstadisticas',
                                Sub_Sub_Nombre:'Informen',
                                }

                                ]
                        },
                        {
                        sub_menu_nombre:'Chusaca',
                        router_name:'',
                        permiso:'',
                        subsubmenu:[
                                {
                                permiso:'',
                                router_name:'ChusacaTrafico',
                                Sub_Sub_Nombre:'Trafico'
                                },
                                {
                                permiso:'',
                                router_name:'ChusacaInformen',
                                Sub_Sub_Nombre:'Estadisticas',
                                },
                                {
                                permiso:'',
                                router_name:'ChusacaInformen',
                                Sub_Sub_Nombre:'Informen',
                                }

                                ]
                        },
                      

                        ]
                },
                {
                menu:'Operaciones',
                router_name:'',
                id:'menu_Operaciones',
                background:'/img/aaa.jpg',
                permiso:'Menu_Operaciones',
                submenu:
                    [
                        {

                        permiso:'',
                        router_name:'OperacionesDashboard',
                        sub_menu_nombre:'Dashboard'
                        },
                        {
                        permiso:'',
                        router_name:'via40reporta',
                        sub_menu_nombre:'Via 40 reporta',
                        },
                        {
                        sub_menu_nombre:'Chinauta Tráfico',
                        permiso:'',
                        router_name:'RecaudoChinautaEstadisticas'
                        },
                        {
                        sub_menu_nombre:'Mercancia Peligrosa',
                        permiso:'',
                        router_name:'',
                        subsubmenu:[
                            {
                                Sub_Sub_Nombre:'Merc. Peligrosas Grafica',
                                permiso:'',
                                router_name:'MercanciasPeligrosa',
                            },
                            {
                                Sub_Sub_Nombre:'Merc. Peligrosas Formulario',
                                permiso:'',
                                router_name:'MercanciasPeligrosa',
                            }
                        ]
                        },
                        {
                        sub_menu_nombre:'Inspecciones Viales',
                        router_name:'',
                        permiso:'',
                        subsubmenu:[
                                {

                                permiso:'',
                                router_name:'MercanciasPeligrosa',
                                Sub_Sub_Nombre:'Inspecciones Viales Gráfica'
                                },
                                {
                                permiso:'',
                                router_name:'MercanciasPeligrosa',
                                Sub_Sub_Nombre:'Inspecciones Viales Formulario',
                                }

                                ]
                        },
                        {
                        sub_menu_nombre:'Inspeccionel vehiculos',
                        router_name:'',
                        permiso:'',
                        subsubmenu:[
                                {

                                permiso:'',
                                router_name:'MercanciasPeligrosa',
                                Sub_Sub_Nombre:'Insp. veh. Grafica'
                                },
                                {
                                permiso:'',
                                router_name:'MercanciasPeligrosa',
                                Sub_Sub_Nombre:'Insp. veh. Formulario',
                                }

                                ]
                        },
                        {
                        sub_menu_nombre:'Sistemas Tunel',
                        router_name:'',
                        permiso:'',
                        subsubmenu:[
                                {

                                permiso:'',
                                router_name:'MercanciasPeligrosa',
                                Sub_Sub_Nombre:'Inspecciones Viales Grafica'
                                },
                                {
                                permiso:'',
                                router_name:'MercanciasPeligrosa',
                                Sub_Sub_Nombre:'Inspecciones Viales Formulario',
                                }

                                ]
                        },


///

                    ]
                },
                {
                menu:'ITS',
                router_name:'',
                permiso:'Menu_ITS',
                id:'menu_its',
                background:'/img/aaa.jpg',

                submenu:
                    [
                    {
                    permiso:'',
                    router_name:'ITS',
                    sub_menu_nombre:'Dashboard'
                    },

                ]
                },
                {

                menu:'Mantenimiento',
                router_name:'',
                id:'menu_mantenimiento',
                background:'/img/aaa.jpg',

                permiso:'Menu_Mantenimiento',
                submenu:
                    [
                    {
                    permiso:'',
                    router_name:'mantenimiento-grafica',
                    sub_menu_nombre:'Mantenimiento Gráfica'
                    },
                    {
                    permiso:'',
                    router_name:'mantenimiento',
                    sub_menu_nombre:'Mantenimiento Rutinario'
                    },
                    {
                    permiso:'',
                    router_name:'mantenimiento-grafica',
                    sub_menu_nombre:'Mantenimiento Criticos'
                    },

                    ]

                },
                {

                menu:'SST',
                router_name:'',
                id:'menu_sst',
                background:'/img/aaa.jpg',

                permiso:'Menu_SST',
                submenu:
                    [
                    {
                    permiso:'menu salud',
                    router_name:'perfilsalud',
                    sub_menu_nombre:'Salud'
                    },
                    {
                    permiso:'',
                    router_name:'vehiculosGrafica',
                    sub_menu_nombre:'Vehiculo Gráfica'
                    },
                    {
                    permiso:'menu_capacitaciones_de_competencia',
                    router_name:'vehiculosGrafica',
                    sub_menu_nombre:'Capacitaciones de competercia'
                    },

                    ]

                },
                {
                menu:'Obras',
                router_name:'',
                id:'menu_Obras',
                background:'/img/aaa.jpg',

                permiso:'Menu_Obras',
                submenu:
                    [
                    {

                    sub_menu_nombre:'Seguimiento',
                    router_name:'',
                    permiso:'',
                    subsubmenu:[
                                {
                                Sub_Sub_Nombre:'Concreto',
                                permiso:'',
                                router_name:'concreto',
                            },
                            {
                                Sub_Sub_Nombre:'Acero',
                                permiso:'',
                                router_name:'acero',
                            },
                            {
                                Sub_Sub_Nombre:'Fresado',
                                permiso:'',
                                router_name:'fresado',
                            },
                            {
                                Sub_Sub_Nombre:'Granulares',
                                permiso:'',
                                router_name:'granulares',
                            }
                        ]



                        },
                    {
                    permiso:'',
                    router_name:'home',
                    sub_menu_nombre:'KPI'
                    },
                    {
                    permiso:'',
                    router_name:'home',
                    sub_menu_nombre:'SCADA'
                    },
                    {
                    permiso:'',
                    router_name:'home',
                    sub_menu_nombre:'LTM'
                    },
                    {
                    permiso:'',
                    router_name:'home',
                    sub_menu_nombre:'Separado'
                    }
                    ,
                    {
                    permiso:'',
                    router_name:'home',
                    sub_menu_nombre:'BITUBO'
                    }

                    ]

                },
                {
                menu:'Puente',
                router_name:'',
                id:'menu_puente',
                background:'/img/aaa.jpg',

                permiso:'Menu_Mantenimiento',
                submenu:
                    [
                    {
                    permiso:'menu salud',
                    router_name:'https://www.google.com/maps/d/viewer?mid=18Xf0Bbl1-MZPDF3UVaSiYD7pgcj0ZAlx&ll=4.400280787945496%2C-74.5044&z=10',
                    sub_menu_nombre:'Vehiculares'
                    },
                    {
                    permiso:'',
                    router_name:'https://www.google.com/maps/d/viewer?mid=1fU22rW7z1XzUtV9HrxkVwwU3Yn2rFYNs&ll=4.400280787945496%2C-74.5044&z=10',
                    sub_menu_nombre:'Peatonales'
                    },


                    ]

                },
                /*
                {
                menu:'Mercancia Peligrosa',
                router_name:'',
                permiso:'Menu_Recaudos',
                submenu:[
                        {

                        permiso:'',
                        router_name:'MercanciasPeligrosa',
                        sub_menu_nombre:'Merc. Peligrosas Grafica'
                        },
                        {
                        permiso:'',
                        router_name:'MercanciasPeligrosa',
                        sub_menu_nombre:'Merc. Peligrosas Formulario',
                        }

                        ]
                },
                */



</script>

<style>
.menu_principal {
    font-size: 40px;
    text-shadow: -1px 0 black, 0 1px black,
        1px 0 black, 0 -1px black
}

.badge-primary {
    font-size: 15px;
    color: #fff;
    margin-top: 5px;
    background-color: #ff0047;
}
.badge-info {
    font-size: 15px;
    color: #fff;
    margin-top: 5px;
    background-color: #3003f5;
}
</style>
