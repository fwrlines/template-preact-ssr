import { h, render } from 'preact'

import App from 'site/App'
import Clock from 'components/Clock'

import '@fwrlines/alphabet-scss/main.scss'

const rootElement = document.getElementById('main')

render(<App />, rootElement)
