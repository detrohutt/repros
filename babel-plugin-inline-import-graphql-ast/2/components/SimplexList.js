import { graphql } from 'react-apollo'
import SimplexListContainer from '../gql/SimplexListContainer.gql'

const SimplexList = ({ data: { products, loading } }) =>
  loading
    ? null
    : <ul>
        {products.map(p =>
          <li key={p.productId}>
            {p.productId}
          </li>
        )}
      </ul>

export default graphql(SimplexListContainer)(SimplexList)
