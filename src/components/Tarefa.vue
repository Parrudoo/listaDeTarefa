<template>
  <div>
    <v-list-item-group multiple active-class="">
      <v-list-item @click="updateTarefa">
        <template v-slot:default="{}">
          <v-list-item-action>
            <v-checkbox :input-value="fake.concluido"></v-checkbox>
          </v-list-item-action>

          <v-list-item-content>
            <div
              :class="{
                'text-decoration-line-through': fake.concluido,
              }"
            >
              <v-list-item-title>{{ tarefa.titulo }}</v-list-item-title>
            </div>
          </v-list-item-content>

          <v-list-item-action>
            <!-- @click.stop="removerTarefa(tarefa.id)" -->
            <v-btn icon  @click="dialog = true">             
                <v-icon>mdi-dots-vertical</v-icon>  
              </v-btn>
            </v-list-item-action>          
            <DialogEditar :isOpen.sync="dialog"/> 
        </template>
      </v-list-item>
    </v-list-item-group>
  </div>
</template>

<script>
import DialogEditar from './DialogEditar.vue';

export default {
  components: { DialogEditar },
    name: "TarefaPAge",
    
    props: ["tarefa"],
    data() {
        return {
          dialog:false,
            fake: { ...this.tarefa },
        };
    },
    methods: {
        updateTarefa() {
            this.fake.concluido = !this.fake.concluido;
            console.log(this.fake.concluido);
        },
        removerTarefa(id) {
            this.$store.commit("removeTarefa", id);
        },

        abrirDialog(){
          this.dialog = true;
          // console.log(this.dialog)
        }
    },
  
};
</script>

<style scoped>
</style>