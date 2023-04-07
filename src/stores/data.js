import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

const categoriesData = ref(
	'https://nordbo-6be70-default-rtdb.europe-west1.firebasedatabase.app/'
);

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

// export const useCounterStore = defineStore('counter', {
//     state: () => {
//         return { count: 0 }
//     },
//      could also be defined as
//      state: () => ({ count: 0 })
//     actions: {
//         increment() {
//             this.count++
//         },
//     },
// })
