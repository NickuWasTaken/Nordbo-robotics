import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const categoriesData = ref("https://nordbo-6be70-default-rtdb.europe-west1.firebasedatabase.app/")


export const categoryStore = defineStore('category', {
    state: async () => ({
        dataObj: [],
    }),
    actions: {        
      async fetchUsers() {
            const data = await axios.get('https://nordbo-6be70-default-rtdb.europe-west1.firebasedatabase.app/.json')
            this.dataObj = data.data
            //console.log(this.dataObj)
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