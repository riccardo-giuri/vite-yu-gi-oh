<script>
    export default {
        props: {
            singleCardData: {
                type: Object,
                required: true
            }
        }
    }
</script>

<template>
    <div class="card">
        <img :src="singleCardData.card_images[0].image_url" alt="">

        <div class="card-body">
            <h5 class="card-title"> {{ singleCardData.name }}</h5>

            <p class="card-text">{{ singleCardData.race }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use "../sass/partials/variables" as *;

    .card {
        border: 0;
        background-color: $main_bg_color;
        height: 100%;
        border-radius: 0;
    }

    .card-body {
        text-align: center;

        .card-title {
            text-transform: uppercase;
            font-weight: bold;
            color: white;
        }
    }
</style>