import { defineStore } from 'pinia';
import axios from 'axios';

export const RobotStore = defineStore('robot', {
	state: () => ({
		dataObj: {},
	}),
	actions: {
		async fetchRobotData() {
			let response = await axios.get(
				'https://nordbo-robotter-default-rtdb.europe-west1.firebasedatabase.app/.json'
			);
			this.dataObj = response.data;
		},
		
	},
	persist: true,
});