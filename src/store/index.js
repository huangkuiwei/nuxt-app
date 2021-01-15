export const state = () => ({
  userInfo: {},
})

export const getters = {}

export const mutations = {
  _setUserInfo(state, payload) {
    state.userInfo = payload
  },
}

export const actions = {
  nuxtServerInit({ dispatch }) {
    return dispatch('_getUserInfo')
  },

  _getUserInfo({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: 'hello world' })
      }, 5000)
    }).then((res) => {
      commit('_setUserInfo', res)
    })
  },
}
