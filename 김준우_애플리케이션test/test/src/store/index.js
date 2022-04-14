import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    board: [
      { id: 1,  title: "첫번째 제목", count: 0 , },
      { id: 2,  title: "두번째 제목", count: 0 , },
    ],
    memos : [
      { id:1, memo: "첫번째 메모입니다"},
      { id:2, memo: "두번째 메모입니다"},
    ]

  },
  getters: {},
  mutations: {
    addtitle: function (state, title) {
      const id = state.board.length + 1;
      let count = 0;
      state.board.push({ id: id, title:title, count:count});
    },
    addmemo: function(state, memo){
      const id = state.memos.length + 1;
      state.memos.push({ id:id, memo:memo });
    },

    addcount: function(state){
      state.board.count++;
    }
  },
  actions: {
    addcount : function(context){
      context.commit('addcount')
    }
  },
});