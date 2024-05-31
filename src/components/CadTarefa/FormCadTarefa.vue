<template>
  <form class="pa-4">
    <v-text-field
      v-model="nome"
      :counter="10"
      label="Titulo"
      required     
    ></v-text-field>
    <v-text-field
      v-model="email"     
      label="Descrição"
      required      
    ></v-text-field>
    <v-select
      v-model="select"
      :items="items"    
      label="Item"
      required     
    ></v-select>
    <v-checkbox
      v-model="checkbox"     
      label="Do you agree?"
      required         
    ></v-checkbox>

    <v-btn class="mr-4" @click="submit">Enviar</v-btn>
    <v-btn @click="clear">Limpar</v-btn>
  </form>
</template>
  <script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      nome: { required, maxLength: maxLength(10) },
      email: { required, email },
      select: { required },
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    data: () => ({
      nome: '',
      email: '',
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      tarefa:[],
      checkbox: false,
    }),
  

    methods: {
      submit () {
      this.$store.commit('addTarefa',this.nome)
      console.log($store.state.tarefas)
      },
      clear () {       
        this.nome = ''
        this.email = ''
        this.select = null
        this.checkbox = false
      },
    },
  }
</script>
<style scoped>
</style>