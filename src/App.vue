<template>
  <div class="flex flex-col flex-grow overflow-hidden">
    <Navbar class="fixed w-full"/>
    <div class="container mx-auto my-24 px-8 md:px-12">
      <div class="flex justify-center">
        <img src="./assets/images/default.png"/>
      </div>
      <PointSection/>
      <UnitsSection/>
      <div class="relative flex justify-between h-full gap-12 mt-4">
        <form @submit.prevent="onSubmit" class="flex-1">
          <InputSection class="min-h-60"/>
          <Button 
            type="submit"
            variant="primary" 
            label="Calculate"
            class="w-full text-lg mt-4"
          />
        </form>
        <Icon name="chevron_right" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:text-white"/>
        <div class="flex-1">
          <OutputSection class="h-72 overflow-y-auto"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOutputsStore } from "@/store/outputs"
import Navbar from "@/layouts/Navbar.vue"
import UnitsSection from "@/features/units/UnitsSection.vue"
import OutputSection from "@/features/output/OutputSection.vue"
import InputSection from "@/features/input/InputSection.vue"
import PointSection from "@/features/point/PointSection.vue"
import Button from "@/components/Button.vue"
import Icon from "@/components/icons/Icon.vue"

const { refresh } = useOutputsStore()

function calculate(array: FormDataEntryValue[]) {
  return array
    .reduce((acc, cur) => acc + Number(cur), 0)
}

async function onSubmit(ev: any) {
  const form = new FormData(ev.target)

  const dto = {
    paper: calculate(form.getAll("paper")),
    glue: calculate(form.getAll("glue")),
    ink: calculate(form.getAll("ink"))
  }

  await refresh(dto)
} 
</script>