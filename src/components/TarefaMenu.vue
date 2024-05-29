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
    <DialogExcluir :isOpenExcluir.sync="isOpenExcluir" :tarefa="tarefa" />
  </div>
</template>
<script>
import DialogEditar from "./dialog/DialogEditar.vue";
import DialogExcluir from "./dialog/DialogExcluir.vue";
export default {
  components: { DialogEditar, DialogExcluir },

  props:{
    tarefa:{
      type:[],
    
    }
    
  },

  data: () => ({
    isOpen: false,
    isOpenExcluir: false,
    items: [
      {
        title: "Editar",
        icon: "mdi mdi-pencil",
        type: "edit",
      },

      {
        title: "Excluir",
        icon: "mdi mdi-trash-can",
        type: "delete",
      },
    ],
  }),
  methods: {
    abrirDialog(type) {
      if (type === "edit") {
        this.isOpen = true;        
      } else if (type === "delete") {
        this.isOpenExcluir = true;
      }
    }, 
   
  },
};
</script>