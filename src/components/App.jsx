import { useState } from "react";
import Section from "./Section/Section";
import {FeedbackOptions} from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
 
  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.ceil(good * 100 / countTotalFeedback());
  }

  const chageState = (chageKey) => {
    switch (chageKey){
      case "good":
        setGood(prev => prev + 1);
        break;
      case "neutral":
        setNeutral(prev => prev + 1);
        break;
      case "bad":
        setBad(prev => prev + 1);
        break;
        default:
          return;
    }
  }

  return (
    <div>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions 
          options={["good", "neutral", "bad"]} 
          onLeaveFeedback={chageState}/>
      </Section>
      <Section title={"Statictick"}>
      {countTotalFeedback() ?
        <Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
        :
        <Notification message="There is no feedback"/>
      }
      </Section>
    </div>
  );  
}



