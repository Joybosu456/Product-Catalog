import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    addProduct: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(product) {
        return { payload: { id: uuidv4(), ...product } }
      },
    },
    updateProduct(state, action) {
      const idx = state.findIndex((p) => p.id === action.payload.id)
      if (idx !== -1) state[idx] = action.payload
    },
    deleteProduct(state, action) {
      return state.filter((p) => p.id !== action.payload)
    },
  },
})

export const { addProduct, updateProduct, deleteProduct } = productsSlice.actions
export default productsSlice.reducer
