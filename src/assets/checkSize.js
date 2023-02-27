export const checkSize = (sizeActive, sizes) => {
  if (sizeActive == null) {
    return
  }
  return sizes.includes(sizeActive+1)
}