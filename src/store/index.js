
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas: [{ titulo: 'ir ao mercado', concluido: false }]
  },
  getters: {
  },
  mutations: {
    addTarefa(state, titulo) {
      if (titulo) {
        state.tarefas.push({
          id: new Date().getTime(),
          titulo
        });
      }
    },
    removeTarefa(state, id) {

      state.tarefas = state.tarefas.filter(tarefa => tarefa.id != id)
    }
  },
  actions: {
  },
  modules: {
  }
})
