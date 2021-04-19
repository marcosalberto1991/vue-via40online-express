<template>
<div class="row">
    <div class="col-lg-12 ">
        <div class="main-card mb-3 card formulario">
            <div class="card-body"><h1 class="card-title"></h1>
                  <h2>Formulario </h2>
                    <div class="col-md-12 row">
                      <div class="form-group col-md-12 col-sm-12" style="margin-bottom: 6px;">
                        <button type="submit"  @click="formulario()" class="btn btn-primary">Guardar </button>
                        <a class="btn btn-warning" @click="cancelar_registro()" >Cancelar</a>
                      </div>
                    </div>
                    <div class="col-lg-12">

      <form ref="form"   v-on:submit.prevent="formulario()">
        <div class="row">
          <div class="col-md-12 row">
            <input type="hidden" v-model="input_MapasMarcadores_id">
  

            <div class="form-group col-md-4 col-sm-12">
                <label for="exampleInputEmail1">id<span class="tx-danger">*</span> </label>
                <input type="text" v-model="input_id" placeholder="id" class="form-control"  :class="{ 'is-invalid':this.validacion.id, 'is-valid':!this.validacion.id && is_enviar  }" >
                <div class="invalid-feedback" style ="display:block" v-for="data in validacion.id" v-bind:key="data.id" >
                    <b>{{data}}</b>
                </div>
            </div>
                

            <div class="form-group col-md-4 col-sm-12">
                <label for="exampleInputEmail1">descricion<span class="tx-danger">*</span> </label>
                <input type="text" v-model="input_descricion" placeholder="descricion" class="form-control"  :class="{ 'is-invalid':this.validacion.descricion, 'is-valid':!this.validacion.descricion && is_enviar  }" >
                <div class="invalid-feedback" style ="display:block" v-for="data in validacion.descricion" v-bind:key="data.descricion" >
                    <b>{{data}}</b>
                </div>
            </div>
                

            <div class="form-group col-md-4 col-sm-12">
                <label for="exampleInputEmail1">latitud<span class="tx-danger">*</span> </label>
                <input type="text" v-model="input_latitud" placeholder="latitud" class="form-control"  :class="{ 'is-invalid':this.validacion.latitud, 'is-valid':!this.validacion.latitud && is_enviar  }" >
                <div class="invalid-feedback" style ="display:block" v-for="data in validacion.latitud" v-bind:key="data.latitud" >
                    <b>{{data}}</b>
                </div>
            </div>
                

            <div class="form-group col-md-4 col-sm-12">
                <label for="exampleInputEmail1">longitud<span class="tx-danger">*</span> </label>
                <input type="text" v-model="input_longitud" placeholder="longitud" class="form-control"  :class="{ 'is-invalid':this.validacion.longitud, 'is-valid':!this.validacion.longitud && is_enviar  }" >
                <div class="invalid-feedback" style ="display:block" v-for="data in validacion.longitud" v-bind:key="data.longitud" >
                    <b>{{data}}</b>
                </div>
            </div>
                
            <div class="form-group col-md-3 col-sm-12">
              <label for="exampleInputEmail1">mapa_categoria_id<span class="tx-danger">*</span></label>
              <Select2 v-model="input_mapa_categoria_id" :options="data_foraneo_mapa_categoria_id" />
              <small id="emailHelp" class="form-text text-muted"></small>


                <div class="invalid-feedback" style ="display:block" v-for="data in validacion.mapa_categoria_id" v-bind:key="data.mapa_categoria_id" >
                                            <b>{{data}}</b>
                </div>
                </div>
          

            <div class="form-group col-md-4 col-sm-12">
                <label for="exampleInputEmail1">activo<span class="tx-danger">*</span> </label>
                <input type="text" v-model="input_activo" placeholder="activo" class="form-control"  :class="{ 'is-invalid':this.validacion.activo, 'is-valid':!this.validacion.activo && is_enviar  }" >
                <div class="invalid-feedback" style ="display:block" v-for="data in validacion.activo" v-bind:key="data.activo" >
                    <b>{{data}}</b>
                </div>
            </div>
                
            <div class="form-group col-md-12 col-sm-12 text-center">
              <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
          </div>
        </div>
      </form>
      </div>
      </div>
  </div>
</div>
</div>




</template>




<script type="application/javascript">
import Vue from "vue";
//import Select2 from "v-select2-component";
//https://www.npmjs.com/package/vue-toastr-2
//import VueToastr2 from "vue-toastr-2";
//import "vue-toastr-2/dist/vue-toastr-2.min.css";
//window.toastr = require("toastr");
//Vue.use(VueToastr2);

export default {
  components: {


 //   Select2
  },
  data() {

    return {
      is_enviar:false,

      validacion: [],
      editar_dato: false,
      data: [],
      datas: [],
      input_consulta_data:"",
      stickyHeader: true,
      noCollapse: false,



      input_MapasMarcadores_id:[],
      data_foraneo_mapa_categoria_id:[],
      input_id:[],
      input_descricion:[],
      input_latitud:[],
      input_longitud:[],
      input_mapa_categoria_id:[],
      input_activo:[],
      
      consulta_datos:[],
      errors: {},
      mensaje_formulario: "",
      page:1,

    };
  },
  mounted() {
    //this.consulta();
    this.data_foraneo();
    if(this.$route.params.id>0){
        this.show_registro(this.$route.params.id);
    }else{
        this.anadir_registro()
    }
  },
  methods: {



    anadir_registro(){
      this.validacion="";
      this.editar_dato = false;
      this.limpiar_form();
      this.mensaje_formulario="Añadir un nuevo registro"
    },


    data_foraneo(){
        axios.get(`${this.$url}/Api/MapasMarcadores/create`).then(response => {
        this.data_foraneo_mapa_categoria_id= response.data.mapa_categoria_id
        
        });
    },
    formulario(){
        this.is_enviar=true

      const data = {
        id: this.input_MapasMarcadores_id,
        id :this.input_id,
        descricion :this.input_descricion,
        latitud :this.input_latitud,
        longitud :this.input_longitud,
        mapa_categoria_id :this.input_mapa_categoria_id,
        activo :this.input_activo,
        
        //name: this.input_name,
        //email: this.input_email
      };

      if(this.editar_dato == true){
        axios.put(`${this.$url}/Api/MapasMarcadores/${this.input_MapasMarcadores_id}`, data)
        .then(response => {

            const datos = response.data;
            if(response.data.errors){
              this.$toastr.warning("Verifique los datos", "Verifique los datos");
              this.validacion=response.data.errors;
            }
            if(response.data.id){
              this.validacion="";
              this.$toastr.success("operaciónn exitosa", "Datos modificados");
              //this.consulta(this.page);
              window.history.back();



            }
        },
        (err) => {
          console.log("Err", err);
            this.$toastr.warning(err, "Error en el servidor");
            this.$toastr.warning(err.message, "Error en el servidor");
        });

      }else{

        axios.post(`${this.$url}/Api/MapasMarcadores`, data).then(response => {
            const datos = response.data;
            if(response.data.errors){
              this.$toastr.warning("Verifique los datos", "Verifique los datos");
              this.validacion=response.data.errors;
            }
            if(response.data.id){
              this.validacion="";
              this.$toastr.success("operaciónn exitosa", "Datos modificados");
              //this.consulta(this.page);
              this.limpiar_form();
              window.history.back();


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
    cancelar_registro(){
      window.history.back();
    },
    $can(permissionName) {
        return true;
        return Permissions.indexOf(permissionName) !== -1;
    },
    show_registro(data_id){//show_registro
      this.validacion="";
      this.mensaje_formulario="Editar un registro"


      axios.get(`${this.$url}/Api/MapasMarcadores/${data_id}`).then(response => {
            const data = response.data;
            if(!response.data){
              this.$toastr.warning("operaciónn no exitosa", "Regitro no obtenido");
            }else{
              this.$toastr.success("operaciónn exitosa", "Regitro obtenido");
              this.editar_dato = true;
              this.input_MapasMarcadores_id = data.id
              this.input_id = data.id;
              this.input_descricion = data.descricion;
              this.input_latitud = data.latitud;
              this.input_longitud = data.longitud;
              this.input_mapa_categoria_id = data.mapa_categoria_id;
              this.input_activo = data.activo;
              

            }
        });
    },
    limpiar_form(){
      this.input_id = '';
      this.input_descricion = '';
      this.input_latitud = '';
      this.input_longitud = '';
      this.input_mapa_categoria_id = '';
      this.input_activo = '';
      
      this.validacion="";

    },

  }
};


</script>



