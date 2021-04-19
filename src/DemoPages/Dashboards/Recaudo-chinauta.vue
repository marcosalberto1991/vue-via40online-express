<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon></page-title>
        <div class="mb-3 card min-700">
            <div class="card-header-tab card-header">
                <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                    <i class="header-icon lnr-charts icon-gradient bg-happy-green"> </i>
                    Recaudos Chinauta
                </div>
            </div>
            <div class="no-gutters row">
                <div class="col-sm-12 col-md-12 col-xl-12">
                <iframe src="https://app.powerbi.com/view?r=eyJrIjoiM2I3NTcyZGUtOTFjMy00YjM4LWI1ODAtYTJjN2U5MTMwM2Y0IiwidCI6IjFjNWNhODkxLThkY2QtNGEzMy05MjRhLThjMWE5Yjc5YmNkMyJ9&pageName=ReportSectione48271b3a343edc47f3f" name="PAGE_RECAUDO_A1" style="min-height:700px; border:0;overflow:auto;width:100%;height:100%;position:absolute;top:0;left:0;">
                </iframe>
                </div>

        </div>


    </div>
    </div>

</template>

<script>
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
