<template>
  <div>
    vue3项目框架
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import setVersion from "./version";

setVersion();

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style lang="less">
@import "./less/ls";
</style>

<style>
</style>