<template>
  <v-dialog v-model="localAbrir" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5">
        voçê tem certeza que deseja excluir a tarefa?
      </v-card-title>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="closeDialog()">
          Cancelar
        </v-btn>
        <v-btn color="green darken-1" text @click="removerTarefa(localAbrir.id)">
          Excluir
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
  
  <script>
export default {
  props: {
    isOpenExcluir: {
      type: Boolean,
      required: true,
    },
    tarefa: {
      type: [],
    },
  },
  data() {
    return {
      localAbrir: this.isOpenExcluir,
    };
  },
  watch: {
    isOpenExcluir(value) {
      this.localAbrir = value;
    },
  },

  methods: {
    closeDialog() {
      this.localAbrir = false;
      this.$emit("update:isOpenExcluir", false);
    },
    removerTarefa() {
      this.$store.commit("removeTarefa", this.tarefa.id);
      console.log(this.tarefa)

      
    },
  },
};
</script>
  