export const getTopicsDataFromTopics = (topics) => {
  let topicsData = [] // [{id: 0, count: 5}, ...]
  let totalCount = 0
  for (let i = 0; i < topics.length; i++) {
    let topic = topics[i]
    let topicData = topicsData.find((topicData) => topicData.id === topic)
    if (topicData) {
      topicData.count++
    } else {
      topicsData.push({ id: topic, count: 1 })
    }
    totalCount += 1
  }
  return [topicsData, totalCount]
}

export const getTopicCaptionFromID = (id) => {
  switch (id) {
    case 0:
      return 'Climate Change'
    case 1:
      return 'Public Transportation'
    case 2:
      return 'Reneable Energy'
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

export const getStrengthsFromData = (data) => {
  const { fluency, flexibility, originality } = data

  if (fluency < 50 && flexibility < 50 && originality < 50) {
    return 'first text'
  }

  if (fluency > 50 && flexibility > 50 && originality < 50) {
    return 'second text'
  }

  if (fluency > 50 && flexibility < 50 && originality < 50) {
    return 'third text'
  }

  if (fluency < 50 && flexibility < 50 && originality > 50) {
    return 'fourth text'
  }

  if (fluency > 50 && flexibility > 50 && originality > 50) {
    return 'fifth text'
  }

  if (fluency > 50 && flexibility < 50 && originality > 50) {
    return 'sixth text'
  }

  if (fluency < 50 && flexibility > 50 && originality < 50) {
    return 'seventh text'
  }

  if (fluency < 50 && flexibility > 50 && originality > 50) {
    return 'eight text'
  }
}

export const otherThanTopics = (topics) => {
  let otherThanTopics = []
  for (let i = 0; i < 12; i++) {
    if (!topics.find((topic) => topic.id === i)) {
      otherThanTopics.push({ id: i, count: 4 })
    }
  }
  return otherThanTopics
}

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
