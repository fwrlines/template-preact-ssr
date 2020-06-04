import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'
import Clock from 'ui/AsyncClock'
import { AnimatedVCaret } from '@fwrlines/ds'

const App = () => {
  const [active, setActive] = useState(false)
  return (
    <>
      <h1 className="x-primary c-x">Preact test</h1>
      <h2>
Includes
        <AnimatedVCaret
          active={active}
          setActive={setActive}
          id="myarrow"
          width="200px"
        />
      </h2>
      <ul>
        <li>
        SSR
        </li>
        <li>
        Lighthouse 100/100 ootb
        </li>
        <li>
          <p>env vars are</p>
          { process.env.GRAPHQL_ENDPOINT }
        </li>
      </ul>
      <Clock
        thing="thing"
        thing2="thing2"
      />
    </>
  )
}

export default App
