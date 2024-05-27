export interface Point {
  id: number
  title: string
  description: string
  timePerOne: number
}

export interface Points {
  id: number
  points: Point[]
}