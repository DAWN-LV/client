<template>
  <Transition>
    <div v-if="store.data" class="my-12">
      <Timeline>
        <PointList :points="store.data.points" :count="count"/>
      </Timeline>
      <Divider>Total time is</Divider>
      <h1 class="flex items-center justify-center text-5xl font-extrabold dark:text-white">
        {{ total.value }}
        <span class="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
          {{ total.helper }}
        </span>
      </h1>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { usePointsStore } from "@/store/points"
import Timeline from "@/components/timeline"
import PointList from "@/features/point/PointList.vue"
import Divider from "@/components/Divider.vue"

const store = usePointsStore()

const count = computed(() => (
  store.data?.count || 0
))

const total = computed(() => {
  const seconds = (store.data?.points.reduce((acc, cur) => acc + cur.timePerOne, 0) || 0) * count.value

  if (seconds > 3600) {
    return { helper: "hours", value: (seconds / 3600).toFixed(2) }
  }
  if (seconds > 60) {
    return { helper: "minutes", value: (seconds / 60).toFixed(2) }
  }

  return { helper: "seconds", value: seconds.toFixed(2) }
})
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>