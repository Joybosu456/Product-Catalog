import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

export default function Home() {
  const [editing, setEditing] = useState(null)

  return (
    <>
      <Head>
        <title>Product Catalog</title>
      </Head>

      <Header />

      <main className="container">
        <div className="row">
          <div className="col-md-5">
            <ProductForm
              editing={editing}
              onSaved={() => setEditing(null)}
              onCancel={() => setEditing(null)}
            />
          </div>

          <div className="col-md-7">
            <h4 className="mb-3">Products</h4>
            <ProductList onEdit={(p) => setEditing(p)} />
          </div>
        </div>
      </main>
    </>
  )
}
