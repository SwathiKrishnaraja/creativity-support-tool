import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Grid, Text, Button } from '@geist-ui/react'

/**
 * Next page which renders the information to the user.
 * @returns
 */
const Information: NextPage = () => {
  return (
    <>
      <Grid.Container gap={2} justify="center">
        <Grid xs={24} md={12}>
          <div style={{ opacity: 0.75 }}>
            <div className={styles.informationText}>
              {/* Content should be revised */}
              <h2>General Information</h2>
            </div>
            <div>
              <h3>About the tool:</h3>
              <Text>
                This tool uses natural language processing techniques to process
                your text to compare for novelty with the real world data. The
                tool then uses machine learning algorithms to predict the
                creative score of the text. It then uses reasoning techniques to
                argue why certain parts of the texts were highly creative, and
                why certain parts were considered to be less creative. The tool
                does not store any personal information of the user.
              </Text>
              <h3>How to use?</h3>
              <Text>
                <b>Text Editor:</b> You will be given with a topic to write a
                novel and creative essay based on your past experiences, your
                perspectives, and your beliefs. Below the essay topic, there
                will be a text editor section, where you are allowed to add,
                modify, or delete your text. After you click the ‘Get Feedback!’
                button, you will be provided with a feedback on the Creativity
                Learning Dashboard.
              </Text>
              <Text>
                <b>Creativity Learning Dashboard:</b> The dashboard displays
                three scores that describes your creative level in each of the
                three aspects: Originality (describes how original and novel
                your story is), Fluency (describes how fluent are you with your
                ideas and your thinking), Flexibility (describes how flexible
                your thoughts are, and how you can discuss divergening ideas).
                The dashboard also displays colored themes that were discovered
                in your story. You can hover over the theme to highlight the
                part of text it depicts. Lastly, the dashboard displays
                suggestions for where you need to focus to improve your creative
                performance.
              </Text>
              <Text>
                <b>Inspiration Board:</b> Below the creativity learning
                dashboard, you will find ‘Inspire Me! button. Click it, to allow
                the machine learning model to help you with new ideas for
                improving your story, and also for improving your creative
                score.
              </Text>
              <Text>
                <b>Tip!</b> We recommend you to update and revise your story
                based on the feedback atleast once, to understand how helpful
                the feedback was, for your improvement. If you have more
                questions, kindly contact the provider of the tool.
              </Text>
              <Text>
                <b>Email:</b> swathikrishnaraja@hu-berlin.de
              </Text>
            </div>
            <div className={styles.home}>
              <Link href="/editor">
                <Button type="secondary" ghost auto>
                  Back to Tool
                </Button>
              </Link>
            </div>
          </div>
        </Grid>
      </Grid.Container>
    </>
  )
}

export default Information
