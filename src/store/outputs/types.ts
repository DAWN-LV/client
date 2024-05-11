export type Type = 
  | "notebook" 
  | "sketchbook" 
  | "diary" 
  | "journal" 
  | "planner" 
  | "photo_album"
  | "paper"

export interface Ouput {
  type: Type
  info: {
    name: string
    type: string
    pages: number
  }
  count: number
}