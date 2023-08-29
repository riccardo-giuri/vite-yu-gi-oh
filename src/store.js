import { reactive } from "vue";
import Axios from "axios";

export const store = reactive({
    cardList: []
});

export function fetchData(searchUrl) {
    const url = searchUrl ?? "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0";

    Axios.get(url).then((response) => {
        store.cardList = response.data.data;
    })
}; 