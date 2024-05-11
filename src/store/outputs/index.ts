import { ref } from "vue"
import { defineStore } from "pinia"
import { Ouput } from "@/store/outputs/types"
import OutputsApi from "@/store/outputs/api"

export const useOutputsStore = defineStore("outputs", () => {
  const data = ref<Ouput[]>([])

  async function refresh(dto: Record<string, number>) {
    await OutputsApi.findAll(dto).then(res => {
      data.value = res.data
    })
  }

  async function clear() {
    data.value = []
  }

  return { data, refresh, clear }
})