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
            :save="save"
            :remove="remove"
            class="task"
            >
          </cado>
          <template v-slot:controller>
            <v-btn
              block
              color="light-green"
              @click="create"
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
import { Task, getEmptyTask } from './task'

export default Vue.extend({
  name: 'App',
  components: {
    Layout,
    Cado,
  },
  data () {
    const tasks: Task[] = []
    return {
      create: () => { tasks.push(getEmptyTask()) },
      save: () => { console.log('saved')},
      remove: (id: string) => 
      { 
        tasks.splice(tasks.findIndex((task) => task.id === id), 1) 
      },
      tasks 
    }
  }
  })

</script>
<style lang="scss">
.task {
  padding: 4px;
}
</style>
