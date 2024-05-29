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
          @click="item.click()"
        >
          <v-icon left>{{ item.icon }}</v-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <DialogEditar v-if="items[0].modal" />
    <v-dialog></v-dialog>
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
    items: [
      {
        title: "Editar",
        icon: "mdi mdi-pencil",
        modal: false,
        click() {
          this.modal = true;
        },
      },

      {
        title: "Excluir",
        icon: "mdi mdi-trash-can",
        modal: false,
        click() {
          this.modal = true;
        },
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
  },
};
</script>