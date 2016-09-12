const gr8 = require('gr8/dist')
const css = require('cssobj')
const reset = require('recsst')
const webfontloader = require('webfontloader')
const style = { }

const settings = {
  padding: [0.25, 0.5, 0.75, 1, 1.5, 2, 4],
  margin: [0.5, 0.75, 1, 1.25, 1.5, 2],
  fontSize: [0.15, 0.25, 0.5, 0.8, 1, 1.2, 1.5, 1.8, 2, 2.2],
  responsive: true
}

const type = {
  heading: "'Compacta', sans-serif",
  black: "'Fraktur BT', serif",
  sans: "arial, sans-serif"
}

const colors = {
  black: '#000',
  red: '#f33',
  white: '#eee' 
}

style['html'] = {
  fontSize: '2.5vw'
}

style.a = {
  color: colors.white,
  opacity: 1,
  textDecoration: 'none'
}

style['a:hover'] = {
  opacity: 0
}

style['.body'] = {
  fontFamily: type.black,
  'a': {
    fontFamily: type.heading
  }
}

style['.blink:hover'] = {
  animation: 'blink 150ms steps(1, end) infinite'
}

style.sup = { fontSize: '0.5em' }

style['ul'] = { listStyle: 'none' }

Object.keys(type).forEach(font => {
  style['.' + font] = { fontFamily: type[font] }
})

Object.keys(colors).forEach(color => {
  style['.bg-' + color] = { backgroundColor: colors[color] }
  style['.tc-' + color] = {
    color: colors[color],
    'a': {
      color: colors[color],
      textDecoration: 'none'
    }
  }
})

const fontsLoaded = () => {
  document.querySelector('main').style.visibility = ''
}

// typography
webfontloader.load({
  active: fontsLoaded,
  custom: {
    families: ['Fraktur BT', 'Compacta'],
    urls: ['/assets/webfonts/config.css']
  }
})

setTimeout(fontsLoaded, 1000)

// init
css(style)
gr8(settings).attach()
reset.attach()