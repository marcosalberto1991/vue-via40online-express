<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h1 class="">Lista de Mantenimiento</h1>

            <nav>
              <pagination  :limit="20"
                :data="consulta_datos"
                @pagination-change-page="consulta"
              ></pagination>
            </nav>

            <div class="col-12">
              <!--
        <b-button v-if="$can('Mantenimiento Anadir')"  @click='anadir_registro()' type='button' class='btn btn-wangir btn-lg' data-toggle='button' size='sm' aria-pressed='false' variant='success' style='margin-bottom: 5px; margin: 5px;'>Añadir registro
        </b-button>
        -->
        <router-link :to="{ name: 'contratista' }">Lista de Contratista</router-link>



              <router-link
                v-if="$can('Mantenimiento Anadir')"
                :to="{ name: 'mantenimientoformadd', params: { id: 0 } }"
              >
                <a
                  v-bind:href="'/Marca/create'"
                  class="btn-sm btn btn-success mr-1"
                  size="sm"
                  style="margin-bottom: 5px; margin: 5px"
                >
                  Añadir Registro
                </a>
              </router-link>
              <div class="flexbox float-right">
                <form ref="form" v-on:submit.prevent="consulta()">
                  <b-input-group
                    size="sm"
                    class="float-right margin-bottom-0"
                    prepend=""
                    style="margin-bottom: 0px"
                  >
                    <b-form-input
                      type="text"
                      v-model="input_consulta_data"
                    ></b-form-input>
                    <b-input-group-append>
                      <b-button
                        @click="consulta()"
                        size="sm"
                        text="Button"
                        variant="success"
                        >Buscar</b-button
                      >
                    </b-input-group-append>
                  </b-input-group>
                </form>
              </div>
              <br /><br />
            </div>

            <b-table
              :items="consulta_datos.data"
              :fields="fields"
              responsive="sm"

              :no-border-collapse="noCollapse"
            >
              <template v-slot:cell(Acciones)="data">
                <b-button-group>
                  <!--
          <b-button v-if="$can('Mantenimiento Editar')" size='sm' variant='warning'  type='button' class='btn-sm btn btn-wangir mr-1' data-toggle='button' aria-pressed='false' style='margin-bottom: 5px; margin: 5px;'>Editar
            </b-button>
            -->
                  <router-link

                    v-if="$can('Mantenimiento Editar')"

                    :to="{ name: 'mantenimientoform', params: { id: data.item.id } }"
                  >
                    <a
                      v-bind:href="'/Mantenimiento/' + data.item.id + '/edit'"
                      class="btn-sm btn btn-success mr-1"
                      size="sm"
                      style="margin-bottom: 5px; margin: 5px"
                    >
                      <div class="d-block d-sm-block d-md-none">
                        <b-icon icon="pencil-fill"></b-icon>
                      </div>
                      <div class="one-linea d-none d-sm-none d-md-block">
                        <span>
                          <!--
                    <b-icon icon='pencil-fill' ></b-icon>
                -->
                        </span>
                        <span> Editar </span>
                      </div>
                    </a>
                  </router-link>

                  <b-button
                    v-if="$can('Mantenimiento Eliminar')"
                    v-b-modal.moda-eliminar
                    @click="eliminar_registro(data.item.id)"
                    type="button"
                    class="btn-sm btn btn-danger mr-1"
                    size="sm"
                    data-toggle="button"
                    aria-pressed="false"
                    style="margin-bottom: 5px; margin: 5px"
                  >
                    <div class="d-block d-sm-block d-md-none">
                      <b-icon icon="trash"></b-icon>
                    </div>
                    <div class="one-linea d-none d-sm-none d-md-block">
                      <span>
                        <!--
                        <b-icon icon='trash' ></b-icon>
                        -->
                      </span>
                      <span> Eliminar </span>
                    </div>
                  </b-button>
                  <!--
            <a v-bind:href=" data.item.id+'/Sucursale'"  class='btn-sm btn btn-success mr-1' size='sm'  style='margin-bottom: 5px; margin: 5px;'>Surcusales </a>
            -->
           <b-button size="sm" @click="data.toggleDetails" style='margin-bottom: 5px; margin: 5px;' class="btn-sm mr-2 btn-sm-mass">
                      {{ data.detailsShowing ? 'Menos' : 'Mas'}}
                    </b-button>
                </b-button-group>
              </template>
              <template v-slot:row-details="row">
          <b-card class="bg-arielle-edyconst ">

            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right"><b>Usuario:</b></b-col>
              <b-col style="white-space: none">{{ row.item.users_id.name }}</b-col>
            </b-row>

            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right"><b>Fecha:</b></b-col>
              <b-col style="white-space: none">{{ row.item.fecha }}</b-col>
            </b-row>
            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right"><b>Calzada:</b></b-col>
              <b-col style="white-space: none">{{ row.item.calzada }}</b-col>
            </b-row>
            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right"><b>Calzada:</b></b-col>
              <b-col style="white-space: none">{{ row.item.calzada_id.nombre }}</b-col>
            </b-row>

            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right"><b>Actividad:</b></b-col>
              <b-col style="white-space: none">{{ row.item.actividad_id.nombre }}</b-col>
            </b-row>
            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right"><b>Cantidad:</b></b-col>
              <b-col style="white-space: none">{{ row.item.cantidad }}</b-col>
            </b-row>
            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right"><b>Foto Link:</b></b-col>
              <b-col style="white-space: none">{{ row.item.foto_link }}</b-col>
            </b-row>

<!--

ALTER TABLE `mantenimiento_actividad` ADD `tipo_unidad` VARCHAR(15) NOT NULL AFTER `nombre`;


cantidad
actividad_id: {id: 7, nombre: "ADEACIONES LOCATIVAS CASA GERENTE"}
calzada: "VIA GIRARDOT - BOGOTA"
cantidad: "34"
contratista_id: {id: 4, nombre: "SELECCIONEMOS"}
created_at: "2021-03-19T15:41:08.000000Z"
fecha: "2021-03-19"
foto_link: ""
id: 26391
id_key: "924059453"
km_final: "25"
km_inicial: "25"
latitud: "4.2384417"
longitud: "-74.6178517"
m_final: "44"
m_inicial: "45"
mantenimiento_foto_all: [{id: 24, id_key: "647966537",…}]
pr: "30 + 730"
sicro: "2"
tipo_unidad: "unid"
unidad_funcional_id: 0
updated_at: "2021-03-19T15:41:08.000000Z"
users_id: 1
via: "vm"
-->


            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right"><b>Tipo unidad:</b></b-col>
              <b-col style="white-space: none">{{ row.item.tipo_unidad }}</b-col>
            </b-row>
              <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right"><b>Contratista:</b></b-col>
              <b-col style="white-space: none">{{ row.item.contratista_id.nombre }}</b-col>
            </b-row>
               <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right"><b>PR:</b></b-col>
              <b-col style="white-space: none">{{ row.item.pr }}</b-col>
            </b-row>
            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right"><b>Km Inicial:</b></b-col>
              <b-col style="white-space: none">{{ row.item.km_inicial }} + {{ row.item.m_inicial }}</b-col>
            </b-row>
            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right"><b>Km Final:</b></b-col>
              <b-col style="white-space: none">{{ row.item.km_final }} + {{ row.item.m_final }}</b-col>
            </b-row>
            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right"><b>Fecha Modificada:</b></b-col>
              <b-col style="white-space: none">{{ row.item.updated_at }}</b-col>
            </b-row>




            <b-row class="mb-12">
              <b-col sm="3" class="text-sm-right"><b>Registro fotografico:</b></b-col>
              <span v-for="foto in  row.item.mantenimiento_foto_all" v-bind:key="foto.id" >
                <img :src="'data:imagen/jpg;base64,'+foto.file" height="400px" />

              </span>
            </b-row>



        </b-card></template>
            </b-table>
          </div>
        </div>
      </div>
    </div>

    <b-modal id="moda-eliminar" ref="my-modal" size="xl" hide-footer>
      <template slot="modal-title">Eliminar un Registro </template>
      <div class="d-block text-center">
        <h3>¿Desea eliminar el registro permanente?</h3>
        <b-button class="mt-3 btn btn-danger" @click="eliminar_registro_delete()"
          >Eliminar</b-button
        >
      </div>
    </b-modal>
  </div>
</template>

<script type="application/javascript">
import Vue from "vue";

export default {
  components: {

    //  Select2
  },
  data() {
    return {
      validacion: [],
      editar_dato: false,
      data: [],
      datas: [],
      input_consulta_data: "",
      stickyHeader: true,
      noCollapse: false,
      fields: [
        { key: "Acciones", stickyColumn: true, label: "Acciones", sortable: false },
       // { key: "id", sortable: true, class: "one-lineas" },
        { key: "users_id.name",label:'Usuario', sortable: true, class: "one-lineas" },
       // { key: "id_key", sortable: true, class: "one-lineas" },
        { key: "fecha", sortable: true, class: "one-lineas" },
        { key: "contratista_id.nombre",label:'Contratista', sortable: true, class: "one-lineas" },

        { key: "actividad_id.nombre",label:'Actividad', sortable: true, class: "one-lineas" },
        { key: "km_inicial", sortable: true, class: "one-lineas" },
        { key: "m_inicial", sortable: true, class: "one-lineas" },
       // { key: "km_final", sortable: true, class: "one-lineas" },
       // { key: "m_final", sortable: true, class: "one-lineas" },
        //{ key: "via", sortable: true, class: "one-lineas" },
        //{ key: "calzada", sortable: true, class: "one-lineas" },
        //{ key: "tipo_unidad", sortable: true, class: "one-lineas" },
        { key: "cantidad", sortable: true, class: "one-lineas" },
      ],

      //input_Mantenimiento_id:[],

      consulta_datos: [],
      errors: {},
      mensaje_formulario: "",
      page: 1,
    };
  },
  mounted() {
    this.consulta();
    this.data_foraneo();
  },
  methods: {
    consulta(page = 1) {
      if (localStorage.getItem("mantenimiento")) {
        try {
          this.items = JSON.parse(localStorage.getItem("mantenimiento"));
        } catch (e) {
          localStorage.removeItem("mantenimiento");
        }
      }

      this.page = page;
      //axios.get("Mantenimiento/consulta?page=" +page+"&consulta_data="+this.input_consulta_data)
      axios
        .get(
          `${this.$url}/Api/Mantenimiento?page=${page}&consulta_data=${this.input_consulta_data}`
        )
        .then((response) => {
          this.consulta_datos = response.data;
          const parsed = JSON.stringify(response.data);
          localStorage.setItem("mantenimiento", parsed);
        });
    },

    eliminar_registro(data_id) {
      this.input_Mantenimiento_id = data_id;
    },
    data_foraneo() {},
    eliminar_registro_delete() {
      var data_id = this.input_Mantenimiento_id;
      axios
        .delete(`${this.$url}/Api/Mantenimiento/${this.input_Mantenimiento_id}`)
        .then((response) => {
          const data = response.data;
          if (response.data.id) {
            this.validacion = "";
            this.$toastr.info("operaciónn exitosa", "Datos Eliminados");
            this.consulta(this.page);
            this.$refs["my-modal"].hide();
          }
        });
    },

    $can(permissionName) {
      return Permissions.indexOf(permissionName) !== -1;
    },
  },
};
</script>
