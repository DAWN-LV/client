import { ref } from "vue"
import { defineStore } from "pinia"
import PointsApi from "@/store/points/api"
import { Points } from "@/store/points/types"
import { Output } from "@/store/outputs/types"

export const usePointsStore = defineStore("points", () => {
  const data = ref<Points & { count: number } | null>(null)

  async function refresh(output: Output) {
    await PointsApi.findOne(output.id).then(res => {
      data.value = Object.assign(res.data, { count: output.count })
    })
  }

  async function clear() {
    data.value = null
  }

  return { data, refresh, clear }
})