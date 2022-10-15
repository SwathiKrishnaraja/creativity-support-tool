import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import {
  Grid,
  Text,
  Tooltip,
  Button,
  Spacer,
  Link as GeistLink,
  Progress,
} from '@geist-ui/react'
import Link from 'next/link'
import Bubble from '../components/Bubble'
import React, { useEffect, useReducer, useState } from 'react'
import {
  getTopicCaptionFromID,
  getTopicsDataFromTopics,
  getStrengthsFromData,
  getTopicColorFromID,
  otherThanTopics,
  submitUserEssay,
} from '../utils'

enum UserEssayAction {
  INITIAL = 'initial',
  INSPIRED = 'inspired',
}

const submitTapped = (
  setLoadingIndicatorOpen,
  state,
  setState,
  isInspired,
  userEssay,
  dispatch
) => {
  let textEditor = document.getElementById('text-editor')

  fetch('https://creativitysupporttool.de/creativity ', {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      accept: 'application/json',
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

          if (!isInspired) {
            dispatch({
              type: UserEssayAction.INITIAL,
              payload: {
                text: textEditor.innerText,
                fluency: data.fluency,
                flexibility: data.flexibility,
                originality: data.originality,
              },
            })
          }

          if (isInspired && !userEssay.inspired.text) {
            dispatch({
              type: UserEssayAction.INSPIRED,
              payload: {
                text: textEditor.innerText,
                fluency: data.fluency,
                flexibility: data.flexibility,
                originality: data.originality,
              },
            })

            submitUserEssay({
              userEssay: {
                ...userEssay,
                inspired: {
                  text: textEditor.innerText,
                  fluency: data.fluency,
                  flexibility: data.flexibility,
                  originality: data.originality,
                },
              },
            })
          }

          let textEditorElement = document.getElementById('text-editor')
          let sentences = textEditorElement.innerText.split('. ')
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

let text =
  'Please start writing your story below, and get feedback on how novel your ideas are, and how original your story work is. The tool does not provide feedback on your grammar or writing styles, rather it provides feedback on the creative quality of your ideas, and quantity of ideas. Please start writing your story below, and get feedback on how novel your ideas are, and how original your story work is. The tool does not provide feedback on your grammar or writing styles, rather it provides feedback on the creative quality of your ideas, and quantity of ideas. Please start writing your story below, and get feedback on how novel your ideas are.'

const essayReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case UserEssayAction.INITIAL:
      return {
        ...state,
        initial: payload,
      }

    case UserEssayAction.INSPIRED:
      return {
        ...state,
        inspired: payload,
      }

    default:
      return state
  }
}
const Editor: NextPage = () => {
  const [userEssay, dispatch] = useReducer(essayReducer, {
    initial: {
      text: '',
      fluency: 0,
      originality: 0,
      flexibility: 0,
    },
    inspired: {
      text: '',
      fluency: 0,
      originality: 0,
      flexibility: 0,
    },
  })

  const [isInspired, setIsInspired] = useState(false)

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
    setIsInspired(true)
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
                submitTapped(
                  setLoadingIndicatorOpen,
                  state,
                  setState,
                  isInspired,
                  userEssay,
                  dispatch
                )
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
                        {
                          <>
                            <span style={{ textAlign: 'center' }}>
                              {getStrengthsFromData(state.data)}
                            </span>
                            <br />
                          </>
                        }
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
                <br /> <br />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}
                >
                  <Button
                    type="secondary-light"
                    className={styles.inspireMeButton}
                    onClick={() => inspireMeTapped(state, setState)}
                  >
                    {state.data.currentPage == 'inspireMe'
                      ? 'Return'
                      : 'Inspire me!'}
                  </Button>
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
