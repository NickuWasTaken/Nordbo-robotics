import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const categoriesData = ref("https://nordbo-6be70-default-rtdb.europe-west1.firebasedatabase.app/")


export const categoryStore = defineStore('category', {
    state: () => {
        return {
            dataObj: ['hah']
        }
    },
    actions: {
        getData() {
            fetch("https://nordbo-6be70-default-rtdb.europe-west1.firebasedatabase.app" + '/' + '.json')
                .then(response => response.json())
                .then(response => dataObj.push(response));
            //console.log(dataObj)

        }
    }
})

// export const useCounterStore = defineStore('counter', {
//     state: () => {
//         return { count: 0 }
//     },
//     // could also be defined as
//     // state: () => ({ count: 0 })
//     actions: {
//         increment() {
//             this.count++
//         },
//     },
// })