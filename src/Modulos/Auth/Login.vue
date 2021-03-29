<template>
    <div>
        <div class="h-100 bg-plum-plate bg-animation">
            <div class="d-flex h-100 justify-content-center align-items-center">
                <b-col md="8" class="mx-auto app-login-box">
                    <div class="app-logo-inverse mx-auto mb-3"/>
                    <form class="login" @submit.prevent="login">
                    <div class="modal-dialog w-100 mx-auto">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="h5 modal-title text-center">
                                    <h4 class="mt-2">
                                        <div>Bienvenido a Via40 Online,</div>
                                        <span>Inicie sesión en su cuenta a continuación.</span>
                                    </h4>
                                </div>
                                <b-form-group id="exampleInputGroup1"
                                              label-for="exampleInput1"
                                              description="We'll never share your email with anyone else.">
                                    <b-form-input id="exampleInput1"
                                                  v-model="email" 
                                                  type="email"
                                                  required
                                                  placeholder="Enter email...">
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group id="exampleInputGroup2"
                                              label-for="exampleInput2">
                                    <b-form-input id="exampleInput2"
                                                  type="password"
                                                  v-model="password"
                                                  required
                                                  placeholder="Enter password...">
                                    </b-form-input>
                                </b-form-group>
                                <b-form-checkbox name="check" id="exampleCheck">
                                    Keep me logged in
                                </b-form-checkbox>
                                <div class="divider"/>
                                <h6 class="mb-0">
                                    ¿No tienes cuenta? 
                                    <a href="javascript:void(0);" class="text-primary">Regístrate ahora</a>
                                </h6>
                            </div>
                            <div class="modal-footer clearfix">
                                <div class="float-left">
                                    <a href="javascript:void(0);" class="btn-lg btn btn-link">Olvidor la contraseña</a>
                                </div>
                                <div class="float-right">
                                    <b-button type="submit" variant="primary"   size="lg">Inicia Sessión </b-button>

                                </div>
                            </div>
                        </div>
                    </div>
                    </form>
                    <div class="text-center text-white opacity-8 mt-3">
                        Copyright &copy; ArchitectUI 2020
                    </div>
                </b-col>
            </div>
        </div>
    </div>
</template>

<script type="application/javascript">
//import Vue from "vue";
import axios from 'axios'
import store from '../../store.js'
import Vuex from 'vuex'


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
      email:'once.marcos.alberto@gmail.com',
      password:'mas12345',
      

    };
  },
  mounted() {
  },
  methods: {
    login: function () {
		let email = this.email 
		let password = this.password
		this.$store.dispatch('login', { email, password })
		   		.then(() => this.$router.push('/'))
		   		.catch(err => console.log(err))
	},
   
 


  }
};


</script>

