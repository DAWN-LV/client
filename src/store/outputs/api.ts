import { http } from "@/globals"
import { Output } from "@/store/outputs/types"

export default abstract class OutputsApi {
  static async findAll(dto: Record<string, number>) {
    return http.post<Output[]>("outputs", dto)
  }
}