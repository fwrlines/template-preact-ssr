import { h, Fragment } from 'preact'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import INITIAL_DATA_QUERY from './graphql/i.graphql'

const QueryTester = ({ props }) => {
  const {
    loading,
    error,
    data:{ i }={}
  } = useQuery(gql(INITIAL_DATA_QUERY))

  if (loading) return <p>Loading ...</p>
  return i.services.map((e,i) => (
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

export default QueryTester
