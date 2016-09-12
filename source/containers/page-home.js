const marked = require('marked')
const h = require('choo/html')
const x = require('xtend')

const blocks = require('../components/blocks')
const title = `
<svg version="1.1" id="Layer_1" style="overflow: visible" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 1171.6 240.4" enable-background="new 0 0 1171.6 240.4" xml:space="preserve">
<path fill="#FFF" d="M1043.4,0v240.4h36.7l-1.5-142.1h2.4l15.7,142.1h21.6L1134,98.3h2.4l-1.5,142.1h36.7V0h-48l-15.1,115.1h-2.1L1091.4,0
  H1043.4z M993.8,240.4h41.1V0h-41.1V240.4z M890.2,0v240.4h40.8V123.4h13.3v116.9h40.8V0h-40.8v91.8h-13.3V0H890.2z M831.5,47.7h1.2
  l6.2,109.5H825L831.5,47.7z M804.6,0l-23.7,240.4h39.7l3-51.2h17.2l3,51.2h40L859.4,0H804.6z M721.3,31.4h2.7
  c10.4,0,10.4,3.6,10.4,15.1v46.2c0,9.5-1.8,12.4-9.5,12.4c-0.9,0-2.4-0.3-3.6-0.3V31.4z M680.1,0v240.4h41.1v-99.8
  c1.2,0,2.1-0.3,3.3-0.3c7.1,0,9.8,3.3,9.8,11v89.1h40.8v-81.7c0-19.8-3.6-31.1-18.6-37c16.9-7.7,18.6-19.8,18.6-41.4V48.8
  C775.2,11,769.2,0,730.5,0H680.1z M518.5,0v240.4h35.8l-0.9-123.1h1.8L578,240.4h36.4V0h-35.5l0.6,119.9h-1.8L555.2,0H518.5z
   M459.9,47.7h1.2l6.2,109.5h-13.9L459.9,47.7z M432.9,0l-23.7,240.4h39.7l3-51.2H469l3,51.2h40L487.7,0H432.9z M405.2,46.5
  c0-40.3-4.7-48-47.4-48c-41.4,0-47.7,7.1-47.7,48v34.3c0,16.9,3.3,28.7,18.6,37.6l26.3,15.4c8.6,5,9.2,7.4,9.2,15.1v50.9
  c0,6.8-1.5,10.4-5.9,10.4c-5,0-6.8-3.6-6.8-10.4v-58.6h-41.4v53c0,40.6,5.9,48,47.4,48c42.9,0,47.7-6.8,47.7-48v-50
  c0-15.7-3-27.2-19.2-36.4l-25.2-14.5c-8.3-4.7-9.2-7.7-9.2-15.4V40.6c0-6.5,1.2-10.1,5.9-10.1c5,0,6.8,3,6.8,10.1v42.3h40.8V46.5z
   M302.9,46.5c0-40.3-4.7-48-47.4-48c-41.4,0-47.7,7.1-47.7,48v34.3c0,16.9,3.3,28.7,18.6,37.6l26.3,15.4c8.6,5,9.2,7.4,9.2,15.1
  v50.9c0,6.8-1.5,10.4-5.9,10.4c-5,0-6.8-3.6-6.8-10.4v-58.6h-41.4v53c0,40.6,5.9,48,47.4,48c42.9,0,47.7-6.8,47.7-48v-50
  c0-15.7-3-27.2-19.2-36.4l-25.2-14.5c-8.3-4.7-9.2-7.7-9.2-15.4V40.6c0-6.5,1.2-10.1,5.9-10.1c5,0,6.8,3,6.8,10.1v42.3h40.8V46.5z
   M151.7,47.7h1.2l6.2,109.5h-13.9L151.7,47.7z M124.7,0l-23.7,240.4h39.7l3-51.2h17.2l3,51.2h40L179.5,0H124.7z M0,0v240.4h40.8
  V123.4h13.3v116.9H95V0H54.2v91.8H40.8V0H0z"/>
</svg>`

const header = () => {
  const titleEl = h`<div class=""></div>`
  titleEl.innerHTML = title

  return h`<div class="p0-75">
    ${titleEl}
  </div>`
}

const footer = opts => {
  const options = x({ }, opts)
  const colOne = () => blocks.column(options.content[0])
  const subCols = [
    options.content[1],
    options.content[2],
    options.content[3]
  ].map(col => () => blocks.column(col))

  const deskCols = subCols
    .map(col => h`<div class="xa p0-75">${col()}</div>`)

  const deskEl = h`<div class="db" sm="dn">
    <div class="x xw black fs0-8" sm="fs2">
      <div class="c6 p0-75" sm="c12">
        ${colOne()}
        <div
          class="sans lh1-5 fs0-15 ttu db"
          sm="dn"
          style="margin-top: 2.3rem;"
        >
          ${blocks.list(options.note)}
        </div>
      </div>
      <div class="x c6">
        ${deskCols}
      </div>
    </div>
  </div>`

  const mobileEl = h`<div class="fs1-5 dn black" sm="db">
    <div class="x">
      <div class="c8 p0-75">
        ${colOne()}
      </div>
      <div class="c4 p0-75">
        ${subCols[1]()}
      </div>
    </div>
    <div class="x">
      <div class="c4 p0-75">
        ${subCols[0]()}
      </div>
      <div class="c4 p0-75">
        ${subCols[2]()}
      </div>
      <div class="c4 p0-75">
        <div class="sans lh2 ttu db c10" style="font-size: 0.25rem">
          ${blocks.list(options.note, true)}
        </div> 
      </div>
    </div>
  </div>`

  return [ deskEl, mobileEl ]

}

const block = opts => {
  const options = x({
    padding: '0-75',
    fontSize: '2-2',
    fontColor: 'white',
    align: 'center',
    width: '100%'
  }, opts)

  const container = blocks[opts.type]
    ? blocks[opts.type]
    : blocks['text']

  return h`
    <div
      class="
        body
        ${'tc-' + options.fontColor}
        ${'fs' + options.fontSize}
        ${'p' + options.padding}
      "
    >
      ${container(options)}
    </div>
  `
}

const view = (state, prev, send) => h`
  <div class="p0-75">
    ${header()}
    ${state.content.map(content => block(content))}
    ${footer({
      content: state.footer,
      note: state.note
    })}
  </div>
`

module.exports = { view }