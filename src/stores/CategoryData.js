import { defineStore } from 'pinia';
import axios from 'axios';

export const categoryStore = defineStore('category', {
	state: () => ({
		dataObj: {},
	}),
	actions: {
		async fetchCategoryData() {
			let response = await axios.get(
				'https://nordbo-6be70-default-rtdb.europe-west1.firebasedatabase.app/.json'
			);
			this.dataObj = response.data;
		},
	},
	persist: true,
});