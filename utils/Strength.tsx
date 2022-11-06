import styles from './Strength.module.css'

const Strength = ({ data }) => {
  const { fluency, flexibility, originality } = data

  if (fluency < 50 && flexibility < 50 && originality < 50) {
    return (
      <div className={styles.feedback}>
        <p className={styles.feedbackHeading}>
          We identified the following strengths in your creative story:
        </p>
        <ul className={styles.positiveFeedback}>
          <li>
            The themes you mentioned were interesting for the given topic.
          </li>
        </ul>
        <p className={styles.feedbackHeading}>
          Here are a few suggestions for improving your essay:
        </p>
        <ul className={styles.negativeFeedback}>
          <li>Include of as many ideas to the topic.</li>
          <li>
            Think of different perspectives for the given topic, and be more
            divergent in your thought process.
          </li>
          <li>
            Order your thoughts on the story to distinguish your story from
            others works. Include more novel and original ideas into your story.
          </li>
          <li>
            Elaborate on each of your ideas. Elaboration often makes a work more
            creative and intuitive.
          </li>
        </ul>
      </div>
    )
  }

  if (fluency > 50 && flexibility > 50 && originality < 50) {
    return (
      <div className={styles.feedback}>
        <p className={styles.feedbackHeading}>
          We identified the following strengths in your creative story:
        </p>
        <ul className={styles.positiveFeedback}>
          <li>
            The themes you mentioned were fluent indicating that your strength
            is to think of as many ideas as possible.
          </li>
          <li>You have mentioned varied diverging themes that are unique.</li>
        </ul>
        <p className={styles.feedbackHeading}>
          Here are a few suggestions for improving your essay:
        </p>
        <ul className={styles.negativeFeedback}>
          <li>
            Order your thoughts on the story to distinguish your story from
            others works. Include more novel and original ideas into your story.
          </li>
          <li>
            Elaborate on each of your ideas. Elaboration often makes a work more
            creative and intuitive.
          </li>
        </ul>
      </div>
    )
  }

  if (fluency > 50 && flexibility < 50 && originality < 50) {
    return (
      <div className={styles.feedback}>
        <p className={styles.feedbackHeading}>
          We identified the following strengths in your creative story:
        </p>
        <ul className={styles.positiveFeedback}>
          <li>
            The themes you mentioned were fluent indicating that your strength
            is to think of as many ideas as possible.
          </li>
        </ul>
        <p className={styles.feedbackHeading}>
          Here are a few suggestions for improving your essay:
        </p>
        <ul className={styles.negativeFeedback}>
          <li>
            Think of different perspectives for the given topic, and be more
            divergent in your thought process.
          </li>
          <li>
            Order your thoughts on the story to distinguish your story from
            others works. Include more novel and original ideas into your story.
          </li>
          <li>
            Elaborate on each of your ideas. Elaboration often makes a work more
            creative and intuitive.
          </li>
        </ul>
      </div>
    )
  }

  if (fluency < 50 && flexibility < 50 && originality > 50) {
    return (
      <div className={styles.feedback}>
        <p className={styles.feedbackHeading}>
          We identified the following strengths in your creative story:
        </p>
        <ul className={styles.positiveFeedback}>
          <li>The themes you mentioned were unique for the given topic.</li>
          <li>
            Your score on originality is pretty high suggesting that your work
            stands out from the rest.
          </li>
        </ul>
        <p className={styles.feedbackHeading}>
          Here are a few suggestions for improving your essay:
        </p>
        <ul className={styles.negativeFeedback}>
          <li>Include of as many ideas to the topic.</li>
          <li>
            Think of different perspectives for the given topic, and be more
            divergent in your thought process.
          </li>
          <li>
            Elaborate on each of your ideas. Elaboration often makes a work more
            creative and intuitive.
          </li>
        </ul>
      </div>
    )
  }

  if (fluency > 50 && flexibility > 50 && originality > 50) {
    return (
      <div className={styles.feedback}>
        <p className={styles.feedbackHeading}>
          We identified the following strengths in your creative story:
        </p>
        <ul className={styles.positiveFeedback}>
          <li>The themes you mentioned were unique for the given topic.</li>
          <li>
            Your score on originality is pretty high suggesting that your work
            stands out from the rest.
          </li>
          <li>
            The themes you mentioned were fluent indicating that your strength
            is to think of as many ideas as possible.
          </li>
          <li>You have mentioned varied diverging themes that are unique.</li>
        </ul>
        <p className={styles.feedbackHeading}>
          Here are a few suggestions for improving your essay:
        </p>
        <ul className={styles.negativeFeedback}>
          <li>
            Elaborate on each of your ideas. Elaboration often makes a work more
            creative and intuitive.
          </li>
        </ul>
      </div>
    )
  }

  if (fluency > 50 && flexibility < 50 && originality > 50) {
    return (
      <div className={styles.feedback}>
        <p className={styles.feedbackHeading}>
          We identified the following strengths in your creative story:
        </p>
        <ul className={styles.positiveFeedback}>
          <li>
            The themes you mentioned were fluent indicating that your strength
            is to think of as many ideas as possible.
          </li>
          <li>
            Your score on originality is pretty high suggesting that your work
            stands out from the rest.
          </li>
        </ul>
        <p className={styles.feedbackHeading}>
          Here are a few suggestions for improving your essay:
        </p>
        <ul className={styles.negativeFeedback}>
          <li>
            Think of different perspectives for the given topic, and be more
            divergent in your thought process.
          </li>
          <li>
            Elaborate on each of your ideas. Elaboration often makes a work more
            creative and intuitive.
          </li>
        </ul>
      </div>
    )
  }

  if (fluency < 50 && flexibility > 50 && originality < 50) {
    return (
      <div className={styles.feedback}>
        <p className={styles.feedbackHeading}>
          We identified the following strengths in your creative story:
        </p>
        <ul className={styles.positiveFeedback}>
          <li>You have mentioned varied diverging themes that are unique.</li>
        </ul>
        <p className={styles.feedbackHeading}>
          Here are a few suggestions for improving your essay:
        </p>
        <ul className={styles.negativeFeedback}>
          <li>Include of as many ideas to the topic.</li>
          <li>
            Think of different perspectives for the given topic, and be more
            divergent in your thought process.
          </li>
          <li>
            Elaborate on each of your ideas. Elaboration often makes a work more
            creative and intuitive.
          </li>
        </ul>
      </div>
    )
  }

  if (fluency < 50 && flexibility > 50 && originality > 50) {
    return (
      <div className={styles.feedback}>
        <p className={styles.feedbackHeading}>
          We identified the following strengths in your creative story:
        </p>
        <ul className={styles.positiveFeedback}>
          <li>You have mentioned varied diverging themes that are unique.</li>
          <li>
            Your score on originality is pretty high suggesting that your work
            stands out from the rest.
          </li>
        </ul>
        <p className={styles.feedbackHeading}>
          Here are a few suggestions for improving your essay:
        </p>
        <ul className={styles.negativeFeedback}>
          <li>Include of as many ideas to the topic.</li>
          <li>
            Think of different perspectives for the given topic, and be more
            divergent in your thought process.
          </li>
          <li>
            Elaborate on each of your ideas. Elaboration often makes a work more
            creative and intuitive.
          </li>
        </ul>
      </div>
    )
  }
}

export default Strength
