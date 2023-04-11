import { defineStore } from 'pinia';
import axios from 'axios';

export const robotStore = defineStore('robot', {
	state: () => ({
		dataObj: {},
	}),
	actions: {
		async fetchCategoryData() {
			let response = await axios.get(
				'https://nordbo-parameter-default-rtdb.europe-west1.firebasedatabase.app/.json'
			);
			this.dataObj = response.data;
		},
	},
	persist: true,
});