const state = {
    //我创建的工作数据列表
    createByMe: { page: 1, pageSize: 10, list: [] },
    //我处理的工作
    handleByMe: { page: 1, pageSize: 10, list: [] },
    //我验收的工作
    checkByMe: { page: 1, pageSize: 10, list: [] },
}
const mutations = {
    SET_CREATE_BY_ME: (state, createByMe) => state.createByMe = createByMe,
    SET_HANDLE_BY_ME: (state, handleByMe) => state.handleByMe = handleByMe,
    SET_CHECK_BY_ME: (state, checkByMe) => state.checkByMe = checkByMe
}
const actions = {
    fetchWorkListCreateByMe: ({ commit, state }) => {
        commit("SET_CREATE_BY_ME", { ...state.createByMe })
    },
    fetchWorkListHandleByMe: ({ commit, state }) => {
        commit("SET_HANDLE_BY_ME", { ...state.handleByMe })
    },
    fetchWorkListCheckByMe: ({ commit, state }) => {
        commit("SET_CHECK_BY_ME", { ...state.checkByMe })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}