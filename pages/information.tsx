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
          <div className={styles.home}>
            <div className={styles.homeText}>
              {/* Content should be revised */}
              <Text>
                This tool uses natural language processing techniques to process
                your text and extract parts of your text to compare with the
                real world knowledge. The tool then uses machine learning
                algorithms to predict the creative score of the parts of text.
                It then uses reasoning techniques to argue why certain parts of
                the texts were highly creative, and why certain parts were
                considered to be less creative. The tool also stores user
                information to track the creative performance of the user over
                time.
              </Text>
            </div>
            <div>
              <Link href="/">
                <Button type="secondary" ghost auto>
                  Back to home
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
