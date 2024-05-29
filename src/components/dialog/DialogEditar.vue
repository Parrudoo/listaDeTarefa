<template>
  <v-dialog v-model="localAbrir" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5">
        voçê tem certeza que deseja editar tarefa?
      </v-card-title>
      <!-- <v-card-text
        >Let Google help apps determine location. This means sending anonymous
        location data to Google, even when no apps are running.</v-card-text
      > -->
      <v-text-field
        style="padding: 12px"
        v-model="editTarefaComputed"
      ></v-text-field>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="closeDialog()">
          Cancelar
        </v-btn>
        <v-btn color="green darken-1" text @click="saveTask()">
          Concluir
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "MyDialog",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    tarefa: {
      type: [],
    },
  },
  data() {
    return {
      localAbrir: false,
      editTarefa: null,
      localTarefa: { ...this.tarefa },
    };
  },
  watch: {
    isOpen(value) {
      this.localAbrir = value;
    },
  },
  methods: {
    closeDialog() {
      this.localAbrir = false;
      this.$emit("update:isOpen", false);
    },
    saveTask() {
      this.$store.commit("editarTarefa", {
        id: this.localTarefa.id,
        titulo: this.editTarefa !== null ? this.editTarefa : this.tarefa.titulo,
      });
      this.localTarefa.titulo = this.editTarefa;
      this.$emit("update:tarefa", this.localTarefa);
      this.closeDialog();
    },
  },
  computed: {
    editTarefaComputed: {
      get() {
        return this.editTarefa !== null ? this.editTarefa : this.tarefa.titulo;
      },
      set(newValue) {
       this.$emit("update:tarefa", this.editTarefa = newValue);
      },
    },
  },
};
</script>
