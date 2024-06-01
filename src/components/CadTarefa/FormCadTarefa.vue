<template>
  <form class="pa-4">
    <v-text-field
      v-model="nome"
      :counter="10"
      label="Titulo"
      required
    ></v-text-field>
    <v-text-field v-model="descricao" label="Descrição" required></v-text-field>
    <v-select v-model="select" :items="items" label="Item" required></v-select>
    <v-checkbox v-model="checkbox" label="Você concorda?" required></v-checkbox>

    <v-btn class="mr-4" @click="submit">Enviar</v-btn>
    <v-btn @click="clear">Limpar</v-btn>
  </form>
</template>
  <script>
import axios from "axios";
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    nome: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    nome: "",
    descricao: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    tarefa: [],
    checkbox: false,
  }),

  methods: {
    submit() {
      axios
        .post("http://localhost:8081/tarefa/salvar", {
          titulo: this.nome,
          descricao:this.descricao,          
        })
        .then((resp) => {console.log(resp)});
        this.clear()
    },
    clear() {
      this.nome = "";
      this.descricao = "";
      this.select = null;
      this.checkbox = false;
    },
  },
};
</script>
<style scoped>
</style>