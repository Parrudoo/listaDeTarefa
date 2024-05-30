<template>
  <v-dialog v-model="editIsOpen" persistent max-width="290">
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
        <v-btn color="green darken-1" text @click="closeModal">
          Cancelar
        </v-btn>
        <v-btn color="green darken-1" text @click="editarTarefa()">
          Concluir
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    tarefa: {
      type: [],
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      abrirModal: this.isOpen,
      tarefaNova:null
    };
  },
  watch: {
    isOpen(newValue) {
      this.abrirModal = newValue;
    },
    abrirModal(newValue) {
      this.$emit("update:isOpen", newValue);
    },
    editTarefa(newValue){
      this.$emit("update:tarefa", newValue)
    }
  },
  computed: {
    editIsOpen: {
      get() {
        return this.abrirModal;
      },
      set(value) {
        this.$emit("update:isOpen",  value);
      },
    },
    editTarefa:{
      get(){
        return this.tarefaNova !== null ? this.tarefaNova : this.tarefa.titulo;
      },
      set(value){
        this.$emit("update:tarefa",this.tarefaNova = value)
      }
    }
  },

  methods: {
    closeModal() {
      this.abrirModal = false;
    },
    editarTarefa() {
      this.$store.commit("editarTarefa", {
        id: this.tarefa.id ,
        titulo: this.editTarefa ,
      });
      this.closeModal()
    },
  },
};
</script>
