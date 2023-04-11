import { defineStore } from 'pinia';

export const StateManager = defineStore('StateManager', {
	state: () => ({
		currentPage: 1,
        selectedCategory: 1,
        selectedParameters: [],
        selectedSolution: {}
	}),
	actions: {
		
	},
	persist: true,
});