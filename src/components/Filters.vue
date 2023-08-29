<script>
    import { store, fetchData, fetchArchetypes } from "../store";

    export default {
        data() {
            return {
                store
            }
        },

        methods: {
            Test(testo) {
                console.log(testo)
            }
        },

        mounted() {
            fetchArchetypes("https://db.ygoprodeck.com/api/v7/archetypes.php");
        },

        watch: {
            "store.filtertext.singleArchetype": function (select) {
                if(select === "")
                {
                    fetchData();
                }
                else {
                    fetchData(`https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${select}`);
                }                
            }
        }
    };
</script>

<template>
    <select class="form-select" v-model="store.filtertext.singleArchetype" aria-label="select">
        <option value=""></option>
        <option v-for="archetype in store.archetypesList"> {{ archetype.archetype_name }}</option>
    </select>
</template>

<style lang="scss" scoped>
    @use "../sass/partials/variables" as *;

    select {
        width: 250px;
        margin-bottom: 2.5rem;
        border-color: $main_bg_color;
    }
</style>