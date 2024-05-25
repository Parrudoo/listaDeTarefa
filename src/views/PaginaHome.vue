<template>
  <div>
    <v-col cols="12" sm="6" md="3">
      <v-text-field v-model="campoInput"
        label="Inserir Tarefa"
        @keyup.enter="addTarefa"
      ></v-text-field>
    </v-col>
    <v-list flat subheader>
      <v-subheader>Lista de tarefas</v-subheader>
      <div v-for="(tarefa, index) in $store.state.tarefas" :key="index">
        <Tarefa :tarefa="tarefa" />
      </div>
    </v-list>
  </div>
</template>


<script>
import Tarefa from "@/components/Tarefa.vue";

export default {
  name: "PageHome",
  components: {
    Tarefa,
  },
  data: () => ({
    campoInput: null,
    tarefas: [],
  }),
  methods: {
    addTarefa() {
    this.$store.commit('addTarefa',this.campoInput)
    }
  }
};
Tarefa;
</script>

<style scoped>
</style>