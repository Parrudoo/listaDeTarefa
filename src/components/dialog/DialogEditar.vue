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
      <v-text-field style="padding: 12px" v-model="editTarefa"></v-text-field>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="closeDialog()">
          Cancelar
        </v-btn>
        <v-btn color="green darken-1" text @click="closeDialog()">
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
      localAbrir: this.isOpen,
      editTarefa: null,
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
  },
  computed(){
    // this.editTarefa = this.tarefa.titulo;
    this.$emit("update:editTarefa",this.tarefa.titulo)
    console.log(this.editTarefa)
  }
};
</script>
