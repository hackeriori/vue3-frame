<template>
  <div>
    vue3项目框架
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import setVersion from "./version";
import './ls.css';

setVersion();

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style>
</style>