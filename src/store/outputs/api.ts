import { http } from "@/globals"

export default abstract class OutputsApi {
  static async findAll(dto: Record<string, number>) {
    return http.post("outputs", dto)
  }
}