<template>
<div class="row">
    <div class="col-lg-12 ">
        <div class="main-card mb-3 card formulario">
            <div class="card-body">
                <form ref="form" v-on:submit.prevent="formulario()">

                    <h1 class="card-title"></h1>
                    <h2>Formulario </h2>
                    <div class="col-md-12 row">
                        <div class="form-group col-md-12 col-sm-12" style="margin-bottom: 6px;">
                            <button type="submit"  class="btn btn-primary">Guardar </button>
                            <a class="btn btn-warning" @click="cancelar_registro()">Cancelar</a>
                        </div>
                    </div>
                    <div class="col-lg-12">

                        <div class="row">
                            <div class="col-md-12 row">
                                <input type="hidden" v-model="input_Mantenimiento_id">

                                <div class="form-group col-md-3 col-sm-12">
                                    <label for="exampleInputEmail1">Fecha<span class="tx-danger">*</span> </label>
                                    <b-form-datepicker id="example-datepicker" v-model="input_fecha" class="mb-2" :class="{ 'is-invalid':this.validacion.fecha, 'is-valid':!this.validacion.fecha && is_enviar  }"></b-form-datepicker>
                                    <!--
                <input type="text" v-model="input_fecha" placeholder="fecha" class="form-control"  :class="{ 'is-invalid':this.validacion.fecha, 'is-valid':!this.validacion.fecha && is_enviar  }" >
                    -->
                                    <div class="invalid-feedback" style="display:block" v-for="data in validacion.fecha" v-bind:key="data.fecha">
                                        <b>{{data}}</b>
                                    </div>
                                </div>

                                <div class="form-group col-md-5 col-sm-12">

                                    <label for="exampleInputEmail1">Actividad<span class="tx-danger">*</span> </label>
                                    <!--
                                <vue-simple-suggest v-model="input_actividad" :list="input_actividad_opcion" :filter-by-query="true"> </vue-simple-suggest>
                                -->
                                    <Select2 v-model="input_actividad_id" :options="data_foraneo_actividad_id" />

                                    <!--
                                 <input type="text" v-model="input_actividad" placeholder="actividad" class="form-control" :class="{ 'is-invalid':this.validacion.actividad, 'is-valid':!this.validacion.actividad && is_enviar  }">
                                -->
                                    <div class="invalid-feedback" style="display:block" v-for="data in validacion.actividad_id" v-bind:key="data.actividad_id">
                                        <b>{{data}}</b>
                                    </div>
                                </div>
                                <div class="form-group col-md-2 col-sm-12">
                                    <label for="exampleInputEmail1">via<span class="tx-danger">*</span> </label>
                                    <input type="text" v-model="input_via" placeholder="via" class="form-control" :class="{ 'is-invalid':this.validacion.via, 'is-valid':!this.validacion.via && is_enviar  }">
                                    <div class="invalid-feedback" style="display:block" v-for="data in validacion.via" v-bind:key="data.via">
                                        <b>{{data}}</b>
                                    </div>
                                </div>

                                <div class="form-group col-md-2 col-sm-12">
                                    <label for="exampleInputEmail1">Calzada<span class="tx-danger">*</span> </label>
                                    <input type="text" v-model="input_calzada" placeholder="calzada" class="form-control" :class="{ 'is-invalid':this.validacion.calzada, 'is-valid':!this.validacion.calzada && is_enviar  }">
                                    <div class="invalid-feedback" style="display:block" v-for="data in validacion.calzada" v-bind:key="data.calzada">
                                        <b>{{data}}</b>
                                    </div>
                                </div>

                                <div class="form-group col-md-2 col-sm-6">
                                    <label for="exampleInputEmail1">Km inicial<span class="tx-danger">*</span> </label>
                                    <input type="text" v-model="input_km_inicial" placeholder="km_inicial" class="form-control" :class="{ 'is-invalid':this.validacion.km_inicial, 'is-valid':!this.validacion.km_inicial && is_enviar  }">
                                    <div class="invalid-feedback" style="display:block" v-for="data in validacion.km_inicial" v-bind:key="data.km_inicial">
                                        <b>{{data}}</b>
                                    </div>
                                </div>

                                <div class="form-group col-md-2 col-sm-6">
                                    <label for="exampleInputEmail1">Metros inicial<span class="tx-danger">*</span> </label>
                                    <input type="text" v-model="input_m_inicial" placeholder="m_inicial" class="form-control" :class="{ 'is-invalid':this.validacion.m_inicial, 'is-valid':!this.validacion.m_inicial && is_enviar  }">
                                    <div class="invalid-feedback" style="display:block" v-for="data in validacion.m_inicial" v-bind:key="data.m_inicial">
                                        <b>{{data}}</b>
                                    </div>
                                </div>

                                <div class="form-group col-md-2 col-sm-6">
                                    <label for="exampleInputEmail1">Km final<span class="tx-danger">*</span> </label>
                                    <input type="text" v-model="input_km_final" placeholder="km_final" class="form-control" :class="{ 'is-invalid':this.validacion.km_final, 'is-valid':!this.validacion.km_final && is_enviar  }">
                                    <div class="invalid-feedback" style="display:block" v-for="data in validacion.km_final" v-bind:key="data.km_final">
                                        <b>{{data}}</b>
                                    </div>
                                </div>

                                <div class="form-group col-md-2 col-sm-6">
                                    <label for="exampleInputEmail1">Metros final<span class="tx-danger">*</span> </label>
                                    <input type="text" v-model="input_m_final" placeholder="m_final" class="form-control" :class="{ 'is-invalid':this.validacion.m_final, 'is-valid':!this.validacion.m_final && is_enviar  }">
                                    <div class="invalid-feedback" style="display:block" v-for="data in validacion.m_final" v-bind:key="data.m_final">
                                        <b>{{data}}</b>
                                    </div>
                                </div>

                                <div class="form-group col-md-4 col-sm-12">
                                    <label for="exampleInputEmail1">Tipo unidad<span class="tx-danger">*</span> </label>
                                    <vue-simple-suggest v-model="input_tipo_unidad" :list="input_tipo_unidad_opcion" :filter-by-query="true"> </vue-simple-suggest>
                                    <!--
                                    <input type="text" v-model="input_tipo_unidad" placeholder="tipo_unidad" class="form-control" :class="{ 'is-invalid':this.validacion.tipo_unidad, 'is-valid':!this.validacion.tipo_unidad && is_enviar  }">
                                    -->
                                    <div class="invalid-feedback" style="display:block" v-for="data in validacion.tipo_unidad" v-bind:key="data.tipo_unidad">
                                        <b>{{data}}</b>
                                    </div>
                                </div>

                                <div class="form-group col-md-4 col-sm-12">
                                    <label for="exampleInputEmail1">Cantidad<span class="tx-danger">*</span> </label>
                                    <input type="text" v-model="input_cantidad" placeholder="cantidad" class="form-control" :class="{ 'is-invalid':this.validacion.cantidad, 'is-valid':!this.validacion.cantidad && is_enviar  }">
                                    <div class="invalid-feedback" style="display:block" v-for="data in validacion.cantidad" v-bind:key="data.cantidad">
                                        <b>{{data}}</b>
                                    </div>
                                </div>

                                <div class="form-group col-md-4 col-sm-12">
                                    <label for="exampleInputEmail1">Contratista<span class="tx-danger">*</span> </label>
                                    <!--
                                    <vue-simple-suggest v-model="input_contratista" :list="input_contratista_opcion" :filter-by-query="true"> </vue-simple-suggest>
                                    -->
                                    <Select2 v-model="input_contratista_id" :options="data_foraneo_contratista_id" />

                                    <!--
                                    <input type="text" v-model="input_contratista" placeholder="contratista" class="form-control" :class="{ 'is-invalid':this.validacion.contratista, 'is-valid':!this.validacion.contratista && is_enviar  }">
                                    -->
                                    <div class="invalid-feedback" style="display:block" v-for="data in validacion.contratista_id" v-bind:key="data.contratista_id">
                                        <b>{{data}}</b>
                                    </div>
                                </div>
                                <div class="form-group col-md-4 col-sm-12">

                                    <label for="exampleInputEmail1">Registro Fotográfico<span class="tx-danger">*</span> </label>
                                    <!--
                                    <b-form-file v-model="input_registro_fotografico" id="file" accept="image/*" multiple>
                                    -->
                                    <b-form-file v-model="input_registro_fotografico" id="file_imagen_dexs" accept="image/*">
                                        <template slot="file-name" slot-scope="{ names }">
                                            <b-badge variant="dark">{{ names[0] }}</b-badge>
                                            <b-badge v-if="names.length > 1" variant="dark" class="ml-1">
                                                + {{ names.length - 1 }} More files
                                            </b-badge>
                                        </template>
                                    </b-form-file>
                                    <div class="invalid-feedback" style="display:block" v-for="data in validacion.contratista" v-bind:key="data.contratista">
                                        <b>{{data}}</b>
                                    </div>

                                </div>

                                <div class="form-group col-md-12 col-sm-12 text-center">
                                    <button type="submit" class="btn btn-primary">Enviar</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="col-lg-12 ">
        <div class="main-card mb-3 card formulario">
            <div class="card-body col-12">
                <h1 class="card-title"> Registro Fotografico</h1>

                <div class="row">

                    <div class="col-3" v-for="foto in  mantenimientoFotoAll" v-bind:key="foto.id">
                        <div class="card">

                            <img :src="'data:imagen/jpg;base64,'+foto.file" class="img-fluid" />
                            <button @click="eliminar_imagen(foto.id)" class="btn btn-danger">Eliminar</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Vue from "vue";
//import Autocomplete from '@trevoreyre/autocomplete-vue'
//import VueInputDropdown from 'vue-input-dropdown'
//Vue.use(VueInputDropdown)
//Vue.component('vue-input-dropdown', VueInputDropdown)

import VueSimpleSuggest from 'vue-simple-suggest'
import 'vue-simple-suggest/dist/styles.css'

import moment from "moment";
import Compressor from 'compressorjs';

export default {
    components: {
        VueSimpleSuggest
        //    Autocomplete
        //   Select2
    },
    data() {

        return {
            is_enviar: false,

            validacion: [],
            editar_dato: false,
            data: [],
            datas: [],
            input_consulta_data: "",
            stickyHeader: true,
            noCollapse: false,

            input_Mantenimiento_id: [],
            input_id: [],
            input_users_id: [],
            input_id_key: [],
            input_fecha: [],
            input_actividad: [],
            input_km_inicial: [],
            input_m_inicial: [],
            input_km_final: [],
            input_m_final: [],
            input_via: [],
            input_calzada: [],
            input_tipo_unidad: [],
            input_cantidad: [],
            input_contratista: [],
            input_lista_actividad: [],
            input_registro_fotografico: [],
            input_contratista_id: [],
            input_actividad_id: [],
            imagen_comprimidad: [],
            imagen_comprimidad_name: '',
            consulta_datos: [],
            mantenimientoFotoAll: [],
            input_actividad_opcion: [],

            input_contratista_opcion: [],
            input_tipo_unidad_opcion: [],
            errors: {},
            mensaje_formulario: "",
            page: 1,

            data_foraneo_actividad_id: [],
            data_foraneo_contratista_id: []

        };
    },
    mounted() {
        //this.consulta();
        this.data_foraneo();
        if (this.$route.params.id > 0) {
            this.show_registro(this.$route.params.id);
        } else {
            this.anadir_registro()
            this.input_fecha = moment(new Date()).format('YYYY-MM-D');
        }

    },
    methods: {

        anadir_registro() {
            this.validacion = "";
            this.editar_dato = false;
            this.limpiar_form();
            this.mensaje_formulario = "Añadir un nuevo registro"
        },

        data_foraneo() {
            axios.get(`${this.$url}/Api/Mantenimiento/create`).then(response => {
                this.input_actividad_opcion = response.data.lista_actividad
                this.input_contratista_opcion = response.data.lista_contratista
                this.input_tipo_unidad_opcion = response.data.lista_tipo_unidad
                this.data_foraneo_contratista_id = response.data.contratista_id
                this.data_foraneo_actividad_id = response.data.actividad_id

            });
        },
        formattedDisplay(result) {
            this.actividad = result.name;
        },

        subir_imagen() {

            const file = this.input_registro_fotografico;
            if (!file) {
                return;
            }

            new Compressor(file, {
                quality: 0.6,
                maxWidth: 800,
                maxHeight: 800,
                success(result) {
                    const formData = new FormData();
                    var manteniniento_id = localStorage.getItem("manteniniento_id");

                    formData.append('file', result, result.name);

                    axios.post(`/via40online/Mantenimiento/subir_foto/${manteniniento_id}`, formData).then(response => {
                    //axios.post(`/Mantenimiento/subir_foto/${manteniniento_id}`, formData).then(response => {

                        if (response.data.errors) {
                            this.$toastr.warning("Imagen demasiado pesado", "Imagen demasiado pesado");
                        }
                        if (response.data.id) {
                            // this.$toastr.success("operaciónn exitosa", "Datos modificados");

                        }
                        //            this.show_registro(manteniniento_id)

                    }, (err) => {
                        console.log("Err", err);
                        this.$toastr.warning(err, "Error en el servidor");
                        this.$toastr.warning(err.message, "Error en el servidor");
                    });
                },
                error(err) {
                    console.log(err.message);
                },
            });
            this.show_registro(this.input_Mantenimiento_id)

            //  }
        },
        formulario() {
            this.is_enviar = true

            const data = {
                id: this.input_Mantenimiento_id,
                id: this.input_id,
                users_id: this.input_users_id,
                id_key: this.input_id_key,
                fecha: this.input_fecha,
                actividad_id: this.input_actividad_id,
                km_inicial: this.input_km_inicial,
                m_inicial: this.input_m_inicial,
                km_final: this.input_km_final,
                m_final: this.input_m_final,
                via: this.input_via,
                calzada: this.input_calzada,
                tipo_unidad: this.input_tipo_unidad,
                cantidad: this.input_cantidad,
                contratista_id: this.input_contratista_id,
            };

            if (this.editar_dato == true) {
                axios.put(`${this.$url}/Api/Mantenimiento/${this.input_Mantenimiento_id}`, data)
                    .then(response => {

                            const datos = response.data;
                            if (response.data.errors) {
                                this.$toastr.warning("Verifique los datos", "Verifique los datos");
                                this.validacion = response.data.errors;
                            }
                            if (response.data.id) {
                                this.validacion = "";
                                this.$toastr.success("operaciónn exitosa", "Datos modificados");
                                //this.consulta(this.page);
                                localStorage.setItem("manteniniento_id", response.data.id);
                                this.subir_imagen();
                                setTimeout(() => this.show_registro(this.input_Mantenimiento_id), 4000);
                            }
                        },
                        (err) => {
                            console.log("Err", err);
                            this.$toastr.warning(err, "Error en el servidor");
                            this.$toastr.warning(err.message, "Error en el servidor");
                        });

            } else {

                axios.post(`${this.$url}/Api/Mantenimiento`, data).then(response => {
                        const datos = response.data;
                        if (response.data.errors) {
                            this.$toastr.warning("Verifique los datos", "Verifique los datos");
                            this.validacion = response.data.errors;
                        }
                        if (response.data.id) {
                            this.validacion = "";
                            this.$toastr.success("operaciónn exitosa", "Datos modificados");

                            localStorage.setItem("manteniniento_id", response.data.id);
                            this.subir_imagen();

                        }
                    },
                    (err) => {
                        console.log("Err", err);
                        this.$toastr.warning(err, "Error en el servidor");
                        this.$toastr.warning(err.message, "Error en el servidor");
                    }

                );

            }

        },
        cancelar_registro() {
            window.history.back();
        },
        $can(permissionName) {
            return Permissions.indexOf(permissionName) !== -1;
        },
        actividad_input() {
            this.input_actividad = this.$refs.seleccionado.text;

        },
        eliminar_imagen(mantenimientofoto_id) {

            if (confirm("¿Desea eliminar el registro fotografico?")) {
                axios.delete(`${this.$url}/Api/Mantenimiento/foto_delete/${mantenimientofoto_id}`).then((response) => {
                    const data = response.data;
                    if (response.data.id) {
                        this.validacion = "";
                        this.$toastr.info("operaciónn exitosa", "Datos Eliminados");
                        this.show_registro(this.input_id);
                    }
                });
            }

        },
        show_registro(data_id) { //show_registro
            this.validacion = "";
            this.mensaje_formulario = "Editar un registro"

            axios.get(`${this.$url}/Api/Mantenimiento/${data_id}`).then(response => {
                const data = response.data;
                if (!response.data) {
                    this.$toastr.warning("operaciónn no exitosa", "Regitro no obtenido");
                } else {
                    //this.$toastr.success("operaciónn exitosa", "Regitro obtenido");
                    this.editar_dato = true;
                    this.input_Mantenimiento_id = data.id
                    this.input_id = data.id;
                    this.input_users_id = data.users_id;
                    this.input_id_key = data.id_key;
                    this.input_fecha = data.fecha;
                    this.input_actividad_id = data.actividad_id;
                    this.input_km_inicial = data.km_inicial;
                    this.input_m_inicial = data.m_inicial;
                    this.input_km_final = data.km_final;
                    this.input_m_final = data.m_final;
                    this.input_via = data.via;
                    this.input_calzada = data.calzada;
                    this.input_tipo_unidad = data.tipo_unidad;
                    this.input_cantidad = data.cantidad;
                    this.input_contratista_id = data.contratista_id;
                    this.mantenimientoFotoAll = data.mantenimiento_foto_all;

                    localStorage.setItem("manteniniento_id", this.input_id);

                }
            });
        },
        limpiar_form() {
            this.input_id = '';
            this.input_users_id = '';
            this.input_id_key = '';
            this.input_fecha = '';
            this.input_actividad_id = 0;
            this.input_km_inicial = '';
            this.input_m_inicial = '';
            this.input_km_final = '';
            this.input_m_final = '';
            this.input_via = '';
            this.input_calzada = '';
            this.input_tipo_unidad = '';
            this.input_cantidad = '';
            this.input_contratista_id = '';

            this.validacion = "";

        },
        search(input) {
            if (input.length < 1) {
                return []
            }
            return countries.filter(country => {
                return country.toLowerCase()
                    .startsWith(input.toLowerCase())
            })
        }

    }
};
</script>
