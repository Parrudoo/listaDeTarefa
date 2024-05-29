
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas: []
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
    },
    editarTarefa(state, { id, titulo }) {
      const task = state.tarefas.find(t => t.id === id);
      if (task) {
        task.titulo = titulo;
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
