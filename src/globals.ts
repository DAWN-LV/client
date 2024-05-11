import config from "@/config"
import axios from "axios"

const http = axios.create({
  baseURL: config.api.baseURL
})

export { config, http }