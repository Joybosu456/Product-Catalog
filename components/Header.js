import { useSelector } from 'react-redux'

export default function Header() {
  const cartCount = useSelector((s) => s.cart.items.length)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div className="container">
        <a className="navbar-brand" href="#">Product Catalog</a>
        <div>
          <button className="btn btn-outline-light" type="button">
            Cart <span className="badge bg-light text-dark">{cartCount}</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
