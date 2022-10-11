const state = {
    //内部资料库列表
    innerLibList: [],
    //已经签到的外部资料库
    checkedOuterLib: null
}
const mutations = {
    SET_INNER_LIB_LIST: (state, innerLibList) => state.innerLibList = innerLibList,
    SET_CHECKED_OUTER_LIB: (state, checkedOuterLib) => state.checkedOuterLib = checkedOuterLib
}
const actions = {
    //拉取内部资料库列表数据
    fetchInnerLibList: ({ commit }) => {
        return new Promise((resovle, reject) => {
            let innerLibList = [{ libName: "某某变电站", libId: "dfasfdsfasfd" }, { libName: "某某变电站", libId: "dfasfdsfasfd" }, { libName: "某某变电站", libId: "dfasfdsfasfd" }];
            commit('SET_INNER_LIB_LIST', innerLibList);
            resovle(innerLibList);
        })
    },
    //拉取已经登录的外部资料库数据
    fethcCheckedOuterLib: ({ commit }) => {
        return new Promise((resovle, reject) => {
            let checkedOuterLib = { libName: "某某外部变电站", libId: "vadsfddfsd" };
            commit("SET_CHECKED_OUTER_LIB", checkedOuterLib);
            resovle(checkedOuterLib);
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}