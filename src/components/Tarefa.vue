<template>
  <v-list-item-group multiple active-class="">
    <v-list-item @click="updateTarefa">
      <template v-slot:default="{}">
        <v-list-item-action>
          <v-checkbox :input-value="fake.concluido"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <div  :class="{
              'text-decoration-line-through':fake.concluido,

            }">
          <v-list-item-title
           
            >{{ tarefa.titulo }}</v-list-item-title
          >
        </div>
        </v-list-item-content>
        
        <v-list-item-action>
          <v-btn icon
          @click.stop="removerTarefa(tarefa.id)">
            <v-icon color="red darken-4">mdi-mdi mdi-delete-empty</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
  </v-list-item-group>
</template>

<script>

export default {
  name: "TarefaPAge",
  props: ["tarefa"],
  data() {
    return {
      fake: { ...this.tarefa },     
    };
  },
  methods: {
    updateTarefa() {
      this.fake.concluido = !this.fake.concluido;
      console.log(this.fake.concluido)
    },
    removerTarefa(id){
      this.$store.commit('removeTarefa',id)

    }
  },
};
</script>

<style scoped>
</style>