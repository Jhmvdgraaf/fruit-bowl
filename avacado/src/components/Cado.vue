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
            v-if="editable"
          />       
        <strong 
          v-else>
          {{ task.title }}
        </strong>
      </v-card-title>
      <v-card-subtitle>   
          <v-text-field
            v-model="task.dueDate"
            label="Done by"
            v-if="editable"
          />
          <span
            v-else>
            Due-Date: {{ task.dueDate }}
          </span>
      </v-card-subtitle>
      <v-card-text>
        <v-textarea
          label="Description"
          auto-grow
          v-model="task.description"
          v-if="editable"
        /> 
        <div v-else>
          <p>{{ task.description }}</p>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="error"
          fab
          small
          v-if="editable"
          @click="remove(task.id)"
        >
          <v-icon>mdi-delete</v-icon>
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
          @click="() => { editable = false; save() }"
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
    task: { type: Object as () => Task, required: true },
    save: { type: Function, required: true },
    remove: { type: Function, required: true },
  },
  data(props: any) { 
    const editable = !props.task.title
    return { 
      editable,
    }
  },  
})
</script>