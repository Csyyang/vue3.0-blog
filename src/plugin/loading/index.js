import loading from './loading'

export default {
    install: (app) => {
      app.component(loading.loading)
    },
    serve: loading.test,
    component: loading.loading
  }