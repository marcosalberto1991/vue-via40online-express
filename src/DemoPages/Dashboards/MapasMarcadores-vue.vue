

  <template>

  <div class='container-fluid'>

    <div class='row'>
  <div class='col-lg-12'>
  <div class='main-card mb-3 card'>
  <div class='card-body'><h1 class=''>Lista de MapasMarcadores </h1>

    <nav>
      <pagination :data='consulta_datos' @pagination-change-page='consulta'></pagination>
    </nav>

    <div class='col-12'>
        <!--
        <b-button v-if="$can('MapasMarcadores Anadir')"  @click='anadir_registro()' type='button' class='btn btn-wangir btn-lg' data-toggle='button' size='sm' aria-pressed='false' variant='success' style='margin-bottom: 5px; margin: 5px;'>Añadir registro
        </b-button>
        -->

      <router-link v-if="$can('MapasMarcadores Anadir')" :to="{ name: 'mapasmarcadoresformadd',params:{id:0} }">
        <a v-bind:href="'/Marca/create'" class='btn-sm btn btn-success mr-1' size='sm' style='margin-bottom: 5px; margin: 5px;'>
              Añadir Registro
        </a>
      </router-link>

            <b-input-group prepend="Subir archivo KML" class="mt-3">
            <b-form-file v-model="input_file" id="file-small" size="lg"></b-form-file>

            <b-input-group-append>
      <b-button v variant="outline-success" v-on:click="subir_archivo()" >Subir</b-button>

        </b-input-group-append>
        </b-input-group>
      <div class='flexbox  float-right' >
        <form ref='form'    v-on:submit.prevent='consulta()'>
          <b-input-group size='sm' class='float-right  margin-bottom-0' prepend=''  style='margin-bottom: 0px;'>
            <b-form-input type='text' v-model='input_consulta_data' ></b-form-input>
            <b-input-group-append>
              <b-button @click='consulta()' size='sm' text='Button' variant='success'>Buscar</b-button>
            </b-input-group-append>
          </b-input-group>
        </form>
      </div><br><br>
    </div>

      <b-table :items='consulta_datos.data' :fields='fields'
      responsive='sm' :sticky-header='stickyHeader' :no-border-collapse='noCollapse'>
      <template v-slot:cell(Acciones)='data'>

          <b-button-group>
          <!--
          <b-button v-if="$can('MapasMarcadores Editar')" size='sm' variant='warning'  type='button' class='btn-sm btn btn-wangir mr-1' data-toggle='button' aria-pressed='false' style='margin-bottom: 5px; margin: 5px;'>Editar
            </b-button>
            -->
            <router-link :to="{ name: 'mapasmarcadoresform', params: { id: data.item.id }}">
                <a v-bind:href="'/MapasMarcadores/'+data.item.id+'/edit'" class='btn-sm btn btn-success mr-1' size='sm' style='margin-bottom: 5px; margin: 5px;'>
                <div class='d-block d-sm-block d-md-none'>
                <b-icon icon='pencil-fill'></b-icon>
            </div>
            <div class='one-linea d-none d-sm-none d-md-block'>
                <span>
                <!--
                    <b-icon icon='pencil-fill' ></b-icon>
                -->
                </span>
                <span>
                    Editar
                </span>
            </div>
                </a>
            </router-link>



            <b-button v-if="$can('MapasMarcadores Eliminar')"  v-b-modal.moda-eliminar @click='eliminar_registro(data.item.id)' type='button' class='btn-sm btn btn-danger mr-1' size='sm' data-toggle='button' aria-pressed='false' style='margin-bottom: 5px; margin: 5px;'>

            <div class='d-block d-sm-block d-md-none'>
                <b-icon icon='trash'></b-icon>
            </div>
            <div class='one-linea d-none d-sm-none d-md-block'>
                <span>
                        <!--
                        <b-icon icon='trash' ></b-icon>
                        -->
                </span>
                <span>
                        Eliminar
                </span>
            </div>

            </b-button>
            <!--
            <a v-bind:href=" data.item.id+'/Sucursale'"  class='btn-sm btn btn-success mr-1' size='sm'  style='margin-bottom: 5px; margin: 5px;'>Surcusales </a>
            -->
          </b-button-group>




        </template>

      </b-table>

</div>
</div>
</div>

</div>




<b-modal id="moda-eliminar" ref="my-modal"  size="xl" hide-footer >
  <template slot="modal-title">Eliminar un Registro </template>
  <div class="d-block text-center">
    <h3>¿Desea eliminar el registro permanente?</h3>
    <b-button class="mt-3 btn btn-danger " @click="eliminar_registro_delete()">Eliminar</b-button>
  </div>
</b-modal>


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

  //  Select2
  },
  data() {

    return {
      validacion: [],
      editar_dato: false,
      data: [],
      datas: [],
      input_consulta_data:"",
      stickyHeader: true,
      noCollapse: false,
      fields: [
      { key: "Acciones",stickyColumn: true, label:"Acciones" ,sortable: false },
      { key: 'id', sortable:true,class:'one-lineas'},
      { key: 'descricion', sortable:true,class:'one-lineas'},
      { key: 'latitud', sortable:true,class:'one-lineas'},
      { key: 'longitud', sortable:true,class:'one-lineas'},
      { key: 'mapa_categoria_id', sortable:true,class:'one-lineas'},
      { key: 'activo', sortable:true,class:'one-lineas'},

      ],


      //input_MapasMarcadores_id:[],
      data_foraneo_mapa_categoria_id:[],

      consulta_datos:[],
      errors: {},
      mensaje_formulario: "",
      page:1,
      input_file:[],

    };
  },
  mounted() {
    this.consulta();
    this.data_foraneo();
  },
  methods: {
    subir_archivo(){
        const formData = new FormData();
            //formData.append('id', data.id);
            formData.append('input_file', this.input_file);

            axios.post(`${this.$url}/Api/MapasMarcadores/subir_archivo`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(
                    (response) => {
                        const datos = response.data;
                        if (response.data.errors) {
                            this.$toastr.warning("Verifique los datos", "Verifique los datos");
                            this.validacion = response.data.errors;
                        }
                        if (response.data) {
                            this.validacion = "";
                            this.consulta_datos = response.data
                            this.$toastr.success("operación exitosa", "Datos modificados");
                            //this.consulta();
                            t

                        }
                    },
                    (err) => {
                        console.log("Err", err);
                        this.$toastr.warning(err, "Error en el servidor");
                        this.$toastr.warning(err.message, "Error en el servidor");
                    }
                );


    },

    consulta(page = 1){
      if (localStorage.getItem("MapasMarcadores")) {
        try { this.items = JSON.parse(localStorage.getItem("MapasMarcadores"));
        } catch (e) { localStorage.removeItem("MapasMarcadores");}
      }

      this.page=page;
      //axios.get("MapasMarcadores/consulta?page=" +page+"&consulta_data="+this.input_consulta_data)
      axios.get(`${this.$url}/Api/MapasMarcadores?page=${page}&consulta_data=${this.input_consulta_data}`)
      .then(response => {
        this.consulta_datos = response.data;
        const parsed = JSON.stringify(response.data);
        localStorage.setItem("MapasMarcadores", parsed);
      });
    },

    eliminar_registro(data_id){
    this.input_MapasMarcadores_id=data_id;
    },
    data_foraneo(){

    },
    eliminar_registro_delete(){
      var data_id=this.input_MapasMarcadores_id;
      axios.delete(`${this.$url}/Api/MapasMarcadores/${this.input_MapasMarcadores_id}`).then(response => {
        const data = response.data;
        if(response.data.id){
          this.validacion="";
          this.$toastr.info("operaciónn exitosa", "Datos Eliminados");
          this.consulta(this.page);
          this.$refs["my-modal"].hide()

        }
      });

    },

    $can(permissionName) {
        return true;

      return Permissions.indexOf(permissionName) !== -1;
    },


  }
};


</script>



