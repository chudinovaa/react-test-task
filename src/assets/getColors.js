export const getColors = (colors) => {
  const colorList = []
  colors.forEach(obj => {
    if (obj.hasOwnProperty('name')) {
      colorList.push(obj['name']);
    }
  })

  return colorList
}