import { createStore } from "vuex";
import getters from "./getters.js";
import home from "./modules/home.js";
import lib from "./modules/lib.js"
const store = createStore({
    modules: {
        home,
        lib
    },
    getters
})
export default store