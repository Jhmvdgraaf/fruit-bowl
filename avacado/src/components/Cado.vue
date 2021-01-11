<template>
  <div>
    <v-card
    outlined
    shaped
    elevation="10"
    >
      <v-card-title>
        <div v-if="!editable">
          {{ title }}
        </div>
        
        <div v-if="editable">            
          <v-text-field
              v-model="title"
              label="Title"
            />
        </div>
      </v-card-title>
      <v-card-subtitle>
        <v-row v-if="!editable">
          <v-col>Assigned: {{ assignee }}</v-col>
          <v-spacer></v-spacer>
          <v-col>Done by: {{ date }}</v-col>
        </v-row>        
        <v-row v-if="editable">
          <v-col>
            <v-select
              :items="assignees"
              v-model="assignee"
              label="Assign to"
            />
          </v-col>
          <v-spacer></v-spacer>
          <v-col>
            <v-text-field
              v-model="date"
              label="Done by"
            />
          </v-col>
        </v-row>
      </v-card-subtitle>
      <v-card-text>
        <div
          v-if="!editable"
        >
          {{ description }}
        </div>
        <div
          v-if="editable"
        >    
          <v-textarea
            label="Description"
            auto-grow
            v-model="description"
          />
        </div>        
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
export default Vue.extend({
  name: "Cado",
  data() { 
    return { 
      editable: true,
      assignee: '',
      assignees: ['Jonathan', 'props'],
      date: '11-01-2021',
      title: '',
      description: '',
    }
  }
  
})
</script>