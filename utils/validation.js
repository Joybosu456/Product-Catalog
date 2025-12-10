// Reusable validation helpers for product form

export function validateName(name) {
  if (!name || !name.trim()) return 'Name is required'
  const re = /^[A-Za-z\s]+$/
  if (!re.test(name)) return 'Name must contain only letters and spaces'
  return null
}

export function validatePrice(price) {
  if (!price || !String(price).trim()) return 'Price is required'
  const re = /^\d{1,10}$/
  if (!re.test(String(price))) return 'Price must be numeric (up to 10 digits)'
  if (Number(price) <= 0) return 'Price must be greater than 0'
  return null
}

export function validateCategory(category) {
  if (!category || !category.trim()) return 'Category is required'
  // only letters (no spaces)
  const re = /^[A-Za-z]+$/
  if (!re.test(category)) return 'Category must contain only letters'
  return null
}
