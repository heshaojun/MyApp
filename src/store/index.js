import { createStore } from "vuex"
import getters from "./getters.js"
import home from "./modules/home.js"
const store = createStore({
    modules: {
        home
    },
    getters
})
export default store