const h = require('choo/html')
const x = require('xtend')
const marked = require('marked')

const text = opts => {
  const el = h`<div
    style="
      text-align: ${opts.align};
    "
  ><div>`
  el.innerHTML = marked(opts.content)
  return el
}

const image = opts => h`
  <div class="
    ${opts.align === 'center' ? 'x xjc' : ''}
  ">
    <div class="psr ${opts.blink ? 'blink' : ''}" style="width: ${opts.width}">
      <div
        style="
          background-image: url(${opts.image});
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          padding-bottom: ${opts.ratio}%;
        "
      ></div>
      ${opts.link ? h`<a href="${opts.link}" class="psa t0 l0 r0 b0 z2"></a>` : ''}
      ${opts.symbol ? h`<div class="psa t0" style="right: -1rem"><sup>${opts.symbol}</sup></div>` : ''}
    </div>
  </div>
`

const list = (content, wrap = false) => {
  const listEls = content.map(item => {
    const itemEl = h`<li style="
      ${wrap ? '' : 'white-space: nowrap;'}
    "></li>`
    itemEl.innerHTML = marked(item)
    return itemEl
  })
  return h`<ul>${listEls}</ul>`
}

const column = opts => {
  const options = x({
    title: 'testing'
  }, opts)

  const content = () => {
    const contentEl = h`<div></div>`
    contentEl.innerHTML = marked(options.content)
    return contentEl
  }

  return h`<div>
    <div class="heading fs1-25" style="white-space: nowrap;">
      ${options.title}
      <div style="display: inline-block; vertical-align: middle; height: 1px; background: #fff; width: 1.5rem;"></div>
    </div>
    ${options.content ? content() : ''}
    ${options.list ? list(options.list) : ''}
  </div>`
}


module.exports = { text, image, column, list, list }