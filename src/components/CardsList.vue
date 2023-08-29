<script>
    import Axios from "axios";
    import Card from "./Card.vue";
    import { store, fetchData} from "../store";
    import Filter from "./Filters.vue";

    export default {
        components: {
            Card,
            Filter
        },

        data() {
            return {
                store
            }
        },

        methods: {
        },

        mounted() {
            fetchData();
        }
    }
</script>

<template>
    <div class="container">
        <Filter></Filter>

        <div class="row row-cols-5">
            <div class="col" v-for="cardData in store.cardList" :key="cardData.id">
                <Card :singleCardData="cardData"></Card>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .container {
        background-color: white;
        padding: 3rem 2rem;
    }

    .col {
        margin-bottom: 1.5rem;
    }
</style>