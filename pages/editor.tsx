import type { NextPage } from 'next'
import styles from './editor.module.css'
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

const Editor: NextPage = () => {
  const colors = {
    20: '#58A984',
    40: '#328765',
    60: '#1C5A46',
    80: '#003C31',
  }
  return (
    <>
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
            <Textarea
              type="secondary"
              width="100%"
              height="70%"
              placeholder="Now is the optimal workflow for frontend teams. All-in-one: Static and JAMstack deployment, Serverless Functions, and Global CDN."
            />
            <Spacer w={2} />
            <Button type="secondary-light" className={styles.textEditorSubmit}>
              Submit
            </Button>
          </div>
        </Grid>

        {/* Result panel */}
        <Grid xs={24} md={12} className={styles.resultPanel}>
          <div className={styles.editorLayout}>
            <div className={styles.resultContainer}>
              <div className={styles.resultHeadingContainer}>
                <Text h1 className={styles.resultHeading}>
                  Creative space
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
                    What is creativity ?
                  </GeistLink>
                </Tooltip>
              </div>

              <Spacer w={5} />

              <div>
                <Text h1 className={styles.textEditorHeading2}>
                  Here are a few topics we identified from your essay. The size
                  of the bubble depicts the weight of these topics in your
                  essay.
                </Text>

                <div className={styles.bubblesFeedback}>
                  {/* placeholder to show the topic feedback as bubbles */}
                  <div className={styles.bubble}>
                    <Avatar className={styles.topicA} />
                    <Text h1 className={styles.bubbleTopicHeading}>
                      Climate change
                    </Text>
                  </div>

                  <div className={styles.bubble}>
                    <Avatar className={styles.topicB} />
                    <Text h1 className={styles.bubbleTopicHeading}>
                      Global warming
                    </Text>
                  </div>

                  <div className={styles.bubble}>
                    <Avatar className={styles.topicC} />
                    <Text h1 className={styles.bubbleTopicHeading}>
                      Sea Level increase
                    </Text>
                  </div>
                </div>

                <Spacer w={10} />

                {/* Progress bar and feedback legend */}
                <Progress colors={colors} type="success" value={25} />
                <Spacer w={10} />
                <div className={styles.resultDots}>
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
                </div>
              </div>
            </div>
            <Spacer w={5} />
            <Button type="secondary-light" className={styles.inspireMeButton}>
              Inspire me
            </Button>
          </div>
        </Grid>
      </Grid.Container>
    </>
  )
}

export default Editor
