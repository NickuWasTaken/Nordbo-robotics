<script setup>
import { reactive, ref, computed } from 'vue';
import SuggestionCard from '@/components/cards/SuggestionCard.vue';
import HeadlineHeader from '@/components/UI/HeadlineHeader.vue';
import StepByStep from '@/components/UI/StepByStep.vue';
import { RobotStore } from '@/stores/RobotData.js';
import { StateManager } from '@/stores/StateManager.js';

const SavedStates = StateManager();
window.scrollTo(0, 0);

// set progres for back button
SavedStates.$patch({
	currentView: 3,
});

// saves data in variable
const robotStore = RobotStore();
// get data from firebase, save data to pinia
await robotStore.fetchRobotData();
// save pinia data to variable
var productData = reactive(robotStore.dataObj);

// reset suggestion data
let SuggestionArrayData = [];
// send suggestions in pinia
const pushSuggestionToPiniaArray = (productId) => {
	const ObjData = productId;
	SuggestionArrayData.push(ObjData);
	// send data from component to pinia store
	SavedStates.$patch({
		suggestedSolution: SuggestionArrayData,
	});
};

const selectedFeatures = SavedStates.selectedParameters.filter(item => item.feature != null).length;

//Loops through Robots
for (let i = 0; i < productData.length; i++) {
	let fitsRobot = 0;
	//Loops through Robots.features
	for (let n = 0; n < productData[i].features.length; n++) {
		//Loops through Pinia saved parameters
		for (let t = 0; t < SavedStates.selectedParameters.length; t++) {
			if (SavedStates.selectedParameters[t] == undefined) {
				continue;
			}
			if (
				productData[i].features[n].feature ===
					SavedStates.selectedParameters[t].feature &&
				productData[i].features[n].parameter ===
					SavedStates.selectedParameters[t].parameter
			) {
				fitsRobot++;
			}
		}
	}
	// checks if all parameters fit, then check if category fit
	if (fitsRobot === selectedFeatures) {
		for (let n = 0; n < productData[i].category.length; n++) {
			if (SavedStates.selectedCategory === productData[i].category[n]) {
				pushSuggestionToPiniaArray(productData[i].id);
			}
		}
	}
}

// for every suggested solution, replace solution entry with database entry
for (let i = 0; i < SavedStates.suggestedSolution.length; i++) {
	SavedStates.fetchRobotDataWithId(i, SavedStates.suggestedSolution[i] - 1);
}
const suggestedProducts = SavedStates.suggestedSolution;

// search function
const search = ref('');
const searchFunction = computed(() => {
	return productData.filter((item) => {
		return item.name.toLowerCase().includes(search.value);
	});
});

console.log(SavedStates.selectedParameters);
console.log(suggestedProducts);
</script>

<template>
	<StepByStep :progress="SavedStates.currentPage" />
	<HeadlineHeader>Suggestions</HeadlineHeader>
	<div class="wrapper">
		<div class="suggestion-wrapper" v-if="!search">
			<p class="no-results" v-if="suggestedProducts.length == 0 && !search">
				Sorry... <br />
				It seems none of our products satisfy the client's needs, we are
				therefore unable to suggest a solution. If you believe this to be an
				error, restart the application progress
			</p>

			<SuggestionCard
				v-for="suggestedProduct in suggestedProducts"
				:product-data="suggestedProduct"
				:key="suggestedProduct.id"
			/>
		</div>
		<div class="search-wrapper" v-if="search">
			<SuggestionCard
				v-for="product in searchFunction"
				:product-data="product"
				:key="product.id"
			/>
		</div>
	</div>
	<p>End of results.</p>
	<p>
		If none of the results satisfy the client need, try a new search or restart
		the application tool process.
	</p>
	<div class="container">
		<div class="searchbar">
			<div class="search-icon"></div>
			<input
				v-model="search"
				type="text"
				id="robots"
				name="search"
				placeholder="Search..."
				maxlength="15"
			/>
		</div>
		<RouterLink to="/" @click="SavedStates.$reset()">
			<button>
				<a>Start over</a>
				<div class="return-icon"></div>
			</button>
		</RouterLink>
	</div>
</template>

<style lang="scss" scoped>
.wrapper {
	width: 1280px;
	margin: 0 auto;
	display: flex;
	gap: 20px;
	flex-wrap: wrap;
	justify-content: center;
	padding-bottom: 100px;

	.no-results {
		margin-top: 20px;
		text-align: center;
		width: 400px;
		overflow-wrap: break-word;
	}
	.no-results::first-line {
		font-size: 20px;
		font-weight: 600;
	}

	.search-wrapper,
	.suggestion-wrapper {
		width: inherit;
		display: flex;
		justify-content: space-around;
	}
}

p {
	text-align: center;
}

button {
	display: flex;
	border: none;
	gap: 13px;
	padding: 16px 40px;
	height: 56px;
	width: 190px;
	background: var(--nr-brand-bluemana-500);
	border-radius: 77px;
	font-family: var(--nr-font-default);
	font-size: 18px;
	line-height: 24px;

	.return-icon {
		width: 19px;
		height: 19px;
		background: url('@/assets/icons/black-return.png');
		background-size: contain;
		background-repeat: no-repeat;
		margin: auto 0;
	}
}

.container {
	display: flex;
	gap: 16px;
	justify-content: center;
	margin-bottom: 100px;

	.searchbar {
		display: flex;
		border: none;
		padding: 16px 32px;
		gap: 25px;
		width: 460px;
		height: 56px;
		background: var(--nr-grey-soft);
		border-radius: 200px;

		input {
			border: none;
			background: #f5f5f5;
			font-family: var(--nr-font-default);
			font-size: 18px;
			color: #8e98a8;
			outline: 0;
			width: 420px;
		}

		.search-icon {
			width: 19px;
			height: 19px;
			background-image: url('@/assets/icons/magnifying-glass.png');
			background-size: contain;
			background-repeat: no-repeat;
			margin: auto;
		}
	}
}
</style>
