import styles from '../styles/Home.module.css'
import { Text } from '@geist-ui/react'

const Bubble: React.FC<{ size: number; name: string; color: string }> = ({
  size,
  name,
  color,
}) => {
  return (
    <div className={styles.bubbleContainer}>
      <div
        style={{
          width: size,
          height: size,
          borderRadius: 100,
          backgroundColor: color,
        }}
      ></div>
      <Text h1 className={styles.bubbleTopicHeading}>
        {name}
      </Text>
    </div>
  )
}

export default Bubble
