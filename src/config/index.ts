import { APIConfig, AppConfig, Config } from "@/config/types"

const app: AppConfig = {
  title: "JTator"
}

const api: APIConfig = {
  baseURL: "http://localhost:3000/api"
}

export default { app, api } as Readonly<Config>