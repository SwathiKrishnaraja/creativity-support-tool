import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import {
  Grid,
  Text,
  Tooltip,
  Textarea,
  Button,
  Spacer,
  Link as GeistLink,
  Progress,
  Dot,
  Avatar,
} from '@geist-ui/react'
import Link from 'next/link'
import Bubble from '../components/Bubble'
import React from 'react'

const submitTapped = (setLoadingIndicatorOpen, state, setState) => {
  console.log('submit tapped')
  let textEditor = document.getElementById('text-editor')
  // setLoadingIndicatorOpen(false);
  // let topics = [
  //   0,
  //   2,
  //   3,
  //   1,
  //   7,
  //   2,
  //   1,
  //   3,
  //   4,
  //   5,
  //   4,
  //   1,
  //   2,
  //   0,
  // ];
  // setState({
  //   ...state,
  //   data: {
  //     fluency: 0.46,
  //     flexibility: 0.67,
  //     originality: 0.2,
  //     topics: topics,
  //     currentPage: 'initial'
  //   }
  // });

  // let sentences = text.split('. ');
  // let textEditorElement = document.getElementById('text-editor');
  // console.log("element", textEditorElement);
  // textEditorElement.innerHTML = "";
  // for (let i = 0; i < sentences.length; i++) {
  //   let sentence = sentences[i];
  //   textEditorElement.innerHTML += "<span class=\"span-" + topics[i] + "\">" + sentence + ".</span> ";
  // }
  // console.log("element", textEditorElement.innerHTML);
  // return;
  // console.log(
  //   'body',
  //   JSON.stringify({
  //     text: textEditor.innerText,
  //     dataset: 'climate_change',
  //   })
  // )
  fetch('http://3.70.5.36/creativity/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: textEditor.innerText,
      dataset: 'climate_change',
    }),
  })
    .then((response) => {
      response
        .json()
        .then((data) => {
          console.log(data)
          setLoadingIndicatorOpen(false)
          setState({
            ...state,
            data: {
              fluency: data.fluency,
              flexibility: data.flexibility,
              originality: data.originality,
              topics: data.topics,
              currentPage: 'initial',
            },
          })
          let textEditorElement = document.getElementById('text-editor')
          let sentences = textEditorElement.innerText.split('. ')
          console.log('element', textEditorElement)
          textEditorElement.innerHTML = ''
          for (let i = 0; i < sentences.length; i++) {
            let sentence = sentences[i]
            textEditorElement.innerHTML +=
              '<span class="span-' +
              data.topics[i] +
              '">' +
              sentence +
              '.</span> '
          }
        })
        .catch((err) => {
          console.log(err)
          setLoadingIndicatorOpen(false)
        })
    })
    .catch((err) => {
      console.log(err)
      setLoadingIndicatorOpen(false)
    })
}

const getTopicsDataFromTopics = (topics) => {
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

const getTopicCaptionFromID = (id) => {
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

const getTopicColorFromID = (id) => {
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

const getStrengthsFromData = (data) => {
  return ['Strength', 'Super Strength'] // any text you want based on data.fluency, etc.
}

const otherThanTopics = (topics) => {
  let otherThanTopics = []
  for (let i = 0; i < 12; i++) {
    if (!topics.find((topic) => topic.id === i)) {
      otherThanTopics.push({ id: i, count: 4 })
    }
  }
  return otherThanTopics
}

let text =
  'Please start writing your story below, and get feedback on how novel your ideas are, and how original your story work is. The tool does not provide feedback on your grammar or writing styles, rather it provides feedback on the creative quality of your ideas, and quantity of ideas. Please start writing your story below, and get feedback on how novel your ideas are, and how original your story work is. The tool does not provide feedback on your grammar or writing styles, rather it provides feedback on the creative quality of your ideas, and quantity of ideas. Please start writing your story below, and get feedback on how novel your ideas are.'

const Editor: NextPage = () => {
  const [isLoadingIndicatorOpen, setLoadingIndicatorOpen] =
    React.useState(false)
  const [state, setState] = React.useState({
    data: {
      fluency: 0,
      flexibility: 0,
      originality: 0,
      topics: [],
      currentPage: 'initial', // initial, inspireMe
    },
  })
  const resultsFromFunction = getTopicsDataFromTopics(state.data.topics)
  const topicsData: any[] = resultsFromFunction[0] as any[]
  const totalCount: number = +resultsFromFunction[1]
  const colors = {
    20: '#58A984',
    40: '#328765',
    60: '#1C5A46',
    80: '#003C31',
  }

  const inspireMeTapped = (state, setState) => {
    console.log('inspire me tapped')
    if (state.data.currentPage === 'initial') {
      setState({
        ...state,
        data: {
          ...state.data,
          currentPage: 'inspireMe',
        },
      })
    } else {
      setState({
        ...state,
        data: {
          ...state.data,
          currentPage: 'initial',
        },
      })
    }
  }

  return (
    <>
      <div className={styles.h6}>
        <h6>
          To know about how this educational application works, and what
          algorithms our tool uses, click{' '}
          <a href="/information" className={styles.hereButton}>
            {' '}
            here
          </a>
          .{' '}
        </h6>
      </div>
      <Spacer w={3} />
      <Spacer w={3} />
      <Grid.Container gap={2} justify="center" height="100%">
        {/* Text editor */}
        <Grid xs={24} md={12} className={styles.textEditor}>
          <div className={styles.editorLayout}>
            <Text h1 className={styles.textEditorHeading1}>
              Story
            </Text>
            <Text h1 className={styles.textEditorHeading2}>
              Please start writing your story below, and get feedback on how
              novel your ideas are, and how original your story work is. The
              tool does not provide feedback on your grammar or writing styles,
              rather it provides feedback on the creative quality of your ideas,
              and quantity of ideas.
            </Text>
            <Spacer w={3} />
            <div
              contentEditable="true"
              style={{
                width: '100%',
                height: '75%',
                border: '1px dotted black',
                borderRadius: '25px',
                padding: '10px',
              }}
              id="text-editor"
            />
            <Spacer w={2} />
            <Button
              type="secondary-light"
              className={styles.textEditorSubmit}
              onClick={() =>
                submitTapped(setLoadingIndicatorOpen, state, setState)
              }
            >
              Get Feedback!
            </Button>
          </div>
        </Grid>

        {/* Result panel */}
        <Grid xs={24} md={12} className={styles.resultPanel}>
          <div className={styles.editorLayout}>
            <div
              className={styles.resultContainer}
              style={{
                padding: '2%',
                backgroundColor: 'lightgrey',
                borderRadius: '25px',
              }}
            >
              <div className={styles.resultHeadingContainer}>
                <Text h1 className={styles.resultHeading}>
                  Creativity Learning Dashboard
                </Text>
                <Tooltip
                  text={
                    'Creativity is the use of one’s imagination or original ideas to create something new. It is the ability to perceive the world in new ways and to make connections between seemingly unrelated phenomena, and to generate solutions. Creativity is also our ability to tap into our knowledge, insight, information, inspiration and all the fragments populating our minds – that we’ve accumulated over the years and to combine them in extraordinary new ways.'
                  }
                  trigger="click"
                  type="dark"
                  className={styles.tooltip}
                >
                  <GeistLink color href="#" className={styles.creativityLink}>
                    What is creativity?
                  </GeistLink>
                </Tooltip>
              </div>

              {state.data.currentPage == 'initial' && (
                <>
                  <Spacer w={5} />
                  {/* Progress bar and feedback legend */}
                  Originality <br />
                  <Tooltip
                    style={{ display: 'inline' }}
                    text={'Some details on Originality'}
                    trigger="hover"
                    type="dark"
                    className={styles.tooltip}
                  >
                    <GeistLink color href="#" className={styles.creativityLink}>
                      Details...
                    </GeistLink>
                  </Tooltip>
                  <br />
                  <Progress
                    colors={colors}
                    type="success"
                    value={state.data.originality * 100}
                  />{' '}
                  <br />
                  Fluency <br />
                  <Tooltip
                    style={{ display: 'inline' }}
                    text={'Some details on Fluency'}
                    trigger="hover"
                    type="dark"
                    className={styles.tooltip}
                  >
                    <GeistLink color href="#" className={styles.creativityLink}>
                      Details...
                    </GeistLink>
                  </Tooltip>
                  <br />
                  <Progress
                    colors={colors}
                    type="success"
                    value={state.data.fluency * 100}
                  />{' '}
                  <br />
                  Flexibility <br />
                  <Tooltip
                    style={{ display: 'inline' }}
                    text={'Some details on Flexibility'}
                    trigger="hover"
                    type="dark"
                    className={styles.tooltip}
                  >
                    <GeistLink color href="#" className={styles.creativityLink}>
                      Details...
                    </GeistLink>
                  </Tooltip>
                  <br />
                  <Progress
                    colors={colors}
                    type="success"
                    value={state.data.flexibility * 100}
                  />
                  <Spacer w={10} />
                  <div>
                    <Text
                      h1
                      className={styles.textEditorHeading2}
                      style={{ textAlign: 'center' }}
                    >
                      Here are a few topics we identified from your essay. The
                      size of the bubble depicts the weight of these topics in
                      your essay.
                    </Text>

                    <div
                      style={{
                        overflowY: 'scroll',
                        width: '650px',
                        height: '100px',
                        lineHeight: '300%',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {/* placeholder to show the topic feedback as bubbles */}
                      {topicsData.map((topic, index) => {
                        return (
                          <>
                            <span
                              style={{
                                backgroundColor: getTopicColorFromID(topic.id),
                                padding: '10px',
                                borderRadius: '999px',
                                color: 'white',
                                fontWeight: 'bold',
                              }}
                            >
                              {getTopicCaptionFromID(topic.id)}
                            </span>
                            &nbsp;
                          </>
                        )
                      })}
                    </div>

                    <Spacer w={10} />
                    <div style={{ textAlign: 'center' }}>
                      We identified the following strenghts in your creative
                      writing style: <br />
                      <ul>
                        {getStrengthsFromData(state.data).map((strength) => {
                          return (
                            <>
                              <span style={{ textAlign: 'center' }}>
                                {strength}
                              </span>
                              <br />
                            </>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </>
              )}

              <div>
                {state.data.currentPage == 'inspireMe' && (
                  <>
                    <br />
                    These are the topics you mentioned:
                    <br />
                    <br />
                    <div
                      className={styles.bubblesFeedback}
                      style={{ backgroundColor: 'white' }}
                    >
                      {topicsData.map((topic, index) => {
                        return (
                          <Bubble
                            size={(topic.count / totalCount) * 35}
                            color={getTopicColorFromID(topic.id)}
                            name={getTopicCaptionFromID(topic.id)}
                          />
                        )
                      })}
                    </div>
                    <br />
                    <br />
                    These are the topics you didn't mention:
                    <br />
                    <br />
                    <div
                      className={styles.bubblesFeedback}
                      style={{ backgroundColor: 'white' }}
                    >
                      {otherThanTopics(topicsData).map((topic, index) => {
                        return (
                          <Bubble
                            size={(topic.count / totalCount) * 25}
                            color={getTopicColorFromID(topic.id)}
                            name={getTopicCaptionFromID(topic.id)}
                          />
                        )
                      })}
                    </div>
                  </>
                )}
                {/* <div className={styles.resultDots}>
                  <Dot type="error" className={styles.creativityLevel1}>
                    Everyday
                  </Dot>
                  <Dot type="warning" className={styles.creativityLevel2}>
                    Transformative
                  </Dot>
                  <Dot className={styles.creativityLevel3}>Professional</Dot>
                  <Dot type="success" className={styles.creativityLevel4}>
                    Eminent
                  </Dot>
                </div> */}
                <br /> <br />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}
                >
                  {/* <Link href="/inspiration"> */}
                  <Button
                    type="secondary-light"
                    className={styles.inspireMeButton}
                    onClick={() => inspireMeTapped(state, setState)}
                  >
                    {state.data.currentPage == 'inspireMe'
                      ? 'Return'
                      : 'Inspire me!'}
                  </Button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
            <Spacer w={5} />
          </div>
        </Grid>
      </Grid.Container>
    </>
  )
}

export default Editor
