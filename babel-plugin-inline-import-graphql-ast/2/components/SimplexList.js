import { graphql } from 'react-apollo'
import SimplexListContainer from '../gql/SimplexListContainer.gql'
import SimplexList from './SimplexListComponent'

export default graphql(SimplexListContainer)(SimplexList)
