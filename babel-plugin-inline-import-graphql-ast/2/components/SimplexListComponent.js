export default ({ data: { products, loading } }) =>
  loading
    ? null
    : <ul>
        {products.map(p =>
          <li key={p.productId}>
            {p.productId}
          </li>
        )}
      </ul>
