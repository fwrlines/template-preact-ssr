import { h, Fragment } from 'preact'
import Clock from 'components/Clock'

const App = () => (
  <>
    <h1>Preact test</h1>
    <Clock
      thing="thing"
      thing2="thing2"
    />
    <h3>Test reload live ssr</h3>
  </>
)

export default App
