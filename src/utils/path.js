export const imagePath = (path) => {
  // Ensure path starts with a slash
  const normalized = path.startsWith('/') ? path : `/${path}`
  return import.meta.env.BASE_URL + normalized.slice(1)
}