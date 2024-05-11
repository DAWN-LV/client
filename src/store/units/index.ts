import { onMounted, ref } from "vue"
import { defineStore } from "pinia"
import { Unit } from "@/store/units/types"
import UnitsApi from "@/store/units/api"

export const useUnitsStore = defineStore("units", () => {
  const data = ref<Unit[]>([])

  onMounted(async () => {
    await UnitsApi.findAll().then(res => {
      data.value = res.data
    })
  })

  return { data }
})