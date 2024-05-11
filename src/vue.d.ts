declare module '*.vue' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}

declare module '@vue/runtime-core' {
  import { RootConfig } from '@/config/types'
  interface ComponentCustomProperties {
    $config: Readonly<RootConfig>
  }
}

export {}
