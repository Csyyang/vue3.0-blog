import tips from './tips'

export default {
    install: (app) => {
      app.component(tips.tips)
    },
    serve: tips.serve,
  }