export const state = () => ({
    configs: [],
    mediaUrl: 'http://gatewaycms.tks.edu.vn/'
})

export const mutations = {
    STORE_CONFIG(state, configs) {
        state.configs = configs
    }
}

export const actions = {
    storeConfig({ commit }, configs) {
        commit('STORE_CONFIG', configs)
    },

    async getIP ({ commit }) {
        const configs = await this.$axios.$get('http://icanhazip.com')
        commit('STORE_CONFIG', configs)
    }
}

export const getters = {
    getConfigs(state) {
        return state.configs
    },

    getMediaUrl(state) {
        return state.mediaUrl
    }
}