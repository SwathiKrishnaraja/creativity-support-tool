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
import Bubble from '../components/Bubble'
import Link from 'next/link'

const Editor: NextPage = () => {
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
                  Here are a few topics we identified for inspiring you with
                  ideas for improvising your essay. Get inspired with new and
                  creative dimensions.
                </Text>

                <div className={styles.bubblesFeedback}>
                  {/* placeholder to show the topic feedback as bubbles */}
                  <Bubble size={80} name="Sea Level increase" color="#AFCC91" />
                  <Bubble size={30} name="Global warming" color="#FCB939" />
                  <Bubble size={20} name="Forest fires" color="#EB95B4" />
                  <Bubble size={60} name="Deforestation" color="#4E9EA3" />
                  <Bubble size={40} name="Natural gas" color="#C196CC" />
                </div>

                <Spacer w={10} />
              </div>
              <div>
              <Text h1 className={styles.textEditorHeading2}>
              Note that, the smaller the size of the bubble, the higher it’s creative value. Therefore, try integrating new ideas from these inspirations and see if it improves your creative abilities. 
              </Text>
              </div>
            </div>
            <Spacer w={5} />
            <Link href="/editor">
              <Button type="secondary-light" className={styles.inspireMeButton}>
                Go back and update
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid.Container>
    </>
  )
}

export default Editor
