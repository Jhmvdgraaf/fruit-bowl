<template>
  <div>
    <v-row
    >
      <v-col class="col-sm-2" />
      <v-col
        class="col-sm-6"
      >
        <slot></slot>
      </v-col>
      <v-col            
        class="col-sm-2"
      >
        <slot name="controller"> </slot>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>