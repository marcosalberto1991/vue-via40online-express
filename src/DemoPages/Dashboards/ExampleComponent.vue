<template>
<div class="tab-content">
    <div class="row">
        <div class="col-md-6 col-sm-12">
            <b-card overlay :img-src="this.$url+'/img/fondo2.png'" img-alt="Card Image" text-variant="white">
                <b-card-text class="menu_principal">
                    Recaudos.
                </b-card-text>
                <div class="col-12 row">
                    <div class="col-4">
                        <button type="button" class="btn btn-light">Rutinario</button>
                    </div>
                    <div class="col-4">
                        <button type="button" class="btn btn-light">Rutinario</button>
                    </div>
                    <div class="col-4">
                        <button type="button" class="btn btn-light">Rutinario</button>
                    </div>
                    <br>

                </div>

            </b-card>
        </div>
        <div class="col-md-6 col-sm-12">
            <b-card overlay :img-src="this.$url+'/img/fondo2.png'" img-alt="Card Image" text-variant="white">
                <b-card-text class="menu_principal">
                    Operaciones.
                </b-card-text>
            </b-card>

        </div>
    </div>

    <br>
    <br>
    <div class="tab-pane tabs-animation fade show active" id="tab-content-1" role="tabpanel">
        <div class="row">
            <div class="col-md-12">
                <div class="main-card col-12 mb-12 card">
                    <div class="card-body">
                        <h5 class="card-title">Inicio </h5>
                        <p>Aplicacion </p>
                    </div>
                </div>
            </div>

        </div>
    </div>

</div>
</template>

<script>
export default {
    data() {
    return {
        validacion: [],
        url: '',

      }
    },
    mounted() {
        console.log('Component mounted.')
    }

}
</script>

<style>
.menu_principal {
    font-size: 40px;
    text-shadow: -1px 0 black, 0 1px black,
        1px 0 black, 0 -1px black
}
</style>
