import { defineStore } from 'pinia';
import axios from 'axios';

export const StateManager = defineStore('StateManager', {
	state: () => ({
		currentPage: 1,
	}),
	actions: {
		
	},
	persist: true,
});