import { http } from "@/globals"
import { Points } from "@/store/points/types"

export default abstract class PointsApi {
  static async findOne(productId: number) {
    return http.get<Points>(`points/${productId}`)
  }
}