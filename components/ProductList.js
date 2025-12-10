import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../store/productsSlice'
import { addToCart } from '../store/cartSlice'

export default function ProductList({ onEdit }) {
  const products = useSelector((s) => s.products)
  const dispatch = useDispatch()

  if (!products.length) return <div className="alert alert-info">No products yet. Add one.</div>

  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th className="actions-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>${p.price.toFixed(2)}</td>
              <td>{p.category}</td>
              <td className="action-cell">
                <button className="btn btn-sm btn-outline-primary me-2 btn-edit" onClick={() => onEdit(p)}>Edit</button>
                <button className="btn btn-sm btn-outline-danger me-2 btn-delete" onClick={() => dispatch(deleteProduct(p.id))}>Delete</button>
                <button className="btn btn-sm btn-success btn-addcart" onClick={() => dispatch(addToCart(p.id))}>Add to Cart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
