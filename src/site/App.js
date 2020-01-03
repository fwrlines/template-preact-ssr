import { h, Fragment } from 'preact'
import Clock from 'components/Clock'
import QueryTester from 'components/QueryTester'

const App = () => (
  <>
    <h1>Preact test</h1>
    <h2>Includes</h2>
    <ul>
      <li>
        SSR
      </li>
      <li>
        Lighthouse 100/100 ootb
      </li>
      <li>
        Apollo
      </li>
    </ul>
    <Clock
      thing="thing"
      thing2="thing2"
    />
    <QueryTester />
  </>
)

export default App
