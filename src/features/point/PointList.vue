<template>
  <Timeline.Card
    v-for="(point, index) in points"
    :key="point.id"
    :content="point.description"
    :title="point.title"
  >
    <template #prepend>
      <div class="flex items-center justify-center font-bold text-blue-800 dark:text-blue-300">
        {{ index + 1 }}
      </div>
    </template>

    <template v-if="point.timePerOne" #helper>
      <div class="flex items-center space-x-2">
        <div v-html="getTime(point)"/>
        <Icon name="clock"/>
      </div>
    </template>
  </Timeline.Card>
</template>

<script setup lang="ts">
import { Point } from "@/store/points/types"
import Timeline from "@/components/timeline"
import Icon from "@/components/icons/Icon.vue"

const props = defineProps<{ points: Point[], count: number }>()

function getTime(point: Point) {
  return `${ point.timePerOne }s <sup>x1</sup> x ${ props.count } = ${ point.timePerOne * props.count }s`
}
</script>