import SheetPlastic from "@/components/icons/svg/sheet-plastic.svg?raw"
import XMark from "@/components/icons/svg/xmark.svg?raw"
import Feather from "@/components/icons/svg/feather.svg?raw"
import BottleDroplet from "@/components/icons/svg/bottle-droplet.svg?raw"
import Sun from "@/components/icons/svg/sun.svg?raw"
import Moon from "@/components/icons/svg/moon.svg?raw"
import Book from "@/components/icons/svg/book.svg?raw"
import NoteSticky from "@/components/icons/svg/note-sticky.svg?raw"
import Newspaper from "@/components/icons/svg/newspaper.svg?raw"
import Scroll from "@/components/icons/svg/scroll.svg?raw"
import Clock from "@/components/icons/svg/clock.svg?raw"

const icons = {
  sheet_plastic: SheetPlastic,
  xmark: XMark,
  feather: Feather,
  bottle_droplet: BottleDroplet,
  sun: Sun,
  moon: Moon,
  book: Book,
  note_sticky: NoteSticky,
  newspaper: Newspaper,
  scroll: Scroll,
  clock: Clock,
}

export type IconName = keyof typeof icons

export { icons }
