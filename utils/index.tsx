export const parseTopics = (topics) => {
  if (typeof topics === 'string') {
    return Array.from(new Set(JSON.parse(topics)))
  }
  return []
}

export const getTopicCaptionFromID = (id) => {
  switch (id) {
    case 0:
      return 'Climate Change'
    case 1:
      return 'Public Transportation'
    case 2:
      return 'Renewable Energy'
    case 3:
      return 'Trees and Deforestation'
    case 4:
      return 'Pollution Reduction'
    case 5:
      return 'Food Products'
    case 6:
      return 'Governments and Companies'
    case 7:
      return 'Recycling and Packaging'
    case 8:
      return 'Water and Heat'
    case 9:
      return 'Lights and Appliances'
    case 10:
      return 'Fashion and Clothes'
    case 11:
      return 'Food Waste and Leftover'
    default:
      return 'Unknown Topic'
  }
}

export const getTopicColorFromID = (id) => {
  switch (id) {
    case 0:
      return 'green'
    case 1:
      return 'purple'
    case 2:
      return 'orange'
    case 3:
      return 'darkgreen'
    case 4:
      return 'brown'
    case 5:
      return 'red'
    case 6:
      return 'blue'
    case 7:
      return 'grey'
    case 8:
      return 'lightblue'
    case 9:
      return 'yellow'
    case 10:
      return 'magenta'
    case 11:
      return 'darkorange'
    default:
      return 'black'
  }
}

export const otherThanTopics = (topics) =>
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    .filter((topic) => !topics.includes(topic))
    .filter(Boolean)

export const submitUserEssay = ({ userEssay }) => {
  fetch('/api/essay', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      accept: 'application/json',
    },
    body: JSON.stringify(userEssay),
  })
}

export { default as Strength } from './Strength'
