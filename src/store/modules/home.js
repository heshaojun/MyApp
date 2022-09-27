import swipe1 from "@/assets/imgs/swipe1.jpg";
import swipe2 from "@/assets/imgs/swipe2.jpg";
import swipe3 from "@/assets/imgs/swipe3.jpg";
//首页数据
const state = {
    //首页图片数据
    swipeList: [],
    //工作列表数据
    workList: [],
    //新闻列表数据
    newsList: [],
    //审批列表数据
    approveList: [],
    //定位信息
    locationInfo: {state: "notCheckIn"},
    //未读消息条数
    unreadMsgNum: 0
}

const mutations = {
    SET_SWIPE_LIST: (state, swipeList) => state.swipeList = swipeList,
    SET_WORK_LIST: (state, workList) => state.workList = workList,
    SET_NEWS_LIST: (state, newsList) => state.newsList = newsList,
    SET_APPROVE_LIST: (state, approveList) => state.approveList = approveList,
    SET_LOCATION_INFO: (state, locationInfo) => state.locationInfo = locationInfo,
    SET_UNREAD_MSG_NUM: (state, unreadMsgNum) => state.unreadMsgNum = unreadMsgNum,
}

const actions = {
    //获取图片首页数据
    fetchSwipeList: ({commit}) => {
        commit("SET_SWIPE_LIST", [swipe1, swipe2, swipe3]);
    },
    //获取最新工作信息列表
    fetchWorkList: ({commit}) => {
        commit("SET_WORK_LIST", [{title: "某某变电站检修", state: "正在执行", color: "red"}, {
            title: "某某变电站检修",
            state: "等待验收",
            color: "red"
        }]);
    },
    //获取首页新闻列表
    fetchNewsList: ({commit}) => {
        commit("SET_NEWS_LIST", [{title: "新闻标题", imgs: ["照片1"], source: "电网头条", publisTime: "发布时间"}, {
            title: "新闻标题",
            imgs: ["照片1", "照片2", "照片3"],
            source: "电网头条",
            publisTime: "发布时间"
        }, {title: "新闻标题", imgs: [], source: "电网头条", publisTime: "发布时间"}])
    },
    //获取审批信息列表
    fetchApproveList: ({commit}) => {
        commit("SET_APPROVE_LIST", [{title: "某某变电站检修", state: "正在执行", color: "red"}, {
            title: "某某变电站检修",
            state: "等待验收",
            color: "red"
        }]);
    },
    //获取用户定位信息
    fetchLocationInfo: ({commit}) => {
        commit("SET_LOCATION_INFO", {location: "xx变电站", state: "outside"})
    },
    //获取未读消息个数
    fetchUnreadMsgNum:({commit})=>{
      commit("SET_UNREAD_MSG_NUM",1)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
