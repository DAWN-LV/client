<template>
  <div class="flex flex-col flex-grow overflow-hidden">
    <Navbar class="fixed w-full"/>
    <div class="container mx-auto my-24 px-8 md:px-12">
      <div class="flex flex-col justify-center w-full">
        <img src="./assets/images/default.png"/>
      </div>
      <UnitsSection/>
      <form @submit.prevent="onSubmit">
        <div class="flex justify-between gap-12 mt-4">
          <InputSection class="flex-1"/>
          <OutputSection :data="data" class="flex-1"/>
        </div>
        <Button type="submit"variant="primary" label="Calculate"class="w-full text-lg mt-4"/>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import Navbar from "@/layouts/Navbar.vue"
import UnitsSection from "@/features/UnitsSection.vue"
import OutputSection from "@/features/OutputSection.vue"
import InputSection from "@/features/InputSection.vue"
import Button from "@/components/Button.vue"

const data = ref<Record<string, number>>({})

async function onSubmit(ev: any) {
  ev.preventDefault()

  data.value = {}

  const form = new FormData(ev.target)
  for (let [key, value] of form.entries()) {
    data.value[key] = Math.floor(+value)
  }
} 
</script>