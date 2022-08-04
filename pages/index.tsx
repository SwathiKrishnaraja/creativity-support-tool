import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Page, Grid, Text, Button } from '@geist-ui/react'
import { Home as HomeIcon, Info } from '@geist-ui/icons'

const Home: NextPage = () => {
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
                Welcome to the Creativity Support Tool
              </Text>
            </div>
          </Page.Header>
          <Page.Content>
            <Grid.Container gap={2} justify="center" height="100px">
              <Grid xs={24} md={12}>
                <div className={styles.home}>
                  <div className={styles.homeText}>
                    <Text>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      uncover many web sites still in their infancy. Various
                      versions have evolved over the years, sometimes by
                      accident, sometimes on purpose (injected humour and the
                      like)..
                    </Text>
                    <Text h1></Text>
                  </div>
                  <div>
                    <Link href="/editor">
                      <Button type="secondary" ghost auto>
                        Explore creativity tool
                      </Button>
                    </Link>
                  </div>
                </div>
                {/* <Card shadow width="100%" height="50px" /> */}
              </Grid>
            </Grid.Container>
          </Page.Content>
        </Page>
      </main>
    </>
  )
}

export default Home
