import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// export const store = new Vuex.Store({
export default new Vuex.Store({
  state: {
    memos: [
      {
        id: 1,
        body: "サンプル"
      }
    ]
  }
})