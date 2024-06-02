<template>
  <v-data-table
    :headers="headers"
    :items="tarefas"
    sort-by="descricao"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>My CRUD</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <!-- dialog -->
        <v-dialog v-model="dialog" max-width="500px">
          <!-- O activator é usado para fornecer um gatilho para execução de um componente como um botão ou link -->
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              Nova tarefa
            </v-btn>
            <v-btn color="primary" dark class="mb-2 mr-2" @click="initialize">
              Consultar
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.titulo"
                      label="Dessert name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.descricao"
                      label="Calories"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Tem certeza de que deseja excluir este item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <!-- Disable the rule for the next line -->
    <!-- eslint-disable-next-line vue/valid-v-slot -->
    <template v-slot:item.acao="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <!-- <v-btn color="primary" @click="initialize"> Reset </v-btn> -->
    </template>
  </v-data-table>
</template>
  <script>
import axios from "axios";
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Titulo",
        align: "start",
        sortable: false,
        value: "titulo",
      },
      { text: "Descricao", value: "descricao" },
      { text: "Ação", value: "acao", sortable: false },
    ],

    tarefas: [],
   

    editedIndex: -1,
    editedItem: {
      id: "",
      titulo: "",
      descricao: "",
    },
    defaultTarefa: {
      id: "",
      titulo: "",
      descricao: "",
    },
  }),
 
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nova tarefa" : "Editar tarefa";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      axios.get("http://localhost:8081/tarefa/listar").then((resp) => {
        this.tarefas = resp.data;
      });
    },

    editItem(item) {
      this.editedIndex = this.tarefas.indexOf(item);
      // cria uma copia ou um clone de um objeto java script
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.tarefas.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.tarefas.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
       axios
          .put(
            `http://localhost:8081/tarefa/atualizar/${
              this.tarefas[this.editedIndex].id
            }`,
            this.editedItem,
            {
              config: {
                "Content-Type":"application/json",
              },
            }
          )
          .then((resp) => {
            this.initialize()
          });
      } else {
        axios.put('http://localhost:8081/tarefa/salvar',this.editItem,{
          config:{
            "Content-Type":"application/json",
          }
        }).then(resp =>{
          this.initialize()
        })
      }    
      
      this.close();
    },
  },
};
</script>