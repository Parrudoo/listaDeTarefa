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
          @click="isOpen = true"
        >
          <v-icon left>{{ item.icon }}</v-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <DialogEditar :isOpen.sync="isOpen" />
  </div>
</template>
<script>
import DialogEditar from "./DialogEditar.vue";
export default {
  components: { DialogEditar },
  data: () => ({
    isOpen: false,
    items: [
      {
        title: "Editar",
        icon: "mdi mdi-pencil",
      },

      {
        title: "Excluir",
        icon: "mdi mdi-trash-can",
      },
    ],
  }),
 
};
</script>