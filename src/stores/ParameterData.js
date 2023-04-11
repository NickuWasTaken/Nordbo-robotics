import { defineStore } from 'pinia';
import axios from 'axios';

export const ParameterStore = defineStore('parameter', {
    state: () => ({
        dataObj: {},
    }),
    actions: {
        async fetchParameterData() {
            let response = await axios.get(
                'https://nordbo-parameter-default-rtdb.europe-west1.firebasedatabase.app/.json'
            );
            this.dataObj = response.data;
        },
    },
    persist: true,
});