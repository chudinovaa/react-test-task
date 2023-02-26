const colors = {
  'красный': 'red',
  'желтый': 'yellow',
  'зеленый': 'green',
  'серый': 'gray',
  'черный': 'black',
  'белый': 'white',
  'синий': 'blue',
}

export const translateColors = (color) => {
  if (colors[color]) {
    return colors[color]
  } else return 'white'
}

