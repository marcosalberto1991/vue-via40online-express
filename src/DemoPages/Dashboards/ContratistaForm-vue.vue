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
            <input type="hidden" v-model="input_Contratista_id">



            <div class="form-group col-md-4 col-sm-12">
                <label for="exampleInputEmail1">nombre<span class="tx-danger">*</span> </label>
                <input type="text" v-model="input_nombre" placeholder="nombre" class="form-control"  :class="{ 'is-invalid':this.validacion.nombre, 'is-valid':!this.validacion.nombre && is_enviar  }" >
                <div class="invalid-feedback" style ="display:block" v-for="data in validacion.nombre" v-bind:key="data.nombre" >
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



      input_Contratista_id:[],

      input_id:[],
      input_nombre:[],

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
        axios.get(`${this.$url}/Api/Contratista/create`).then(response => {

        });
    },
    formulario(){
        this.is_enviar=true

      const data = {
        id: this.input_Contratista_id,
        id :this.input_id,
        nombre :this.input_nombre,

        //name: this.input_name,
        //email: this.input_email
      };

      if(this.editar_dato == true){
        axios.put(`${this.$url}/Api/Contratista/${this.input_Contratista_id}`, data)
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

        axios.post(`${this.$url}/Api/Contratista`, data).then(response => {
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


      axios.get(`${this.$url}/Api/Contratista/${data_id}`).then(response => {
            const data = response.data;
            if(!response.data){
              this.$toastr.warning("operaciónn no exitosa", "Regitro no obtenido");
            }else{
              this.$toastr.success("operaciónn exitosa", "Regitro obtenido");
              this.editar_dato = true;
              this.input_Contratista_id = data.id
              this.input_id = data.id;
              this.input_nombre = data.nombre;


            }
        });
    },
    limpiar_form(){
      this.input_id = '';
      this.input_nombre = '';

      this.validacion="";

    },

  }
};


</script>



