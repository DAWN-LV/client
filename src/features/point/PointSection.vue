<template>
  <Transition>
    <Timeline v-if="store.data" class="my-12">
      <Timeline.Card
        v-for="point in store.data.points"
        :key="point.id"
        :content="point.description"
        :title="point.title"
      >
        <template v-if="point.timePerOne" #helper>
          <div class="flex items-center space-x-2">
            {{ point.timePerOne }}s<sup>x1</sup>x {{ count }} = {{ getResult(point.timePerOne) }}
            <Icon name="clock"/>
          </div>
        </template>
      </Timeline.Card>
    </Timeline>
  </Transition>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { usePointsStore } from "@/store/points"
import Timeline from "@/components/timeline"
import Icon from "@/components/icons/Icon.vue"

const store = usePointsStore()

const count = computed(() => {
  if (store.data) {
    return store.data.output.count
  }

  return 0
})

function getResult(time: number) {
  return `${count.value * time}s`
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity .5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>