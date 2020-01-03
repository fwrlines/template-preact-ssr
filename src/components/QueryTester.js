import { h, Fragment } from 'preact'
import { useQuery } from '@apollo/react-hooks'
import { Helmet } from 'react-helmet'
import gql from 'graphql-tag'
import INITIAL_DATA_QUERY from './graphql/i.graphql'

const QueryTester = ({ props }) => {
  const {
    loading,
    error,
    data:{ i }={}
  } = useQuery(gql(INITIAL_DATA_QUERY))

  if (loading) return <p>Loading ...</p>
  return (
    <>
      <Helmet>
        <title>Preact SSR Example with GraphQl</title>
        <link
          rel="canonical"
          href="http://mysite.com/example"
        />
      </Helmet>
      { i.services.map((e,i) => (
        <p key={i}>
          <strong>
            { e.name }
&nbsp;
          </strong>
          { e.seotext }
        </p>
      )
      )
      }
    </>
  )
}

export default QueryTester
