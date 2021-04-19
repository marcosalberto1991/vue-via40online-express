<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon></page-title>
        <div class="mb-3 card min-700">
            <div class="card-header-tab card-header">
                <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                    <i class="header-icon lnr-charts icon-gradient bg-happy-green"> </i>
                    Via 40 Reporta
                </div>
            </div>
            <div class="no-gutters row">
                <div class="col-sm-12 col-md-12 col-xl-12">


               <GmapMap

:options="{
   zoomControl: true,
   mapTypeControl: false,
   scaleControl: false,
   streetViewControl: false,
   rotateControl: false,
   fullscreenControl: true,
   disableDefaultUI: false
 }"


               ref="mapRef"
  :center="{lat:4.288984111265914, lng:-74.7831581256256}"
  :zoom="15"
  map-type-id="terrain"
  style="width: 1200px; height: 500px"
>
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
  />
</GmapMap>

                </div>
<button @click="createCargoRoute(1)">Calcular</button>


        </div>


    </div>
    </div>

</template>

<script>
import Vue from "vue";

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    //key: 'AIzaSyDPOOflscgH8xFUqYjX_kgkaj7vYRXeYSo',
    key:'AIzaSyB2a9zJeYwN7mdTJbKGWBkwJr3byYrcFpo',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
     v: '3.26',

  },


  /*
  directionsService.route({
            origin: { lat: waypts[0].location.lat, lng: waypts[0].location.lng },//db waypoint start
            destination: { lat: waypts[0].location.lat, lng: waypts[0].location.lng },//db waypoint end
            waypoints: waypts,
            travelMode: google.maps.TravelMode.WALKING
        }, function (response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            } else {
                window.alert('Ha fallat la comunicació amb el mapa a causa de: ' + status);
            }
        });
*/
  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
})

export default {
    directionsService: null,
    directionsDisplay: null,

    components: {

  //  Select2
  },
  data() {

    return {
      validacion: [],
      markers:[

      ]




    };
  },
  mounted() {

        //this.$options.directionsService = new google.maps.DirectionsService();
        //this.$options.directionsDisplay = new google.maps.DirectionsRenderer();
        //this.$options.directionsDisplay.setMap(this.$refs.olkonmap.$mapObject);
    //this.consulta();
    //this.data_foraneo();
  },
  methods: {

      createCargoRoute: function(cargo_id) {
          this.$refs.mapRef.$mapPromise.then((map) => {


          var storehouse = new google.maps.LatLng(4.28705, -74.46946);
            var storehouse2 = new google.maps.LatLng(4.3202, -74.42617);

          console.info('paso ');

            this.$mapObject = new google.maps.DirectionsService({
                origin: storehouse,
                destination: storehouse2,
                travelMode: 'DRIVING',
                //waypoints: cargo_waypoints,
                optimizeWaypoints: true

              }, function (response, status) {


        if (status === 'OK') {
            console.info(status);
            console.info(response);
          vm.directionsDisplay.setDirections(response)
        } else {
          console.log('Directions request failed due to ' + status)
        }
      }

            )


     // map.panTo({lat: 4.28705, lng: -74.46946})


      //new google.map.DirectionsService()




    })

            // clear existing directions
            //this.$options.directionsDisplay.set('directions', null);

/*
            var storehouse = new google.maps.LatLng(4.28705, -74.46946);
            var storehouse2 = new google.maps.LatLng(4.3202, -74.42617);

            var cargo_waypoints='de'

            this.$options.directionsService.route({
                origin: storehouse,
                destination: storehouse2,
                travelMode: 'DRIVING',
                waypoints: cargo_waypoints,
                optimizeWaypoints: true
            }, (result, status) => {
                if(status == 'OK') {
                   this.$options.directionsDisplay.setDirections(result);
                }
            });
        */
        },

    consulta(){

    }
  }
}

    /*
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
        }),

        methods: {},

    }
    */


</script>
<style>
.min-700{
    min-height: 800px;
}
</style>
