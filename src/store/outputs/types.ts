export type Type = 
  | "notebook" 
  | "sketchbook" 
  | "diary" 
  | "journal" 
  | "planner" 
  | "photo_album"
  | "paper"
  | "degree"

export interface Output {
  type: Type
  info: {
    name: string
    type: string
    pages: number
  }
  count: number
}