const choo = require('choo')
const app = choo()

const containers = {
  home: require('./containers/page-home')
}

const models = {
  content: require('./models/content')
}

const views = {
  main: require('./views/main')
}

app.model(models.content)

app.router((route) => [
  route('/', views.main.view(containers.home.view))
])

const tree = app.start()
document.body.appendChild(tree)