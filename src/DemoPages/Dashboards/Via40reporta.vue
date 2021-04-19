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
               <iframe src="https://firebasestorage.googleapis.com/v0/b/via40reporta.appspot.com/o/mapavia40%20-2.html?alt=media&amp;token=0bddabbd-40cb-499e-bb1b-31fde98d04fe" name="PAGE_VIA40REPORTA_A1" style="border: -1px; overflow: auto; width: 1200px; height: 1000px; position: absolute; top: 0px; left: 0px;"></iframe>
                </div>

        </div>


    </div>
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
        }),

        methods: {},

    }
    


</script>
<style>
.min-700{
    min-height: 800px;
}
</style>
