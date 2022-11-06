import styles from '../styles/Home.module.css'
import { Text } from '@geist-ui/react'

const Bubble: React.FC<{ name: string; color: string }> = ({ name, color }) => {
  return (
    <Text
      style={{
        backgroundImage: `linear-gradient(150deg, #8ac2a8, ${color})`,
      }}
      h1
      className={styles.bubbleTopicHeading}
    >
      {name}
    </Text>
  )
}

export default Bubble
