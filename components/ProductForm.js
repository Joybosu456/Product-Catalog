import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct, updateProduct } from '../store/productsSlice'
import { validateName, validatePrice, validateCategory } from '../utils/validation'
import { useForm, Controller } from 'react-hook-form'

export default function ProductForm({ editing, onSaved, onCancel }) {
  const dispatch = useDispatch()

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: { name: '', price: '', category: '' },
    mode: 'onChange',
    reValidateMode: 'onChange',
  })

  useEffect(() => {
    if (editing) {
      reset({ name: editing.name, price: String(editing.price), category: editing.category })
    } else {
      reset({ name: '', price: '', category: '' })
    }
  }, [editing, reset])

  function onSubmit(values) {
    const payload = { name: values.name.trim(), price: Number(values.price), category: values.category.trim() }
    if (editing) {
      dispatch(updateProduct({ id: editing.id, ...payload }))
    } else {
      dispatch(addProduct(payload))
    }
    onSaved && onSaved()
    reset({ name: '', price: '', category: '' })
  }

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{editing ? 'Edit Product' : 'Add Product'}</h5>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <Controller
              name="name"
              control={control}
              rules={{
                validate: (v) => validateName(v) ?? true,
              }}
              render={({ field }) => (
                <>
                  <input {...field} className={`form-control ${errors.name ? 'is-invalid' : ''}`} />
                  {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                </>
              )}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Price</label>
            <Controller
              name="price"
              control={control}
              rules={{
                validate: (v) => validatePrice(v) ?? true,
              }}
              render={({ field }) => (
                <>
                  <input {...field} className={`form-control ${errors.price ? 'is-invalid' : ''}`} />
                  {errors.price && <div className="invalid-feedback">{errors.price.message}</div>}
                </>
              )}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Category</label>
            <Controller
              name="category"
              control={control}
              rules={{
                validate: (v) => validateCategory(v) ?? true,
              }}
              render={({ field }) => (
                <>
                  <input {...field} className={`form-control ${errors.category ? 'is-invalid' : ''}`} />
                  {errors.category && <div className="invalid-feedback">{errors.category.message}</div>}
                </>
              )}
            />
          </div>

          <div>
            <button className="btn btn-primary me-2" type="submit">{editing ? 'Save Changes' : 'Add Product'}</button>
            {editing && <button type="button" className="btn btn-secondary" onClick={() => { reset({ name: '', price: '', category: '' }); onCancel && onCancel() }}>Cancel</button>}
          </div>
        </form>
      </div>
    </div>
  )
}
