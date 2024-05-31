<template>
  <div>
    <v-toolbar color="light-blue" dark flat>
      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title>
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab v-for="item in items" :key="item.titulo">
            {{ item.titulo }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.titulo">
        <v-card flat>
          <v-list flat subheader>
            <v-subheader>{{ item.titulo }}</v-subheader>
            <div v-for="(tarefa, index) in tarefas" :key="index">
              <Tarefa :tarefa="tarefa" />
            </div>
            <component :is="item.component"/>
          </v-list>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>


<script>
import Tarefa from "@/components/Tarefa.vue";
import axios from "axios";
import FormCadTarefaVue from "@/components/CadTarefa/FormCadTarefa.vue";

export default {
  name: "PageHome",
  components: {
    Tarefa,
  },
  data: () => ({
    campoInput: null,
    tarefas: [],
    tab: null,
    items: [
      { titulo: "Cadastro de Tarefa", component: FormCadTarefaVue },
      { titulo: "teste", component: null },
    ],
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