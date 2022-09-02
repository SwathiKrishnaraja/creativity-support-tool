import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Grid, Text, Button } from '@geist-ui/react'

const Home: NextPage = () => {
  return (
    <>
      <Grid.Container gap={2} justify="center" height="100px">
        <Grid xs={24} md={12}>
          <div className={styles.home}>
            <div className={styles.homeText}>
              <Text h1 className={styles.homeTextHeading}>
                An educational application to help you be more creative in story
                writing...
              </Text>
              <Text>
                Start writing your story in our tool, and get feedback on how
                novel your ideas are, and how original your story work is. The
                tool does not provide feedback on your grammar or writing
                styles, rather it provides feedback on the creative quality of
                your ideas, and quantity of ideas. This tool could act as an
                assistant to help you improve your creative thinking skills.
              </Text>
            </div>
            <div>
              <Link href="/editor">
                <Button type="secondary-light">Let's Begin!</Button>
              </Link>
            </div>
          </div>
        </Grid>
      </Grid.Container>
    </>
  )
}

export default Home
