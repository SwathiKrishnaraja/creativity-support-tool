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
  parseTopics,
  Strength,
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
  const topicsData = parseTopics(state.data.topics)
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
        <h6 style={{ fontSize: '1em', fontWeight: '500' }}>
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
              Imagine you are in an assessment center of a global think-tank.
              Your task is to come up with ideas to fight climate change. Please
              write around 150 to 200 words with as many high-quality unique
              ideas as possible. Use your creativity to impress your future
              colleagues.
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
          <div style={{ width: '100%' }}>
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
                  style={{
                    display: 'inline',
                    cursor: 'help',
                    color: '#328765',
                    fontSize: '1.2em',
                  }}
                  text={
                    'Creativity is the use of one’s imagination or original ideas to create something new. It is the ability to perceive the world in new ways and to make connections between seemingly unrelated phenomena, and to generate solutions. Creativity is also our ability to tap into our knowledge and all the fragments populating our minds – that we’ve accumulated over the years and to combine them in extraordinary new ways.'
                  }
                  trigger="hover"
                  type="dark"
                  className={styles.tooltip}
                >
                  What is creativity?
                </Tooltip>
                {state.data.currentPage == 'initial' && (
                  <>
                    <Spacer w={5} />
                    {/* Progress bar and feedback legend */}
                    <Tooltip
                      style={{ display: 'inline', cursor: 'help' }}
                      text={
                        'Originality is the ability to produce new work that is distinguishable from other works.'
                      }
                      trigger="hover"
                      type="dark"
                      className={styles.tooltip}
                    >
                      Originality <br />
                    </Tooltip>
                    <br />
                    <Progress
                      colors={colors}
                      type="success"
                      value={state.data.originality * 100}
                    />{' '}
                    <br />
                    <Tooltip
                      style={{ display: 'inline', cursor: 'help' }}
                      text={`Fluency is the ability to think of as many ideas on any given topic and being affluent in one’s thoughts.
                    `}
                      trigger="hover"
                      type="dark"
                      className={styles.tooltip}
                    >
                      Fluency <br />
                    </Tooltip>
                    <br />
                    <Progress
                      colors={colors}
                      type="success"
                      value={state.data.fluency * 100}
                    />{' '}
                    <br />
                    <Tooltip
                      style={{ display: 'inline', cursor: 'help' }}
                      text={`Flexibility is the ability to think of diverging ideas on any given topic and being able to look at it from many different perspectives.
                    `}
                      trigger="hover"
                      type="dark"
                      className={styles.tooltip}
                    >
                      Flexibility <br />
                    </Tooltip>
                    <br />
                    <Progress
                      colors={colors}
                      type="success"
                      value={state.data.flexibility * 100}
                    />
                    <Spacer w={10} />
                    {topicsData.length > 1 ? (
                      <div>
                        <Text
                          h1
                          className={styles.textEditorHeading2}
                          style={{ textAlign: 'center' }}
                        >
                          Here are a few themes we identified in your story.
                        </Text>

                        <div className={styles.topicsContainer}>
                          {/* placeholder to show the topic feedback as bubbles */}
                          {topicsData.map((topic) => {
                            return (
                              <Bubble
                                color={getTopicColorFromID(topic)}
                                name={getTopicCaptionFromID(topic)}
                              />
                            )
                          })}
                        </div>

                        <Spacer w={10} />
                        <div style={{ textAlign: 'center' }}>
                          <ul>
                            {
                              <>
                                <span style={{ textAlign: 'center' }}>
                                  {<Strength data={state.data} />}
                                </span>
                                <br />
                              </>
                            }
                          </ul>
                        </div>
                      </div>
                    ) : null}
                  </>
                )}
                {state.data.currentPage == 'inspireMe' && (
                  <div style={{ width: '100%' }}>
                    <br />
                    These are the topics you mentioned:
                    <br />
                    <br />
                    <div
                      className={styles.bubblesFeedback}
                      style={{ backgroundColor: 'white' }}
                    >
                      {topicsData.map((topic) => {
                        return (
                          <Bubble
                            color={getTopicColorFromID(topic)}
                            name={getTopicCaptionFromID(topic)}
                          />
                        )
                      })}
                    </div>
                    <br />
                    <br />
                    Here we inspire you with new themes or ideas for making your
                    story more creative and novel. Try including these themes in
                    your story, and get your feedback once again.
                    <br />
                    <br />
                    <div
                      className={styles.bubblesFeedback}
                      style={{ backgroundColor: 'white' }}
                    >
                      {otherThanTopics(topicsData).map((topic) => {
                        return (
                          <Bubble
                            color={getTopicColorFromID(topic)}
                            name={getTopicCaptionFromID(topic)}
                          />
                        )
                      })}
                    </div>
                  </div>
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
