const h = require('choo/html')

const view = container => (state, prev, send) => {
  return h`<main class="bb" style="visibility: hidden">
    ${container(state, prev, send)}
  </main>`
}

module.exports = { view }