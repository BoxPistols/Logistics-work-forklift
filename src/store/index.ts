import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// export const store = new Vuex.Store({
export default new Vuex.Store({
  // 状態
  state: {
    // オブジェクト配列
    memos: [
      {
        id: 1,
        body: "サンプル"
      }
    ]
  },
  mutations: { // ハンドラー
    save(state, memo) {// 関数（状態、値）
      // 新しいidに割り振る
      const max = state.memos[state.memos.length - 1].id;
      memo.id = max;

      state.memos.push(memo)// 状態 配列 追加
    }
  }
})