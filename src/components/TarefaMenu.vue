<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on" icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="abrirDialog(item.type)"
        >
          <v-icon left>{{ item.icon }}</v-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <DialogEditar :isOpen.sync="isOpen" :tarefa="tarefa" />

    <!-- modal excluir -->

    <v-dialog v-model="isOpenExcluir" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5">
          Use Google's location service?
        </v-card-title>
        <v-card-text
          >Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="isOpenExcluir = false">
            Cancelar
          </v-btn>
          <v-btn color="green darken-1" text @click="excluirTarefa()">
            Excluir
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- modal excluir -->
  </div>
</template>
<script>
import DialogEditar from "./dialog/DialogEditar.vue";
export default {
  components: { DialogEditar },

  props: {
    tarefa: {
      type: [],
    },
  },

  data: () => ({
    isOpen: false,
    isOpenExcluir: false,
    items: [
      {
        title: "Editar",
        icon: "mdi mdi-pencil",
        modal: false,
        type: "edit",
      },

      {
        title: "Excluir",
        icon: "mdi mdi-trash-can",
        modal: false,
        type: "delete",
      },
    ],
  }),
  methods: {
    abrirDialog(type) {
      if (type === "edit") {
        this.isOpen = true;
        console.log(this.isOpen);
      } else if (type === "delete") {
        this.isOpenExcluir = true;
      }
    },
    excluirTarefa(){
      this.$store.commit("removeTarefa", this.tarefa.id)
      this.isOpenExcluir = false
    }
  },
};
</script>