<template>
  <div class="container-fluid">

    <div class="row">
      <div class="col-lg-12">
        <div class="main-card md-3 card">
          <div class="card-body">
            <h1 class="">Registro de tráfico por turno peaje chinauta</h1>
            <div class="row">

                <div class="col-md-6 col-sm-12">
                <b-form-group id="input-group-1" label="Fecha" label-for="input-1" description="We'll never share your email with anyone else.">
                    <b-form-datepicker id="example-datepicker"
                    v-model="value"
                    class="md-2"
                    ></b-form-datepicker>
                </b-form-group>
                </div>
                <div class="col-md-3 col-sm-12">
                    <b-form-group
                        id="input-group-1"
                        label="Hora Inicial"
                        label-for="input-1"
                        description="Hora inicial de reporte"
                    >
                        <b-form-timepicker v-model="value" locale="en"></b-form-timepicker>
                    </b-form-group>
                </div>
                <div class="col-md-3 col-sm-12">
                    <b-form-group
                        id="input-group-1"
                        label="Hora final"
                        label-for="input-1"
                        description=" Hora final de reporte"
                    >
                        <b-form-timepicker v-model="value" locale="en"></b-form-timepicker>
                    </b-form-group>
                </div>
            </div>
            <div class="row">




                <div class="col-md-6 col-sm-12 cuadro-recaudo">

                    <div class="col-12 row">
                        <div class="col-6">
                            <h5>Carril 3 sentido</h5>
                        </div>
                        <div class="col-4">
                            <b-form-select v-model="selected" class="inpselect" :options="options"></b-form-select>
                        </div>
                        <div class="col-2">
                            <input class="input_sm" type="text">

                        </div>
                    </div>

                    <table class="table table-bordered" >
                        <tr class="table-reaudo">
                            <th>CAT 1 </th>
                            <th>CAT IE</th>
                            <th>CAT 2 </th>
                            <th>CAT 3</th>
                            <th>CAT 4</th>
                            <th>CAT 5</th>
                            <th>CAT EG</th>
                            <th>CAT EA</th>
                            <th>CAT ER</th>
                        </tr>
                        <tr class="table-reaudo">
                            <td style="padding: 0px;" ><input  type="text"></td>
                            <td style="padding: 0px;"><input type="text"></td>
                            <td style="padding: 0px;"><input type="text"></td>
                            <td style="padding: 0px;"><input type="text"></td>
                            <td style="padding: 0px;"><input type="text"></td>
                            <td style="padding: 0px;"><input type="text"></td>
                            <td style="padding: 0px;"><input type="text"></td>
                            <td style="padding: 0px;"><input type="text"></td>
                            <td style="padding: 0px;"><input type="text"></td>

                        </tr>
                    </table>
                </div>
                <div class="col-md-6 col-sm-12  cuadro-recaudo">

                    <div class="col-12 row">
                        <div class="col-6">
                            <h5>Carril 1 sentido</h5>
                        </div>
                        <div class="col-6">
                            <b-form-select v-model="selected" :options="options"></b-form-select>
                        </div>
                    </div>

                    <table class="table table-bordered" >
                        <tr class="table-reaudo">
                            <th>CAT 1 </th>
                            <th>CAT IE</th>
                            <th>CAT 2 </th>
                            <th>CAT 3</th>
                            <th>CAT 4</th>
                            <th>CAT 5</th>
                            <th>CAT EG</th>
                            <th>CAT EA</th>
                            <th>CAT ER</th>
                        </tr>
                        <tr class="table-reaudo">
                            <td style="padding: 0px;" ><input  type="text"></td>
                            <td style="padding: 0px;"><input type="text"></td>
                            <td style="padding: 0px;"><input type="text"></td>
                            <td style="padding: 0px;"><input type="text"></td>
                            <td style="padding: 0px;"><input type="text"></td>
                            <td style="padding: 0px;"><input type="text"></td>
                            <td style="padding: 0px;"><input type="text"></td>
                            <td style="padding: 0px;"><input type="text"></td>
                            <td style="padding: 0px;"><input type="text"></td>

                        </tr>
                    </table>
                </div>
                <div class="col-md-6 col-sm-12 cuadro-recaudo">

                    <div class="col-12 row">
                        <div class="col-6">
                            <h5>Carril 1 sentido</h5>
                        </div>
                        <div class="col-6">
                            <b-form-select v-model="selected" :options="options"></b-form-select>
                        </div>
                    </div>

                    <table class="table table-bordered" >
                        <tr class="table-reaudo">
                            <th>CAT 1 </th>
                            <th>CAT IE</th>
                            <th>CAT 2 </th>
                            <th>CAT 3</th>
                            <th>CAT 4</th>
                            <th>CAT 5</th>
                            <th>CAT EG</th>
                            <th>CAT EA</th>
                            <th>CAT ER</th>
                        </tr>
                        <tr class="table-reaudo">
                            <td style="padding: 0px;" ><input  type="text"></td>
                            <td style="padding: 0px;"><input type="text"></td>
                            <td style="padding: 0px;"><input type="text"></td>
                            <td style="padding: 0px;"><input type="text"></td>
                            <td style="padding: 0px;"><input type="text"></td>
                            <td style="padding: 0px;"><input type="text"></td>
                            <td style="padding: 0px;"><input type="text"></td>
                            <td style="padding: 0px;"><input type="text"></td>
                            <td style="padding: 0px;"><input type="text"></td>

                        </tr>
                    </table>
                </div>
                <div class="col-md-6 col-sm-12 cuadro-recaudo">

                    <div class="col-12 row">
                        <div class="col-6">
                            <h5>Carril 1 sentido</h5>
                        </div>
                        <div class="col-6">
                            <b-form-select v-model="selected" :options="options"></b-form-select>
                        </div>
                    </div>

                    <table class="table table-bordered" >
                        <tr class="table-reaudo">
                            <th>CAT 1 </th>
                            <th>CAT IE</th>
                            <th>CAT 2 </th>
                            <th>CAT 3</th>
                            <th>CAT 4</th>
                            <th>CAT 5</th>
                            <th>CAT EG</th>
                            <th>CAT EA</th>
                            <th>CAT ER</th>
                        </tr>
                        <tr class="table-reaudo">
                            <td style="padding: 0px;" ><input  type="text"></td>
                            <td style="padding: 0px;"><input type="text"></td>
                            <td style="padding: 0px;"><input type="text"></td>
                            <td style="padding: 0px;"><input type="text"></td>
                            <td style="padding: 0px;"><input type="text"></td>
                            <td style="padding: 0px;"><input type="text"></td>
                            <td style="padding: 0px;"><input type="text"></td>
                            <td style="padding: 0px;"><input type="text"></td>
                            <td style="padding: 0px;"><input type="text"></td>

                        </tr>
                    </table>
                </div>

                <div class="col-md-12 row espacion text-cente" style="padding-top: 20px;padding-bottom: 20px;padding-left: 30px;">
                    <br>
                    <br>
                        <h5> PUNTOS DE PAGO</h5>
                    <br>
                    <br>
                </div>
                <div class="col-md-12 row espacion">



                    <div class="col-md-6">
                        <b-form inline>
                            <label class="mr-sm-2" for="inline-form-custom-select-pref">PUNTOS DE PAGO CARRIL 1</label>
                            <b-form-input type="text" id="text-password" aria-describedby="password-help-block"></b-form-input>
                        </b-form>
                    </div>
                    <div class="col-md-6">
                        <b-form inline>
                            <label class="mr-sm-2" for="inline-form-custom-select-pref">PUNTOS DE PAGO CARRIL 2</label>
                            <b-form-input type="text" id="text-password" aria-describedby="password-help-block"></b-form-input>
                        </b-form>
                    </div>
                    <div class="col-md-6">
                        <b-form inline>
                            <label class="mr-sm-2" for="inline-form-custom-select-pref">PUNTOS DE PAGO CARRIL 3</label>
                            <b-form-input type="text" id="text-password" aria-describedby="password-help-block"></b-form-input>
                        </b-form>
                    </div>
                    <div class="col-md-6">
                        <b-form inline>
                            <label class="mr-sm-2" for="inline-form-custom-select-pref">PUNTOS DE PAGO CARRIL 4</label>
                            <b-form-input type="text" id="text-password" aria-describedby="password-help-block"></b-form-input>
                        </b-form>
                    </div>
                    <div class="col-md-6">
                        <b-form inline>
                            <label class="mr-sm-2" for="inline-form-custom-select-pref">PUNTOS DE PAGO CARRIL 5</label>
                            <b-form-input type="text" id="text-password" aria-describedby="password-help-block"></b-form-input>
                        </b-form>
                    </div>

                    <div class="col-md-12">
                    <br>
                    </div>
                    <div class="col-md-6">
                        <b-form inline>
                            <label class="mr-sm-2" for="inline-form-custom-select-pref">JEFES DE PEAJE</label>
                            <b-form-input type="text" id="text-password" aria-describedby="password-help-block"></b-form-input>
                        </b-form>
                    </div>
                    <div class="col-md-6">
                        <b-form inline>
                            <label class="mr-sm-2" for="inline-form-custom-select-pref">SUPERVISORAS</label>
                            <b-form-input type="text" id="text-password" aria-describedby="password-help-block"></b-form-input>
                        </b-form>
                    </div>
                    <div class="col-md-12">
                    <br>
                        <div class="col text-center">
                              <b-button @click="formulario(0)" variant="success">Enviar informen</b-button>

                        </div>
                    </div>




                </div>


            </div>




          </div>

        </div>
        <br>
          <br>
          <br>
      </div>
    </div>


  </div>
</template>

<script type="application/javascript">

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

            options: [
            { value: 0, text: 'Sin Sentido' },
            { value: 1, text: 'BG' },
            { value: 2, text: 'GB' }
          ]
        }),

        methods: {
            formulario(estado) {
                
            }
        },

    }



/*
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

      //input_Fresado_id:[],
      data_foraneo_unidad_funcional_id: [],
      data_foraneo_estado_tramite_id: [],
      options: [
            { value: 0, text: 'Sin Sentido' },
            { value: 1, text: 'BG' },
            { value: 2, text: 'GB' }
          ]
    };
  },
  mounted() {
    this.consulta();
    this.data_foraneo();

  },
  methods: {
    consulta(page = 1) {
      if (localStorage.getItem("Fresado")) {
        try {
          this.items = JSON.parse(localStorage.getItem("Fresado"));
        } catch (e) {
          localStorage.removeItem("Fresado");
        }
      }

      this.page = page;
      axios
        .get(
          `${this.$url}/Api/Fresado?page=${page}&consulta_data=${this.input_consulta_data}`
        )
        .then((response) => {
          this.consulta_datos = response.data;
          const parsed = JSON.stringify(response.data);
          localStorage.setItem("Fresado", parsed);
        });
    },

    eliminar_registro(data_id) {
      this.input_Fresado_id = data_id;
    },
    data_foraneo() {},
    eliminar_registro_delete() {
      var data_id = this.input_Fresado_id;
      axios
        .delete(`${this.$url}/Api/Fresado/${this.input_Fresado_id}`)
        .then((response) => {
          const data = response.data;
          if (response.data.id) {
            this.validacion = "";
            this.$toastr.info("operación exitosa", "Datos Eliminados");
            this.consulta(this.page);
            this.$refs["my-modal"].hide();
          }
        });
    },
    formulario(estado) {
            this.is_enviar = true;
            const auth = {
                headers: {Authorization:'JWT ' + localStorage.getItem('token')}
            }
            const data = {
                id: this.input_Fresado_id,
                id: this.input_id,
                unidad_funcional_id: this.input_unidad_funcional_id,


                //name: this.input_name,
                //email: this.input_email
            };

            if (this.editar_dato == true) {
                axios.put(`${this.$urlBa}/api/RecaudoDataChinauta/${this.input_Fresado_id}`, data ).then(
                    (response) => {
                        const datos = response.data;
                        if (response.data.errors) {
                            this.$toastr.warning("Verifique los datos", "Verifique los datos");
                            this.validacion = response.data.errors;
                        }
                        if (response.data.id) {
                            this.validacion = "";
                            this.$toastr.success("operación exitosa", "Datos modificados");
                        }
                    },
                    (err) => {
                        console.log("Err", err);
                        this.$toastr.warning(err, "Error en el servidor");
                        this.$toastr.warning(err.message, "Error en el servidor");
                    }
                );
            } else {
                axios.post(`${this.$urlBa}/Api/RecaudoDataChinauta`, data).then(
                    (response) => {
                        const datos = response.data;
                        if (response.data.errors) {
                            this.$toastr.warning("Verifique los datos", "Verifique los datos");
                            this.validacion = response.data.errors;
                        }
                        if (response.data.id) {
                            this.validacion = "";
                            this.$toastr.success("operación exitosa", "Datos modificados");
                            this.input_Fresado_id = response.data.id

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

    $can(permissionName) {
      //  return true;

      return Permissions.indexOf(permissionName) !== -1;
    },
  },
};
*/
</script>
<style>
.table{
    width:100%;
    table-layout: fixed;
    overflow-wrap: break-word;
}
.input_sm{
    width: 60%;
}
.table-reaudo >td{
    padding: 0px;
}
.table-reaudo >th{
    padding: 2px;
    font-size: 75%;
    color: #6c757d;
    text-align: center!important;
}
.table-reaudo >td>input{
    width: 100%;
    padding: 0px;
}
.cuadro-recaudo{
    _background-color: antiquewhite;
    padding-top: 10px;
    margin-top: 10px;
    border-radius: 0.25rem;
    border: 1px solid rgba(0, 0, 0, 0.125);
}
.inpselect{
    margin-bottom: 5px;
}

</style>
