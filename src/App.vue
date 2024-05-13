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
          <OutputSection class="flex-1"/>
        </div>
        <Button 
          type="submit"
          variant="primary" 
          label="Calculate"
          class="w-full text-lg mt-4"
        />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOutputsStore } from "@/store/outputs"
import Navbar from "@/layouts/Navbar.vue"
import UnitsSection from "@/features/units/UnitsSection.vue"
import OutputSection from "@/features/output/OutputSection.vue"
import InputSection from "@/features/input/InputSection.vue"
import Button from "@/components/Button.vue"

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