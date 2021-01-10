<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
    </v-app-bar>

    <v-main>
      <v-container>
        <layout>
          main shit
          <template v-slot:controller>
            <v-btn
              block
              color="teal"
            >
              <v-icon>mdi-plus</v-icon>
              Create
            </v-btn>
          </template>
        </layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Layout from './components/Layout.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Layout,
  },

  data: () => ({
    //
  }),
});
</script>
