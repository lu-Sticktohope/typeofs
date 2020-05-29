import Vue from 'vue'
import Vuex from 'vuex'
import homeModule from "./Home/index";
import cartModule from "./Cart/index";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    homeModule,
    cartModule
  }
})
