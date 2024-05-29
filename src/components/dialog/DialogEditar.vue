<template>
  <v-dialog v-model="modal" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5">
        voçê tem certeza que deseja editar tarefa?
      </v-card-title>
      <!-- <v-card-text
        >Let Google help apps determine location. This means sending anonymous
        location data to Google, even when no apps are running.</v-card-text
      > -->
      <v-text-field style="padding: 12px" label="digite aqui"></v-text-field>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="modal = false">
          Cancelar
        </v-btn>
        <v-btn color="green darken-1" text @click="modal = false">
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
    tarefa: {
      type: [],
    },
  },

  data() {
    return {
      modal: true,
    };
  },
};
</script>
