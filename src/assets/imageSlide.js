export const imageSlide = (images, direction, currentImg, setImage) => {
  if (direction === 'left') {
    if (currentImg === 0) {
      setImage(images.length - 1)
      return
    }
    setImage(currentImg - 1)
  } else {
    if (currentImg === images.length - 1) {
      setImage(0)
      return
    }
    setImage(currentImg + 1)
  }
}