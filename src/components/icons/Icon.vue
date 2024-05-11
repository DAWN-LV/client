<template>
  <span class="inline-flex items-center aspect-square w-4 h-4" v-html="icons[name]"/>
</template>

<script lang="ts" setup>
import { IconName, icons } from "@/components/icons"

defineProps<{ name: IconName }>()
</script>
