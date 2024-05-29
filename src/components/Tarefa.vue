<template>
  <div>
    <v-list-item-group multiple active-class="">
      <v-list-item @click="updateTarefa">
        <template v-slot:default="{}">
          <v-list-item-action>
            <v-checkbox :input-value="fake.concluido"></v-checkbox>
          </v-list-item-action>

          <v-list-item-content>
            <div
              :class="{
                'text-decoration-line-through': fake.concluido,
              }"
            >
              <v-list-item-title>{{ tarefa.titulo }}</v-list-item-title>
            </div>
          </v-list-item-content>

          <v-list-item-action>
            <TarefaMenu :tarefa="tarefa" />
          </v-list-item-action>
        </template>
      </v-list-item>
    </v-list-item-group>
  </div>
</template>

<script>
import TarefaMenu from "./TarefaMenu.vue";

export default {
  components: { TarefaMenu },
  name: "TarefaPAge",
  

  props: ["tarefa"],
  data() {
    return {
      dialog: false,
      fake: { ...this.tarefa },
    };
  },
  items: [
    { title: "Editar", icon: "mdi-dots-vertical" },
    { title: "Excluir", icon: "mdi-dots-vertical" },
  ],
  methods: {
    updateTarefa() {
      this.fake.concluido = !this.fake.concluido;
    },
    removerTarefa(id) {
      this.$store.commit("removeTarefa", id);
    },
  },
};
</script>

<style scoped>
</style>