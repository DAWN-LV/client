import { ref } from "vue"
import { Type } from "@/store/units/types"
import { defineStore } from "pinia"
import { Output } from "@/store/outputs/types"
import OutputsApi from "@/store/outputs/api"

export const useOutputsStore = defineStore("outputs", () => {
  const data = ref<Output[]>([])

  async function refresh(dto: Record<Type, number>) {
    await OutputsApi.findAll(dto).then(res => {
      data.value = res.data
    })
  }

  async function clear() {
    data.value = []
  }

  return { data, refresh, clear }
})