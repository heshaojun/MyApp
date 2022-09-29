import { createStore } from "vuex";
import getters from "./getters.js";
import home from "./modules/home.js";
import work from "./modules/work.js";
const store = createStore({
    modules: {
        home,
        work
    },
    getters
})
export default store