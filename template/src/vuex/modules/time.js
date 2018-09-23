import awaitTo from 'async-await-error-handling'

import api from '../../network/api'
import * as CONSTANT from '../mutation-types'

const state = {
  curTime: Date.now()
}

const getters = {
  getCurTime () {
    return state.curTime
  }
}

const actions = {
  async changeTime ({ commit }, payload) {
    const [err, data] = await awaitTo(api.getIndex())
    console.log('changeTime', data)

    if (err) {
      commit({
        type: CONSTANT.CHANGE_TIME,
        res: null
      })
      return
    }

    commit({
      type: CONSTANT.CHANGE_TIME,
      res: Date.now()
    })
  }
}

const mutations = {
  [CONSTANT.CHANGE_TIME] (state, payload) {
    if (payload.res) {
      state.curTime = payload.res
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
