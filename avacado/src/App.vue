<template>
  <v-app>
    <v-app-bar
      app
      color="teal"
    >
      <div class="d-flex align-center">
        <v-img
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="40"
        />
      </div>
    </v-app-bar>

    <v-main>
      <v-container>
        <layout>
          <cado 
            v-for="task in tasks" 
            :key="task.id" 
            :task="task"
            class="task"
            >
          </cado>
          <template v-slot:controller>
            <v-btn
              block
              color="light-green"
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
import Vue from 'vue'
import { Layout, Cado}  from './components/index'
import { getEmptyTask } from './task'


export default Vue.extend({
  name: 'App',
  components: {
    Layout,
    Cado,
  },
  data: () => ({
    tasks: [{
      ...getEmptyTask(),
      id: '1',
      title: 'the first iten',
      dueDate: '2021-06-02',
      description: 'this is my first item',
    },
    {
      ...getEmptyTask(),
      id: '2',
      title: 'the second iten',
      dueDate: '2021-06-02',
      description: 'this is my second item',
    },
    {
      ...getEmptyTask(),
      id: '1',
      title: 'the first iten',
      dueDate: '2021-06-02',
      description: 'this is my first item',
    },
    {
      ...getEmptyTask(),
      id: '2',
      title: 'the second iten',
      dueDate: '2021-06-02',
      description: 'this is my second item',
    }
    ]    
  }),
});
</script>
<style lang="scss">
.task {
  padding: 4px;
}
</style>
