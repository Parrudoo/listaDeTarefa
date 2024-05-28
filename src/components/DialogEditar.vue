<template>
  <v-dialog v-model="localAbrir" persistent max-width="290">
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
        <v-btn color="green darken-1" text @click="closeDialog()">
          Disagree
        </v-btn>
        <v-btn color="green darken-1" text @click="closeDialog()">
          Agree
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "MyDialog",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      localAbrir: this.isOpen,
    };
  },
  watch:{
    isOpen(value){
      this.localAbrir = value
    }

  },
  methods: {
    closeDialog() {
      this.localAbrir = false;
      this.$emit('update:isOpen', false)

    },
  },
};
</script>
