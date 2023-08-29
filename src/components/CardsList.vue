<script>
    import Axios from "axios";
    import Card from "./Card.vue";

    export default {
        components: {
            Card
        },

        data() {
            return {
                cardsList: []
            }
        },

        methods: {
           fetchCards(searchUrl) {
            const url = searchUrl ?? "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0";

            Axios.get(url).then((response) => {
                this.cardsList = response.data.data;
            })
           } 
        },

        mounted() {
            this.fetchCards();
        }
    }
</script>

<template>
    <div class="container">
        <div class="row row-cols-5">
            <div class="col" v-for="cardData in cardsList" :key="cardData.id">
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