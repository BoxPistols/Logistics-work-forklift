import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  msg: 'hello Store state',
  val: 2,
}

const store = new Vuex.Store({
  state: {
    memos: [
      {
        id: 1,
        memoBody: 'xxxxxxxxxxx',
      },
    ],
  },
  mutations: {
    saveMemo(state, val) {
      const addId = state.memos[state.memos.length - 1].id
      //const addId = state.memos.length
      val.id = addId + 1
      state.memos.push(val)
    },
  },
})

export default store
