import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from './editor.module.css'
import {
  Page,
  Grid,
  Text,
  Card,
  Textarea,
  Button,
  Spacer,
  Link as GeistLink,
  Progress,
  Dot,
} from '@geist-ui/react'
import { Home as HomeIcon, Info } from '@geist-ui/icons'

const Editor: NextPage = () => {
  const colors = {
    20: '#58A984',
    40: '#328765',
    60: '#1C5A46',
    80: '#003C31',
  }
  return (
    <>
      <main className={styles.main}>
        <Page>
          <Page.Header>
            <div className={styles.headerContent}>
              <div className={styles.headerIcons}>
                <HomeIcon size={36} className={styles.geistHeaderIcon} />
                <Info size={36} className={styles.geistHeaderIcon} />
              </div>
              <Text h1 className={styles.headerText}>
                Creativity Support Tool
              </Text>
            </div>
          </Page.Header>
          <Page.Content>
            <Grid.Container gap={2} justify="center" height="100%">
              <Grid xs={24} md={12} className={styles.textEditor}>
                <Text h1 className={styles.textEditorHeading1}>
                  Story
                </Text>
                <Text h1 className={styles.textEditorHeading2}>
                  Please start writing your story below, and get feedback on how
                  novel your ideas are, and how original your story work is. The
                  tool does not provide feedback on your grammar or writing
                  styles, rather it provides feedback on the creative quality of
                  your ideas, and quantity of ideas.
                </Text>
                <Spacer w={3} />
                <Textarea
                  type="secondary"
                  width="100%"
                  height="100%"
                  placeholder="Now is the optimal workflow for frontend teams. All-in-one: Static and JAMstack deployment, Serverless Functions, and Global CDN."
                />
                <Spacer w={5} />
                <Button
                  type="secondary-light"
                  className={styles.textEditorSubmit}
                >
                  Submit
                </Button>
              </Grid>
              <Grid xs={24} md={12} className={styles.resultPanel}>
                <Card width="100%" height="100%">
                  <div className={styles.resultContainer}>
                    <div>
                      <Text h1 className={styles.resultHeading}>
                        Creative space
                      </Text>
                      <GeistLink
                        color
                        href="#"
                        className={styles.creativityLink}
                      >
                        What is creativity
                      </GeistLink>
                    </div>

                    <Spacer w={5} />

                    <div>
                      <Text h1 className={styles.textEditorHeading2}>
                        Here are a few topics we identified from your essay. The
                        size of the bubble depicts the weight of these topics in
                        your essay.
                      </Text>

                      <Card width="100%" height="300px"></Card>
                      <Spacer w={10} />

                      <Progress colors={colors} type="success" value={25} />

                      <Spacer w={10} />
                      <div className={styles.resultDots}>
                        <Dot type="error" className={styles.creativityLevel1}>
                          Everyday
                        </Dot>
                        <Dot type="warning" className={styles.creativityLevel2}>
                          Transformative
                        </Dot>
                        <Dot className={styles.creativityLevel3}>
                          Professional
                        </Dot>
                        <Dot type="success" className={styles.creativityLevel4}>
                          Eminent
                        </Dot>
                      </div>
                    </div>
                  </div>
                </Card>
                <Spacer w={5} />
                <Button
                  type="secondary-light"
                  className={styles.inspireMeButton}
                >
                  Inspire me
                </Button>
              </Grid>
            </Grid.Container>
          </Page.Content>
        </Page>
      </main>
    </>
  )
}

export default Editor
