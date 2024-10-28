import { createHead } from '@vueuse/head'
import { defineCustomElement } from 'vue'
import Mimor from './components/mimor/Mimor.vue'

customElements.define(
  'x-mimor',
  defineCustomElement(Mimor, {
    configureApp(app) {
      app.use(createHead())
    },
  }),
)
