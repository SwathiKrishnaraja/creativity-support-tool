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
      <Grid.Container gap={2} justify="center" height="100px">
        <Grid xs={24} md={12}>
           <div>
             <div className={styles.informationText}>
              {/* Content should be revised */}
              <h2>General Information</h2>
             </div>
             <div>
              <h3>About the tool:</h3>
              <Text>
              This tool uses natural language processing techniques to process your text and extract parts of your text to compare with the real world knowledge. The tool then uses machine learning algorithms to predict the creative score of the parts of text. It then uses reasoning techniques to argue why certain parts of the texts were highly creative, and why certain parts were considered to be less creative. The tool also stores user information to track the creative performance of the user over time.
              </Text>
              <h3>How to use?</h3> 
              <Text>
              You will be given with a topic to write a novel and creative essay based on your past experiences, your perspectives, and your beliefs. Below the essay topic, there will be a text editor section, where you are allowed to add, modify, or delete your text. After you click the Submit button, you will be provided with a feedback on how creative your essay was, how to further improve your essay. If you would like to get more feedback, click on the More feedback option. Here you will find a visualization on how you have performed overall. You also have the opportunity to update your essay based on the feedback received. If you make multiple updates, you will be able to see your progress over these multiple submissions i.e. you can have a clear visual representation of your creativity progress and improvement. We recommend you to adapt your essay based on the feedback atleast once, to understand how helpful the feedback was, for your improvement. If you have more questions, kindly contact the provider of the tool. Email: 
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
