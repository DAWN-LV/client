import { ComponentCustomProperties, createApp } from "vue"
import { createPinia } from "pinia"
import { config } from "@/globals"
import App from "./App.vue"

import "./assets/styles/index.css"

const pinia = createPinia()
const app = createApp(App)

setGlobals()
app.use(pinia)
app.mount("#app")

function setGlobals() {
  const props: Partial<ComponentCustomProperties> = {
    $config: config,
  }

  Object.assign(app.config.globalProperties, props)
}

