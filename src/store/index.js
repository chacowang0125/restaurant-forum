import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from './../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentUser: {
            id: -1,
            name: '',
            email: '',
            image: '',
            isAdmin: false
        },
        isAuthenticated: false
    },
    //用來修改 state 的方法
    mutations: {
        setCurrentUser(state, currentUser) {
            state.currentUser = {
                ...state.currentUser,
                ...currentUser
            }
            state.isAuthenticated = true
        }
    },
    //透過API取得資料
    actions: {
        async fetchCurrentUser({ commit }) {
            try {
                const { data } = await usersAPI.getCurrentUser()
                const { id, name, email, image, isAdmin } = data
                commit('setCurrentUser', {
                    id,
                    name,
                    email,
                    image,
                    isAdmin
                })
            } catch (error) {
                console.error(error.message)
            }
        }
    },
    modules: {}
})