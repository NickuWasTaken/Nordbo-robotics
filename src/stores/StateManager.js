import { defineStore } from 'pinia';
import  axios  from 'axios';

export const StateManager = defineStore('savedStates', {
	state: () => ({
		currentPage: 1,
		currentView: 1,
        selectedCategory: 0,
		selectedCategoryName: 0,
        selectedParameters: [],
        suggestedSolution: [],
        selectedSolution: {}
	}),
	actions: {
		async fetchCategoryName() {
			let fetchKey = this.selectedCategory-1
            let response = await axios.get(
                'https://nordbo-6be70-default-rtdb.europe-west1.firebasedatabase.app/'+fetchKey+'.json'
            );
            this.selectedCategoryName = response.data.name;
        },
        async fetchRobotDataWithId(arrayId,id) {
			let response = await axios.get(
				'https://nordbo-robotter-default-rtdb.europe-west1.firebasedatabase.app/'+id+'.json'
			);
			this.suggestedSolution[arrayId] = response.data;
		},
    },
});