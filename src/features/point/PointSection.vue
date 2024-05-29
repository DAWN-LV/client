<template>
  <Transition>
    <Timeline v-if="store.data" class="my-12">
      <Timeline.Card
        v-for="point in store.data.points"
        :key="point.id"
        :index="point.id"
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
      <Timeline.Card 
        v-if="lastPoint"
        :index="lastPoint.id + 1"
        title="Result" 
        :content="`Total time spend on all stages: ${totalTime()}s`"
        />
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

const lastPoint = computed(() => {
  if (store.data && store.data.points.length > 0) {
    return store.data.points.at(-1)
  }

  return 0
})

function totalTime() {
  if (store.data) {
    let result = 0
    for(const point of store.data.points) {
      result += count.value * point.timePerOne
    }
    
    return result
  }
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