import { createStore } from 'solid-js/store'

const [appStore, setAppStore] = createStore({
  appTitle: 'app title',
  icon: 'app icon',
})

export {
  appStore,
  setAppStore,
}
