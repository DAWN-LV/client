import { http } from "@/globals"
import { Unit } from "@/store/units/types"

export default abstract class UnitsApi {
  static async findAll() {
    return http.get<Unit[]>("units")
  }
}