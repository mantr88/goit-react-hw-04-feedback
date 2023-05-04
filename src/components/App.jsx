import { useState } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import { AppContainer } from "./App.styled";
import { GlobalStyle } from "./GlobalStyle";


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addNewFeedback = name => {
    countTotalFeedback();
    switch (name) {
      case 'good':
        return setGood(pervState => pervState + 1);
      case 'neutral':
        return setNeutral(pervState => pervState + 1);
      case 'bad':
        return setBad(pervState => pervState + 1);
      default:
        throw new Error(`Unknow button name!`);
    }
  };

  const countTotalFeedback = () => {
    return (good + neutral + bad);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / (good + neutral + bad));
  };

  return (
    <AppContainer>
        <Section title={'Please leave feedback!'}>
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={addNewFeedback} />
        </Section>
        <Section title={'Statistics'}>
          {countTotalFeedback() === 0 ?
          <Notification message='There is no feedback' /> :
          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
          />
          }
        </Section>  
        <GlobalStyle />
        </AppContainer>
  );
};
