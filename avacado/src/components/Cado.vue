<template>
  <div>
    <v-card
    outlined
    shaped
    elevation="10"
    >
      <v-card-title>         
        <v-text-field
            v-model="task.title"
            label="Title"
            :readonly="!editable"
          />
      </v-card-title>
      <v-card-subtitle>   
          <v-text-field
            v-model="task.dueDate"
            label="Done by"
            :readonly="!editable"
          />
      </v-card-subtitle>
      <v-card-text>
        <v-textarea
          label="Description"
          auto-grow
          v-model="task.description"
          :readonly="!editable"
        /> 
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="error"
          fab
          small
          v-if="editable"
        >
          <v-icon dark>mdi-delete</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="cyan"
          fab
          small
          @click="() => editable = true"
          v-if="!editable"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn
          color="green"
          fab
          small
          @click="() => editable = false"
          v-if="editable"
        >
          <v-icon>mdi-content-save</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Task } from '../task'
export default Vue.extend({
  name: "Cado",
  props: {
    task: { type: Object as () => Task, required: true }
  },
  data() { 
    return { 
      editable: false,
    }
  }
  
})
</script>