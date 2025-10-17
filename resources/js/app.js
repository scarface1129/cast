import { createApp, h } from 'vue'
import { createInertiaApp, Link, Head } from '@inertiajs/vue3'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    let page = pages[`./Pages/${name}.vue`]

    // If page doesn't already define a layout, use the default
    if (page.default.layout === undefined) {
      page.default.layout = Layout
    }

    return page
  },
  title: title => `My App - ${title}`,
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .component('Head', Head)
      .component('Link', Link)
      .component('Pagination', Pagination)
      .mount(el)
  },
  progress: {
    delay: 250,
    color: 'red',
    includeCSS: true,
    showSpinner: false,
  },
})


