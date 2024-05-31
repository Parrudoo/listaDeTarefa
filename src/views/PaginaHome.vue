<template>
  <div>
    <v-col cols="12" sm="6" md="3">
      <v-text-field
        v-model="campoInput"
        label="Inserir Tarefa"
        @keyup.enter="addTarefa()"
      ></v-text-field>
    </v-col>
    <v-list flat subheader>
      <v-subheader>Lista de tarefas</v-subheader>
      <div v-for="(tarefa, index) in tarefas" :key="index">
        <Tarefa :tarefa="tarefa" />
      </div>
    </v-list>
  </div>
</template>


<script>
import Tarefa from "@/components/Tarefa.vue";
import axios from "axios";

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
      // this.$store.commit("addTarefa", this.campoInput);
      // this.campoInput = null;
      axios
        .post("http://localhost:8081/tarefa/salvar", {
          titulo: this.campoInput,
        })
        .then((resp) => {
          console.log(resp);
        });
    },
    getTarefa() {
      axios.get("http://localhost:8081/tarefa/listar").then((resp) => {
        this.tarefas = resp.data;
      });
    },
  },
};
Tarefa;
</script>

<style scoped>
</style>